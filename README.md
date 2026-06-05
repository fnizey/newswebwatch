# NewsWeb Monitor

Poller Oslo Børs NewsWeb hvert 15. sekund via en Vercel serverless proxy og
varsler med lyd + browser push når søkeord matcher nye meldinger.

## Mappestruktur

```
newsweb-monitor/
├── index.html        ← hele frontend-appen
├── vercel.json       ← routing-config
├── README.md
└── api/
    └── messages.js   ← serverless proxy (løser CORS)
```

## Deploy

1. Push mappen til et GitHub-repo
2. [vercel.com](https://vercel.com) → New Project → importer repo
3. Framework Preset: **Other**
4. Deploy ✓

Proxyen på `/api/messages` henter fra NewsWeb server-side,
så det er null CORS-problemer i browser.
