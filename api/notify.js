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

    // Power Automate Workflows krever Adaptive Card-format
    const payload = {
      type: "AdaptiveCard",
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      version: "1.4",
      body: [
        {
          type: "TextBlock",
          text: `📰 ${issuer || ''}${issuerName ? ` · ${issuerName}` : ''}`,
          weight: "Bolder",
          color: "Attention",
          size: "Small"
        },
        {
          type: "TextBlock",
          text: title || '–',
          wrap: true,
          weight: "Bolder",
          size: "Medium"
        },
        {
          type: "TextBlock",
          text: `${category ? `${category} · ` : ''}${time}`,
          isSubtle: true,
          size: "Small"
        }
      ],
      actions: [
        {
          type: "Action.OpenUrl",
          title: "Åpne på NewsWeb",
          url: msgUrl
        }
      ]
    };

    const r = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseText = await r.text();
    res.status(200).json({ ok: r.ok, status: r.status, body: responseText });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
