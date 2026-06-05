export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=3600'); // cache 1 time

  try {
    const r = await fetch('https://api3.oslo.oslobors.no/v1/newsreader/issuers', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; NewsWebMonitor/1.0)',
      }
    });
    if (!r.ok) throw new Error(`Upstream ${r.status}`);
    const json = await r.json();
    const issuers = (json.data?.issuers || [])
      .filter(i => i.isActive === 1 && i.symbol && i.name)
      .map(i => ({ symbol: i.symbol, name: i.name }));
    res.status(200).json({ issuers });
  } catch(err) {
    res.status(500).json({ issuers: [], error: err.message });
  }
}
