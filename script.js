$(document).ready(() => {
    let grid = document.getElementById('fallingGrid')

    let nbHauteur = 100
    let nbLargeur = (nbHauteur * 1.6);
    let nbTotal = (nbHauteur * nbLargeur) 

    let peintureencours = false
    let listContains = []

    for (let i = 0; i < (nbHauteur * nbLargeur) * 4; i++) {
        let square = document.createElement('div')
        grid.appendChild(square)
        square.classList.add('square')
        square.id = i
    }
    setInterval(() => {
        listContains.forEach((element)=>{
            if(Number(element.id) < nbTotal - nbLargeur && !document.getElementById(Number(element.id) + nbLargeur).classList.contains('contains')){
                listContains.splice(listContains.indexOf(element), 1)
                element.classList.remove('contains')
                document.getElementById(Number(element.id) + nbLargeur).classList.add('contains')
                listContains.push(document.getElementById(Number(element.id) + nbLargeur))
            }
        })
    }, 5)

    document.addEventListener('mousemove', (e)=>{
        if (peintureencours) {
            if (!e.target.classList.contains('contains')) {
                e.target.classList.add('contains')
                listContains.push(e.target)
            }
        }
    })
    document.addEventListener('pointerdown', ()=>{
        peintureencours = true
    })
    document.addEventListener('pointerup', ()=>{
        peintureencours = false
    })


})