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

// calculando informacion de cada equipo: partidos, goles y puntos según resultados
matchDates.map((match) => {
  let partidosEnElDia = dataGroupMatches[match].length;
  for (let i = 0; i < partidosEnElDia; i++) {
    let grupo = dataGroupMatches[match][i][3]; // "A"

    let partido = dataGroupMatches[match][i]; // ["19:00", "Qatar", "Ecuador", "A", "0-2"]
    if (partido[4] != undefined) {
      // si hay resultado
      let resultado = partido[4].split("-");

      let equipo1 = dataGroupPoints[grupo][partido[1]];
      let equipo2 = dataGroupPoints[grupo][partido[2]];

      // se suman partido jugado y goles a favor
      equipo1.P++;
      equipo1.GF += parseInt(resultado[0]);
      equipo2.P++;
      equipo2.GF += parseInt(resultado[1]);

      // calcular diferencia de gol
      let dif = resultado[0] - resultado[1];

      if (dif > 0) {
        // gana el local: suman W, L, Pts, DG
        equipo1.W++;
        equipo1.Pts += 3;
        equipo1.DG += dif;
        equipo2.L++;
        equipo2.DG -= dif;
      } else if (dif < 0) {
        equipo2.W++;
        equipo2.Pts += 3;
        equipo2.DG -= dif;
        equipo1.L++;
        equipo1.DG += dif;
      }
      // empate: suman D y Pts
      else {
        equipo1.D++;
        equipo1.Pts += 1;
        equipo2.D++;
        equipo2.Pts += 1;
      }
    }
  }
});
