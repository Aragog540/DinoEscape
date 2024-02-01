setInterval(() => {
    let jetha = document.querySelector('.jetha');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');

    let dx = parseInt(window.getComputedStyle(jetha, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(jetha, null).getPropertyValue('bottom'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);

    if (offsetX < 93 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Start Over";
        obstacle.classList.remove('obstacleAni');
        audio1.pause();
        audiogo.play();
        setTimeout(()=> {
            audiogo.pause()
        },1000)
    }
    else if (offsetX<145 && cross){
        score+=100;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross = true;
        },1000)
        setTimeout(()=> {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New Animation Duration: ', newDur)
        },500)
        
    }
    
}, 100);

function updateScore(score){
    let scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML = "Your Score: " + score;
}
