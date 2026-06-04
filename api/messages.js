export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const r = await fetch('https://api3.oslo.oslobors.no/v1/newsreader/list', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; NewsWebMonitor/1.0)',
      },
    });

    if (!r.ok) throw new Error(`Upstream HTTP ${r.status}`);

    const json = await r.json();
    // Returnerer data.messages direkte så frontend slipper å pakke ut
    res.status(200).json({ messages: json.data?.messages || [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
