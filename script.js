$(document).ready(() => {
    let grid = $('#fallingGrid')[0]

    let nbHauteur = 100
    let nbLargeur = (nbHauteur * 1.6);
    let nbTotal = (nbHauteur * nbLargeur) * 4

    let peintureencours = false

    for (let i = 0; i < (nbHauteur * nbLargeur) * 4; i++) {
        let square = document.createElement('div')
        $(grid).append(square)
        $(square).addClass('square')
        $(square).attr('id', i);

    }
    setInterval(() => {
        let total = document.getElementsByClassName('contains')
        for(let i = 0; i < total.length; i++){
            if(Number(total[i].id) < nbTotal - nbLargeur){
                total[i].classList.remove('contains')
                // document.getElementById(total[i].id + nbLargeur).classList.add('contains')
                document.getElementById(Number(total[i].id) + Number(nbLargeur)).classList.add('contains')
            }
        }
    }, 1000)

    $(document).on('mousemove', (e) => {
        if (peintureencours) {
            if (!$(e.target).hasClass('contains')) {
                $(e.target).addClass('contains')
            }
        }
    })
    $(grid).on('pointerdown', () => {
        peintureencours = true
    })
    $(grid).on('pointerup', () => {
        peintureencours = false
    })
})