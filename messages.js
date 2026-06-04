export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const upstream = 'https://newsweb.oslobors.no/api/messages?category=&issuer=&fromDate=&toDate=&market=&messageTitle=&start=0&limit=25';
    const r = await fetch(upstream, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; NewsWebMonitor/1.0)',
      },
    });

    if (!r.ok) {
      return res.status(r.status).json({ error: `Upstream returned ${r.status}` });
    }

    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
