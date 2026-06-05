export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  res.status(200).json({
    version: 1,
    keywords: ["bank", "sparebank", "dnb", "nordea", "storebrand"],
    ignoreWords: ["rentefastsettelse"]
  });
}
