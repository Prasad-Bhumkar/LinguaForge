export async function translateText(text, targetLang) {
  const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY
    },
    body: JSON.stringify({
      q: text,
      source: 'en',
      target: targetLang
    })
  };

  try {
    const res = await fetch(url, options);

    // Check for quota/rate limit errors
    if (res.status === 429) {
      throw new Error('RATE_LIMIT');
    }
    if (res.status === 403) {
      throw new Error('QUOTA_EXCEEDED');
    }
    if (!res.ok) {
      throw new Error(`HTTP_${res.status}`);
    }

    const data = await res.json();
    return data?.data?.translations?.translatedText || '';
  } catch (err) {
    console.error('Translation error:', err);
    throw err;
  }
}
