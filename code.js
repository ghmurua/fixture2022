const divGroups = document.querySelector('.divGroups')

dataGroups.map(group => {
    let div = document.createElement('DIV')
    let header = document.createElement('HEADER')
    header.innerText = group[0]
    div.appendChild(header)

    for ( let i=1; i<group.length; i++) {
        let p = document.createElement('P')
        p.innerText =  group[i]
        div.appendChild(p)
    }

    divGroups.appendChild(div)
})
