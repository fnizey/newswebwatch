export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  // Hent issuers fra NewsWeb live
  let issuers = [];
  try {
    const r = await fetch('https://api3.oslo.oslobors.no/v1/newsreader/issuers', {
      headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0' }
    });
    if (r.ok) {
      const json = await r.json();
      issuers = (json.data?.issuers || [])
        .filter(i => i.isActive === 1 && i.symbol && i.name)
        .map(i => ({ symbol: i.symbol, name: i.name }));
    }
  } catch(e) {}

  res.status(200).json({
    issuers,
    profiles: {
      finanswatch: {
        version: 2, label: "FinansWatch",
        keywords: [
          "ACR","B2I","BIEN","BNB","DDB","DNB","DNBNB",
          "EIKA","EIKB","FRSK","FSB","FSBKR","FTFOR","GJF",
          "HELG","INSTA","KLPB","KLPBK","KLPKK","KOMB","KRAB",
          "LAFO","LAKRB","LANBK","LEAB","LSSB","MING","MOBAN",
          "MORG","NAEB","NASB","NDA","NOFIN","NOKR","NONG",
          "OBBK","OBOSBK","PARB","PROT","REBA","RING","ROGBO",
          "ROGS","SANC","SB1NO","SB68","SBGG","SBHA","SBNK",
          "SBNOB","SBNOR","SFSB","SNOR","SOAG","SPBKR","SPOBK",
          "SPOG","SPOL","SPSK","SRBOL","STB","STORB","STORK",
          "STORL","TRYG"
        ],
        ignoreWords: ["rentefastsettelse"]
      },
      techwatch: {
        version: 2, label: "TechWatch",
        keywords: [
          "ATEA","AUTO","BOUV","CONTX","IDEX","ITERA","KIT",
          "LINK","NOD","NORBT","OMDA","PEXIP","STRO","SWON",
          "TECH","TEL","WSTEP","ZAL","ZAP"
        ],
        ignoreWords: []
      },
      energiwatch: {
        version: 2, label: "EnergiWatch",
        keywords: [
          "AKRBP","AKER","AKSO","BONHR","BORR","BWE","BWLPG","BWO",
          "CADLR","CLOUD","DNO","DOFG","ELK","ELMRA","EQNR",
          "FRO","HAFNI","HAUTO","HPUR","HYPRO","IPC",
          "MGN","MPCES","NEL","ODF","ODL","OET","OKEA",
          "OTOVO","PEN","REACH","RECSI","SCATC","SNI",
          "SUBC","TGS","TORM","VAR","VOW","WAWI","YAR"
        ],
        ignoreWords: []
      },
      eiendomswatch: {
        version: 2, label: "EiendomsWatch",
        keywords: ["AFG","ENTRA","MULTI","NORCO","NPRO","NRC","OBOS","OLT","SBO","VEI"],
        ignoreWords: []
      },
      handelswatch: {
        version: 2, label: "HandelsWatch",
        keywords: ["ELO","EPR","GYL","KID","KOMPL","POL","SATS","STRO","TOM","ZAL"],
        ignoreWords: []
      },
      matvarewatch: {
        version: 2, label: "MatvareWatch",
        keywords: ["ABTEC","AUSS","BAKKA","GSF","HBC","HOFIN","LSG","MOWI","ORK","SALM"],
        ignoreWords: []
      },
      medwatch: {
        version: 2, label: "MedWatch",
        keywords: [
          "CRNA","EXTX","GENT","LYTIX","MEDI","NAVA","NYKD",
          "OMDA","ONCIN","PHO","TRMED","VISTN"
        ],
        ignoreWords: []
      }
    }
  });
}
