const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let currentTime = 30
let hitPosition 
let timerId = null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
        square.style.backgroundImage='none'
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    let urlstr = 'url(./img/1.jpg)'
    randomSquare.style.backgroundImage = urlstr

    hitPosition=randomSquare.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare,500)
}

moveMole()

let countDowntimerId = setInterval(countDown,1000)

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime<0){
        clearInterval(countDowntimerId)
        clearInterval(timerId)
        timeLeft.textContent = '0'
        alert('Игра закончена! Ты поймал ' + result +' Дим из 60 возможных!')
    }
}

