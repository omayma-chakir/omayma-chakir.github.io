export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "professional" | "personal" | "dev-tools" | "research";
	level: "foundational" | "beginner" | "intermediate" | "advanced" | "expert";
	experience: { years: number; months: number };
	color?: string;
}

// ────────────────────────────────────────────────────────────────
// Bio — structured as headline + content blocks
// ────────────────────────────────────────────────────────────────
export const bioHeadline = "Security Engineer / Researcher";
export const bioHeadlineSub = "";

export const bioBlocks = [
	{
		label: "",
		text: `My cybersecurity career began in the SOC: the unglamorous, high-signal work of watching attacks unfold in real time.`,
	},
	{
		label: "Defense",
		text: `From there, I moved into Incident Response and began architecting defensive infrastructure: deploying EDR/XDR platforms, integrating SIEM solutions across multi-client environments, and leading security operations within Kubernetes-native infrastructure, from asset onboarding to full incident coordination.`,
	},
	{
		label: "Offense",
		text: `The offensive side is where my curiosity runs deepest. I study EDR evasion and adversary tradecraft... not as a hobby, but because understanding the attacker’s mindset is the most efficient way to build a better defense.`,
	},
	{
		label: "",
		text: `<strong>Still learning. Still building...</strong>`,
	},
];

// ────────────────────────────────────────────────────────────────
// 1. Professional Experience
// ────────────────────────────────────────────────────────────────
export const professionalSkills: Skill[] = [
	{
		id: "k8s-sec",
		name: "Kubernetes Security",
		description: "Managed security operations in Kubernetes infrastructure.",
		icon: "logos:kubernetes",
		category: "professional",
		level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#326ce5",
	},
	{
		id: "siem-eng",
		name: "SIEM Engineering",
		description: "Deployed and tuned LogPoint (3 clients), ELK (2 clients).",
		icon: "mdi:shield-search",
		category: "professional",
		level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#ef4444",
	},
	{
		id: "edr-xdr",
		name: "EDR/XDR Integration",
		description: "Securing PoC licenses for research purposes 😉",
		icon: "mdi:security-network",
		category: "professional",
		level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#f59e0b",
	},
	{
		id: "ad-pentest",
		name: "Active Directory Pentesting",
		description: "CRTP and OSCP lab experience, still hunting more real-world exposure",
		icon: "mdi:microsoft-windows",
		category: "professional",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#7c3aed",
	},
	{
		id: "nac-integration",
		name: "NAC Integration",
		description: "One full enterprise-level deployment under my belt.",
		icon: "mdi:lan-connect",
		category: "professional",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#0891b2",
	},
	{
		id: "soc-ops",
		name: "SOC Operations L1",
		description: "Early-career 'boots on the ground' experience.",
		icon: "mdi:monitor-eye",
		category: "professional",
		level: "foundational",
		experience: { years: 0, months: 8 },
		color: "#6b7280",
	},
];

// ────────────────────────────────────────────────────────────────
// 2. Research / Self-Learned
// ────────────────────────────────────────────────────────────────
export const researchSkills: Skill[] = [
	// { id: "pde-dl",      name: "PDEs & Deep Learning",      description: "Solving PDEs using PINNs.",                                  icon: "mdi:function-variant",            category: "research", level: "advanced", experience: { years: 3, months: 0 }, color: "#3b82f6" },
	// { id: "stochastic",  name: "Stochastic Modeling",        description: "Probability and variable system analysis.",                  icon: "mdi:dice-multiple",               category: "research", level: "advanced", experience: { years: 2, months: 0 }, color: "#8b5cf6" },
	// { id: "numerical",   name: "Numerical Analysis",         description: "Stability and convergence analysis for iterative solvers.",  icon: "mdi:chart-bell-curve-cumulative", category: "research", level: "advanced", experience: { years: 3, months: 0 }, color: "#6366f1" },
	// { id: "lin-alg",     name: "Linear Algebra & Calculus",  description: "Tensor operations, Automatic differentiations...",           icon: "mdi:math-integral",               category: "research", level: "expert",   experience: { years: 5, months: 0 }, color: "#4f46e5" },
	{
		id: "python-research",
		name: "Python",
		description: "",
		icon: "logos:python",
		category: "research",
		level: "advanced",
		experience: { years: 7, months: 0 },
		color: "#3776AB",
	},
	{
	id: "latex",
	name: "LaTeX",
	description: "",
	icon: "simple-icons:latex",
	category: "research",
	level: "advanced",
	experience: { years: 2, months: 0 },
	color: "#008080",
},
	
	{
	id: "quarto",
	name: "Quarto",
	description: "",
	icon: "simple-icons:quarto",
	category: "research",
	level: "intermediate",
	experience: { years: 0, months: 3 },
	color: "#75AADB",
},
		{
		id: "csharp",
		name: "C#",
		description:
			"",
		icon: "devicon:csharp",
		category: "research",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#239120",
	},
];

// ────────────────────────────────────────────────────────────────
// 3. Dev Tools & Frameworks
// ────────────────────────────────────────────────────────────────
export const devToolsSkills: Skill[] = [
	{
		id: "astro",
		name: "Astro",
		description: "Built this blog using Astro with the Fuwari template.",
		icon: "logos:astro-icon",
		category: "dev-tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#FF5D01",
	},

	{
		id: "git",
		name: "Git",
		description:
			"",
		icon: "logos:git-icon",
		category: "dev-tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "nextjs",
		name: "Next.js",
		description:
			"",
		icon: "logos:nextjs-icon",
		category: "dev-tools",
		level: "beginner",
		experience: { years: 1, months: 4 },
		color: "#616161",
	},
];

// ────────────────────────────────────────────────────────────────
// Combined list
// ────────────────────────────────────────────────────────────────
export const skillsData: Skill[] = [
	...professionalSkills,
	...researchSkills,
	...devToolsSkills,
];

// ────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────
export const getSkillStats = () => ({
	total: skillsData.length,
	byLevel: {
		foundational: skillsData.filter((s) => s.level === "foundational").length,
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	},
	byCategory: {
		professional: professionalSkills.length,
		research: researchSkills.length,
		"dev-tools": devToolsSkills.length,
	},
});

export const getSkillsByCategory = (cat?: string) =>
	!cat || cat === "all"
		? skillsData
		: cat === "professional"
			? professionalSkills
			: cat === "research"
				? researchSkills
				: cat === "dev-tools"
					? devToolsSkills
					: skillsData.filter((s) => s.category === cat);

export const getAdvancedSkills = () =>
	skillsData.filter((s) => s.level === "advanced" || s.level === "expert");

export const getTotalExperience = () => {
	const total = skillsData.reduce(
		(t, s) => t + s.experience.years * 12 + s.experience.months,
		0,
	);
	return { years: Math.floor(total / 12), months: total % 12 };
};