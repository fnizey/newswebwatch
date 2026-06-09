export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  res.status(200).json({
    profiles: {
      finanswatch: {
        version: 5, label: "FinansWatch",
        keywords: [
          "AASB","AGDER","ANSB","ASKSB","AURG",
          "ACR","B2I","BESB","BIEN","BJSP","BLSB","BNB","BOSB",
          "DDB","DNB","DNBNB",
          "EIKA","EIKB","EIKR",
          "FFSB","FRSK","FSB","FSBKR","FTFOR",
          "GJF","GRONG","GRSB",
          "HDSB","HEBK","HELG","HESB","HGSB","HJSB",
          "INSTA","JAREN","JESB",
          "KDSB","KLPB","KLPBK","KLPKK","KOMB","KRAB",
          "LAFO","LAKRB","LANBK","LEAB","LISB","LOSB","LSSB","LUSB",
          "MELG","MESB","MING","MOBAN","MOBK","MORG",
          "NAEB","NASB","NDA","NISB","NOFIN","NOKR","NONG",
          "OBBK","OBOSBK","ODAL","OPSB","ORKSP","ORLSB","ORSP",
          "PARB","PROT","REBA","RING","ROGBO","ROGS","ROMER","ROSB",
          "SANC","SB1NO","SB68","SBGG","SBHA","SBNK","SBNOB","SBNOR",
          "SFSB","SKASB","SKUE","SNOR","SOAG","SOGSB","SPBKR","SPOBK",
          "SPOG","SPOL","SPSK","SRBOL","SRSB","STB","STORB","STORK","STORL","STSB",
          "TINDE","TOLG","TOSB","TRGSB","TRSB","TRYG","TYSB",
          "VALSB","VASB","VEBK","VOSSB","VVL"
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
        version: 3, label: "EiendomsWatch",
        keywords: ["AFG","BNORE","ENTRA","MULTI","NORCO","NPRO","NRC","OBOS","OLT","SBO","VEI"],
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
        version: 3, label: "MedWatch",
        keywords: [
          "CRNA","ELABS","EXTX","GENT","LYTIX","MEDI","NAVA","NYKD",
          "OMDA","ONCIN","PHO","TRMED","VISTN"
        ],
        ignoreWords: []
      }
    }
  });
}
