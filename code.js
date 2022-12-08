// mostrando en pantalla los grupos
const divGroups = document.querySelector(".divGroups");

dataGroups.map((group) => {
  let div = document.createElement("DIV");
  let header = document.createElement("HEADER");
  header.innerText = group[0];
  div.appendChild(header);

  for (let i = 1; i < group.length; i++) {
    let p = document.createElement("P");
    p.innerText = group[i];
    div.appendChild(p);
  }

  divGroups.appendChild(div);
});

// mostrando los partidos de fase de grupos
const divMatches = document.querySelector(".divMatches");
const matchDates = Object.keys(dataGroupMatches); // ['nov20','nov21'...]

for (let i = 0; i < matchDates.length; i++) {
  let div = document.createElement("DIV");
  let h2 = document.createElement("H2");
  h2.innerText = `${matchDates[i]}`;
  div.appendChild(h2);

  for (let j = 0; j < dataGroupMatches[matchDates[i]].length; j++) {
    let info = dataGroupMatches[matchDates[i]][j];
    let p = document.createElement("p");
    p.innerText = `${info[0]}: ${info[1]} vs ${info[2]}`;
    div.appendChild(p);
  }

  divMatches.appendChild(div);
}
