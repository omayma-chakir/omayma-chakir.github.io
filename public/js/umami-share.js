(function (global) {
  const cacheKey = 'umami-share-cache';
  const cacheTTL = 3600_000; // 1 hour

  async function fetchShareData(baseUrl, shareId) {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < cacheTTL) {
          console.log('[Umami] Using cached share data');
          return parsed.value;
        }
      } catch (error) {
        console.warn('[Umami] Clearing invalid cache:', error);
        localStorage.removeItem(cacheKey);
      }
    }

    const shareUrl = `${baseUrl}/api/share/${shareId}`;

    const res = await fetch(shareUrl);
    if (!res.ok) {
      const errorText = await res.text();
      console.error('[Umami] Failed to fetch share info:', {
        status: res.status,
        statusText: res.statusText,
        url: shareUrl,
        response: errorText
      });
      throw new Error(`Failed to get Umami share info: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), value: data }));
    return data;
  }

  /**
   * Get Umami share data (websiteId, token)
   * Reuses cache within TTL and uses a global Promise to prevent concurrent requests
   * @param {string} baseUrl
   * @param {string} shareId
   * @returns {Promise<{websiteId: string, token: string}>}
   */
  global.getUmamiShareData = function (baseUrl, shareId) {
    if (!global.__umamiSharePromise) {
      global.__umamiSharePromise = fetchShareData(baseUrl, shareId).catch((err) => {
        delete global.__umamiSharePromise;
        throw err;
      });
    }
    return global.__umamiSharePromise;
  };

  global.clearUmamiShareCache = function () {
    localStorage.removeItem(cacheKey);
    delete global.__umamiSharePromise;
  };
})(window);
