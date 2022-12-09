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
    if ( info[4] != undefined ) { // si hay resultado
      p.innerHTML = `<i>${info[0]}:</i> ${info[1]} <b>${info[4]}</b> ${info[2]}`
  } else {
      p.innerText = `${info[0]}: ${info[1]} vs ${info[2]}`
  }
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

// ordenando posiciones segun puntos y goles
const nameGroups = Object.keys(dataGroupPoints); // ['A','B'...]
const posiciones = [];

for (let i = 0; i < 8; i++) {
  let grupoDesordenado = dataGroupPoints[nameGroups[i]];
  const teams = Object.keys(dataGroupPoints[nameGroups[i]]); // ['Qatar','Ecuador'...]

  // creo un arr con [puntos+difGol+golesFavor, nombre de equipo]
  let arrGrupo = [];
  for (let j = 0; j < 4; j++) {
    let arrEquipo = [];
    let theNumber = 50;
    // 300    = 3 puntos
    //  48    = dif-2
    //    .12 = goles a favor
    // 348.12
    theNumber +=
      grupoDesordenado[teams[j]].Pts * 100 +
      grupoDesordenado[teams[j]].DG +
      grupoDesordenado[teams[j]].GF / 100;

    arrEquipo.push(theNumber);
    arrEquipo.push(teams[j]);
    arrGrupo.push(arrEquipo);
  }
  // ordeno los equipos por theNumber
  let grupoOrdenado = [];
  for (k = 0; k < 4; k++) {
    let index = 0;
    let max = 0;
    for (m = 0; m < 4; m++) {
      // encuentro el mayor,
      if (arrGrupo[m][0] > max) {
        max = arrGrupo[m][0];
        index = m;
      }
    }
    grupoOrdenado.push(arrGrupo[index][1]); // guardo el nombre del equipo,
    arrGrupo[index][0] = -1; // y no vuelve a ser el mayor
  }
  posiciones.push(grupoOrdenado);
}

// graficando posiciones en los grupos
const divPoints = document.querySelector(".divPoints");

for (let i = 0; i < 8; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("class", `table bg${nameGroups[i]}`);
  let h4 = document.createElement("h1");
  h4.innerText = `GRUPO ${nameGroups[i]}`;
  div.appendChild(h4);

  let informacionTabla = ["P", "W", "D", "L", "DG", "Pts"];
  let p = document.createElement("p");
  p.innerHTML = "&nbsp;";
  let span = document.createElement("SPAN");

  for (let i = 0; i < informacionTabla.length; i++) {
    let b = document.createElement("b");
    b.innerText = `${informacionTabla[i]}`;
    span.appendChild(b);
  }
  span.setAttribute("class", "right pointsTable");
  p.appendChild(span);
  div.appendChild(p);

  for (let k = 0; k < 4; k++) {
    let infoTeam = dataGroupPoints[nameGroups[i]][posiciones[i][k]];
    let p = document.createElement("p");
    // p.setAttribute('class',`team b${infoTeam[3]}`) // grupo

    span = document.createElement("SPAN");
    span.innerText = `${posiciones[i][k]}`;
    div.appendChild(span);

    span = document.createElement("SPAN");
    span.setAttribute("class", "right pointsTable");
    for (let i = 0; i < informacionTabla.length; i++) {
      let b = document.createElement("b");
      b.innerText = `${infoTeam[informacionTabla[i]]}`;
      span.appendChild(b);
    }

    div.appendChild(span);
    div.appendChild(p);
  }

  divPoints.appendChild(div);
}

// detectando final de fase de grupos, grupo G es el ultimo en jugar
let lastGroup = Object.keys(dataGroupPoints.G)
groupPhaseEnd = true
for ( let i=0; i<4; i++ ) {
    // si algún equipo no terminó sus 3 partidos da false
    if ( dataGroupPoints.G[lastGroup[i]].P < 3) groupPhaseEnd = false
}

// armando fase final
if ( groupPhaseEnd === true) {
    dataKnockout8["Dec 3"][0].splice(1,2,posiciones[0][0],posiciones[1][1])
    dataKnockout8["Dec 3"][1].splice(1,2,posiciones[2][0],posiciones[3][1])
    dataKnockout8["Dec 4"][0].splice(1,2,posiciones[3][0],posiciones[2][1])
    dataKnockout8["Dec 4"][1].splice(1,2,posiciones[1][0],posiciones[0][1])
    dataKnockout8["Dec 5"][0].splice(1,2,posiciones[4][0],posiciones[5][1])
    dataKnockout8["Dec 5"][1].splice(1,2,posiciones[6][0],posiciones[7][1])
    dataKnockout8["Dec 6"][0].splice(1,2,posiciones[5][0],posiciones[4][1])
    dataKnockout8["Dec 6"][1].splice(1,2,posiciones[7][0],posiciones[6][1])
}
