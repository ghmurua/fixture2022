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
  "Nov 20": [["19:00", "Qatar", "Ecuador", "A"]],
  "Nov 21": [
    ["16:00", "Senegal", "Paises Bajos", "A"],
    ["19:00", "Inglaterra", "Irán", "B"],
    ["22:00", "Estados Unidos", "Gales", "B"],
  ],
  "Nov 22": [
    ["13:00", "Argentina", "Arabia Saudita", "C"],
    ["16:00", "Dinamarca", "Túnez", "D"],
    ["19:00", "México", "Polonia", "C"],
    ["22:00", "Francia", "Australia", "D"],
  ],
  "Nov 23": [
    ["13:00", "Marruecos", "Croacia", "F"],
    ["16:00", "Alemania", "Japón", "E"],
    ["19:00", "España", "Costa Rica", "E"],
    ["22:00", "Bélgica", "Canadá", "F"],
  ],
  "Nov 24": [
    ["13:00", "Suiza", "Camerún", "G"],
    ["16:00", "Uruguay", "Corea del Sur", "H"],
    ["19:00", "Portugal", "Ghana", "H"],
    ["22:00", "Brasil", "Serbia", "G"],
  ],
  "Nov 25": [
    ["13:00", "Gales", "Irán", "B"],
    ["16:00", "Qatar", "Senegal", "A"],
    ["19:00", "Paises Bajos", "Ecuador", "A"],
    ["22:00", "Inglaterra", "Estados Unidos", "B"],
  ],
  "Nov 26": [
    ["13:00", "Túnez", "Australia", "D"],
    ["16:00", "Polonia", "Arabia Saudita", "C"],
    ["19:00", "Francia", "Dinamarca", "D"],
    ["22:00", "Argentina", "México", "C"],
  ],
  "Nov 27": [
    ["13:00", "Japón", "Costa Rica", "E"],
    ["16:00", "Bélgica", "Marruecos", "F"],
    ["19:00", "Croacia", "Canadá", "F"],
    ["22:00", "España", "Alemania", "E"],
  ],
  "Nov 28": [
    ["13:00", "Camerún", "Serbia", "G"],
    ["16:00", "Corea del Sur", "Ghana", "H"],
    ["19:00", "Brasil", "Suiza", "G"],
    ["22:00", "Portugal", "Uruguay", "H"],
  ],
  "Nov 29": [
    ["18:00", "Paises Bajos", "Qatar", "A"],
    ["18:00", "Ecuador", "Senegal", "A"],
    ["22:00", "Irán", "Estados Unidos", "B"],
    ["22:00", "Gales", "Inglaterra", "B"],
  ],
  "Nov 30": [
    ["18:00", "Túnez", "Francia", "D"],
    ["18:00", "Australia", "Dinamarca", "D"],
    ["22:00", "Arabia Saudita", "México", "C"],
    ["22:00", "Polonia", "Argentina", "C"],
  ],
  "Dec 1": [
    ["18:00", "Canadá", "Marruecos", "F"],
    ["18:00", "Croacia", "Bélgica", "F"],
    ["22:00", "Costa Rica", "Alemania", "E"],
    ["22:00", "Japón", "España", "E"],
  ],
  "Dec 2": [
    ["18:00", "Corea del Sur", "Portugal", "H"],
    ["18:00", "Ghana", "Uruguay", "H"],
    ["22:00", "Camerún", "Brasil", "G"],
    ["22:00", "Serbia", "Suiza", "G"],
  ],
};
