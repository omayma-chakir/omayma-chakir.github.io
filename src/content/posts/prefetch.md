---
title: Windows Forensics Prefetch
published: 2025-08-08
description: Performance optimazation.
tags: [Forensics, Windows]
category: Windows Forensics
draft: false
---

<!-- ![Photo by Hans Eiskonen on Unsplash](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*LtncC4aM2anrh9oR) -->



Prefetch is a utility that is intended to improve Windows and application startup performance by loading application data into memory before it is demanded.

*   **Creation:** A prefetch file is generated the first time an application is executed from a specific path.
*   **Location:** Stored in `C:\Windows\Prefetch`

![C:\Windows\Prefetch](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7fNw8jXdJXFZUs3rA9DYhA.png)

*   **File Naming Convention:**

`[ApplicationName]-[8-character_hash_of_path].pf`

**Example:** ANYDESK.EXE-D0317C50.pf

![captionless image](https://miro.medium.com/v2/format:webp/1*9sBr47397HNkPG-nqsf01w.png)

The hash in the filename corresponds to a value calculated from the full device path of the executable using an iterative polynomial hash with specific constants that vary by Windows version.

For most executables, the hash is derived solely from this device path. However, for hosting applications like svchost.exe, the hash also includes the command line used to launch the application in these cases, the final hash is the sum of two parts: one computed from the executable’s device path, and another from the **case-sensitive** and **space-sensitive** command line.

Additionally, the assignment of volume numbers affects the device path. On Windows 7 and later, the presence of a 100MB system reserved partition means the C: drive is typically assigned HarddiskVolume2, not Volume1, which changes the input to the hash function and even small changes such as letter case , extra spaces, or different command-line formatting can result in a completely different hash. This makes the prefetch hash precise but tricky to reverse.

You can read more on that here :🔗 [Prefetch Hash Calculator + a hash lookup table xp/vista/w7/w2k3/w2k8 | Hexacorn](http://www.hexacorn.com/blog/2012/06/13/prefetch-hash-calculator-a-hash-lookup-table-xpvistaw7w2k3w2k8/)

### Each prefetch file contains:

1.  Hash of the original path of the application
2.  Application name
3.  The number of times the application was run
4.  Timestamps for the last eight times the application was run (Windows 8+)

### Prefetch File Limits by OS Version

*   Windows 7 and older : 128
*   Windows 8 and newer : 1,024

### Why Are Prefetch Files Important in Digital Forensics?

1.  **Prove Program Execution even if the original executable has been deleted**.
2.  **Support Anti-Forensics Detection ;c**an reveal use of tools like CCleaner or other cleanup utilities used to erase evidence.
3.  **Aid Malware Investigations ;**Help identify when and how often malicious executables were run.
4.  **Enable Timeline Analysis by p**rovide timestamps that help reconstruct a user’s or attacker’s activity over time.
5.  **Link Related Activity :** Multiple prefetch files with the same path hash may indicate execution from the same (possibly deleted) directory, useful in identifying malware clusters.

### How to Analyze Prefetch Files: Using PECmd.exe ( My favorite yet)

One of the best tools for analyzing prefetch files is PECmd.exe, developed by Eric Zimmerman (free and open source).

🔗 [https://ericzimmerman.github.io](https://ericzimmerman.github.io/)

**Features of PECmd:**

Parses all data from `.pf` files

Extracts:

*   Execution timestamps
*   Run count
*   File and directory interactions
*   Metadata (size, version)

Can analyze:

*   A single prefetch file
*   Entire Prefetch directory

Exports results to CSV, TLE (Timeline Explorer), or JSON

### Example: Analyzing a Single Prefetch File

Running `PECmd` against `EVIL.EXE-12345678.pf` gives output like:

```
Created on:       2022-08-18 19:19:18
Modified on:      2022-08-18 19:19:18
Last Accessed:    2022-08-18 19:19:18
Executable:       EVIL.EXE
Size:             102,400 bytes
Version:          1.0.0.0
Run Count:        1
Last Run:         2022-08-18 19:19:08   ← Actual execution time
Files Referenced:
  C:\Users\Bob\AppData\Temp\EVIL.EXE
  C:\Windows\System32\kernel32.dll
  E:\USBDrive\config.dat
Directories Referenced:
  C:\Users\Bob\AppData\Local\Temp
  E:\USBDrive
```

What are we seeing ?

*   The file ran once, from a user temp folder (a red flag!)
*   It accessed a USB drive (possible data exfiltration)

:::note
Prefetch records 10 seconds of post-execution activity( sometimes less depending on the exucatable size but its what is mentioned in documentation ) including:

*   Files accessed
*   Registry keys opened
*   DLLs loaded

Because of this, the actual execution time is typically 10 seconds earlier than the file system timestamp (creation/modification) of the .pf file

Prefetch is disabled by default in Windows servers / enabled by default in Windows workstations
:::

🔗 [Prefetch Deep Dive](https://www.youtube.com/watch?v=f4RAtR_3zcs)

🔗 [Forensic Value of Prefetch — SANS Internet Storm Center](https://isc.sans.edu/diary/29168)

🔗[Invoke-IR | PowerShell Digital Forensics and Incident Response](https://web.archive.org/web/20241204095737/http://www.invoke-ir.com/2013/09/whats-new-in-prefetch-for-windows-8.html)

🔗[Disabling Prefetch | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions/windows/embedded/ms940847(v=winembedded.5)?redirectedfrom=MSDN) 

🔗[Forensic Analysis of Prefetch files in Windows — Magnet Forensics](https://www.magnetforensics.com/blog/forensic-analysis-of-prefetch-files-in-windows/)

🔗[SANS Digital Forensics and Incident Response Blog | What is New in Windows Application Execution? | SANS Institute](https://web.archive.org/web/20241113164050/https://www.sans.org/blog/what-is-new-in-windows-application-execution/)