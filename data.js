const dataGroups = [
  ["A", "Qatar", "Ecuador", "Senegal", "Paises Bajos"],
  ["B", "Inglaterra", "Irán", "Estados Unidos", "Gales"],
  ["C", "Argentina", "Arabia Saudita", "México", "Polonia"],
  ["D", "Francia", "Australia", "Dinamarca", "Túnez"],
  ["E", "España", "Costa Rica", "Alemania", "Japón"],
  ["F", "Bélgica", "Canadá", "Marruecos", "Croacia"],
  ["G", "Brasil", "Serbia", "Suiza", "Camerún"],
  ["H", "Portugal", "Ghana", "Uruguay", "Corea del Sur"],
];

const dataGroupMatches = {
  "Nov 20": [
    ["19:00", "Qatar", "Ecuador", "A", "0-2"]
  ],
  "Nov 21": [
    ["16:00", "Senegal", "Paises Bajos", "A", "0-2"],
    ["19:00", "Inglaterra", "Irán", "B", "6-2"],
    ["22:00", "Estados Unidos", "Gales", "B", "1-1"]
  ],
  "Nov 22": [
    ["13:00", "Argentina", "Arabia Saudita", "C", "1-2"],
    ["16:00", "Dinamarca", "Túnez", "D", "0-0"],
    ["19:00", "México", "Polonia", "C", "0-0"],
    ["22:00", "Francia", "Australia", "D", "4-1"]
  ],
  "Nov 23": [
    ["13:00", "Marruecos", "Croacia", "F", "0-0"],
    ["16:00", "Alemania", "Japón", "E", "1-2"],
    ["19:00", "España", "Costa Rica", "E", "7-0"],
    ["22:00", "Bélgica", "Canadá", "F", "1-0"]
  ],
  "Nov 24": [
    ["13:00", "Suiza", "Camerún", "G", "1-0"],
    ["16:00", "Uruguay", "Corea del Sur", "H", "0-0"],
    ["19:00", "Portugal", "Ghana", "H", "3-2"],
    ["22:00", "Brasil", "Serbia", "G", "2-0"]
  ],
  "Nov 25": [
    ["13:00", "Gales", "Irán", "B", "0-2"],
    ["16:00", "Qatar", "Senegal", "A", "1-3"],
    ["19:00", "Paises Bajos", "Ecuador", "A", "1-1"],
    ["22:00", "Inglaterra", "Estados Unidos", "B", "0-0"]
  ],
  "Nov 26": [
    ["13:00", "Túnez", "Australia", "D", "0-1"],
    ["16:00", "Polonia", "Arabia Saudita", "C", "2-0"],
    ["19:00", "Francia", "Dinamarca", "D", "2-1"],
    ["22:00", "Argentina", "México", "C", "2-0"]
  ],
  "Nov 27": [
    ["13:00", "Japón", "Costa Rica", "E", "0-1"],
    ["16:00", "Bélgica", "Marruecos", "F", "0-2"],
    ["19:00", "Croacia", "Canadá", "F", "4-1"],
    ["22:00", "España", "Alemania", "E", "1-1"]
  ],
  "Nov 28": [
    ["13:00", "Camerún", "Serbia", "G", "3-3"],
    ["16:00", "Corea del Sur", "Ghana", "H", "2-3"],
    ["19:00", "Brasil", "Suiza", "G", "1-0"],
    ["22:00", "Portugal", "Uruguay", "H", "2-0"]
  ],
  "Nov 29": [
    ["18:00", "Paises Bajos", "Qatar", "A", "2-0"],
    ["18:00", "Ecuador", "Senegal", "A", "1-2"],
    ["22:00", "Irán", "Estados Unidos", "B", "0-1"],
    ["22:00", "Gales", "Inglaterra", "B", "0-3"]
  ],
  "Nov 30": [
    ["18:00", "Túnez", "Francia", "D", "1-0"],
    ["18:00", "Australia", "Dinamarca", "D", "1-0"],
    ["22:00", "Arabia Saudita", "México", "C", "1-2"],
    ["22:00", "Polonia", "Argentina", "C", "0-2"]
  ],
  "Dec 1": [
    ["18:00", "Canadá", "Marruecos", "F", "1-2"],
    ["18:00", "Croacia", "Bélgica", "F", "0-0"],
    ["22:00", "Costa Rica", "Alemania", "E", "2-4"],
    ["22:00", "Japón", "España", "E", "2-1"]
  ],
  "Dec 2": [
    ["18:00", "Corea del Sur", "Portugal", "H", "2-1"],
    ["18:00", "Ghana", "Uruguay", "H", "0-2"],
    ["22:00", "Camerún", "Brasil", "G", "1-0"],
    ["22:00", "Serbia", "Suiza", "G", "2-3"]
  ],
};

const dataGroupPoints = {
  A : {
    Qatar: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Ecuador: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Senegal: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    "Paises Bajos": { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  B : {
    Inglaterra: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Irán: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    "Estados Unidos": { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Gales: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  C : {
    Argentina: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    "Arabia Saudita": { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    México: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Polonia: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  D : {
    Francia: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Australia: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Dinamarca: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Túnez: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  E : {
    España: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    "Costa Rica": { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Alemania: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Japón: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  F : {
    Bélgica: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Canadá: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Marruecos: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Croacia: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  G : {
    Brasil: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Serbia: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Suiza: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Camerún: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  },
  H : {
    Portugal: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Ghana: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    Uruguay: { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
    "Corea del Sur": { P: 0, W: 0, D: 0, L: 0, GF: 0, DG: 0, Pts: 0 },
  }
}