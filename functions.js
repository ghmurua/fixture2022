function resultado(res) {
    let arrResultado = res[3].split('-')
    if ( arrResultado[0] > arrResultado[1] ) {
        ganador = res[1]
    } else 
    if ( arrResultado[0] < arrResultado[1] ) {
        ganador = res[2]
    } else {
        let resultadoPenales = res[4].split('-')
        if ( resultadoPenales[0] > resultadoPenales[1] ) {
            ganador = res[1]
        } else {
            ganador = res[2]
        }
        return [`${res[3]} (${res[4]})`,ganador]
    }
    return [res[3],ganador]
}

function guardarGanadores8(i,j,ganador) {
    j++     // si lo dejo en 0 pone un equipo en lugar del horario
    if ( i === 0 || i === 2 ) {
        if ( i === 2 ) i = 1
        dataKnockout4["Dec 9"][i].splice(j,1,ganador)
    }
    else if ( i === 1 || i === 3 ) {
        if ( i === 1 ) i = 0
        else i = 1
        dataKnockout4["Dec 10"][i].splice(j,1,ganador)
    }
}

function guardarGanadores4(i,j,ganador) {
    j++
    if ( i === 0) dataKnockout2["Dec 13"].splice(j,1,ganador)
    else if ( i === 1 ) dataKnockout2["Dec 14"].splice(j,1,ganador)
}

function resultadoSemis(res) {
    let arrResultado = res[3].split('-')
    if ( arrResultado[0] > arrResultado[1] ) {
        ganador = res[1]
        perdedor = res[2]
    } else 
    if ( arrResultado[0] < arrResultado[1] ) {
        ganador = res[2]
        perdedor = res[1]
    } else {
        let resultadoPenales = res[4].split('-')
        if ( resultadoPenales[0] > resultadoPenales[1] ) {
            ganador = res[1]; 
            perdedor = res[2]
        } else {
            ganador = res[2]; 
            perdedor = res[1]
        }
        return [`${res[3]} (${res[4]})`,ganador,perdedor]
    }
    return [res[3],ganador,perdedor]
}