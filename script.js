
const sonic = document.querySelector('.sonic')
const rock = document.querySelector('.rock')

const jump = () => {
    sonic.classList.add('jump');

    setTimeout( () => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log ('loop');
    const rockposition = rock.offsetLeft;
    const sonicposition = + window.getComputedStyle(sonic).bottom.replace('px', '');

    console.log(sonicposition);

    if (rockposition <= 110 && rockposition > 0 && sonicposition < 125){ {
        rock.style.animation = 'none' ;
        rock.style.left = `${rockposition}px`;

        sonic.style.animation = 'none' ;
        sonic.style.bottom = `${sonicposition}px`;
        sonic.src = './IMG./MORRENDO.gif';
        sonic.style.width = '200px';
    
        document.querySelector('.ground').style.animation = 'none';
        clearInterval(loop);
        
        setTimeout(() => {
        window.location.href = 'gameover.html';
    }, 1300); 

    }
    }


    
}, 10);



document.addEventListener('keydown', jump)

