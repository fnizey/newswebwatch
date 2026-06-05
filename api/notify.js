export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { webhookUrl, title, issuer, issuerName, category, time, messageId } = req.body;
    if (!webhookUrl) return res.status(400).json({ error: 'No webhookUrl' });

    const msgUrl = messageId
      ? `https://newsweb.oslobors.no/message/${messageId}`
      : 'https://newsweb.oslobors.no';

    // Power Automate / Teams Workflows forventer enkel JSON-body
    const payload = {
      text: `📰 **${issuer || '–'}** ${issuerName ? `(${issuerName})` : ''}\n${category ? `*${category}*\n` : ''}**${title}**\n[Åpne på NewsWeb](${msgUrl}) · ${time}`
    };

    const r = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    res.status(200).json({ ok: r.ok, status: r.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
