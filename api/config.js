export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  res.status(200).json({
    profiles: {
      finanswatch: {
        version: 1,
        label: "FinansWatch",
        keywords: ["bank", "sparebank", "dnb", "nordea", "storebrand", "forsikring", "pensjon"],
        ignoreWords: ["rentefastsettelse"]
      },
      techwatch: {
        version: 1,
        label: "TechWatch",
        keywords: ["atea", "bouvet", "crayon", "sopra steria", "microsoft", "nordic semiconductor"],
        ignoreWords: []
      },
      energiwatch: {
        version: 1,
        label: "EnergiWatch",
        keywords: ["equinor", "aker bp", "var energi", "havvind", "konsesjoner", "kraft"],
        ignoreWords: []
      },
      eiendomswatch: {
        version: 1,
        label: "EiendomsWatch",
        keywords: ["obos", "selvaag", "entra", "norwegian property", "eiendom"],
        ignoreWords: []
      },
      handelswatch: {
        version: 1,
        label: "HandelsWatch",
        keywords: ["komplett", "xxl", "kid", "europris", "kahoot"],
        ignoreWords: []
      },
      medwatch: {
        version: 1,
        label: "MedWatch",
        keywords: ["photocure", "navamedic", "nordic bioscience", "algeta", "legemiddel"],
        ignoreWords: []
      },
      matvarewatch: {
        version: 1,
        label: "MatvareWatch",
        keywords: ["orkla", "austevoll", "grieg seafood", "mowi", "sjømat"],
        ignoreWords: []
      }
    }
  });
}
