let inputNumber = document.querySelector('.game-input')
const gameBtn = document.querySelector('.game-btn')
let gameTotalHtml = document.querySelector('.total-game')
let gameWinsHtml = document.querySelector('.total-wins')


let guess = 3
let numRandom = Math.ceil(Math.random() * 10)
let wins = 0
let totalGame = 0
const newGame = () => {
     guess = 3
     numRandom = Math.ceil(Math.random() * 10)

}
gameBtn.addEventListener('click', () => {
    const value = +inputNumber.value
    if(inputNumber.value === '') {
        alert('Введите текст')
    }
    guess = guess - 1
    if(guess === 0 && value !== numRandom) {
       alert('Вы проиграли')
        newGame()
        totalGame = totalGame + 1
        gameTotalHtml.textContent = totalGame
        gameWinsHtml.textContent = wins
    }else if(value === numRandom) {
        alert('Вы выиграли')
        newGame()
        wins = wins + 1
        totalGame = totalGame + 1
        gameTotalHtml.textContent = totalGame
        gameWinsHtml.textContent = wins
    }else if(value < numRandom) {
        alert('Недобор')
    }else if(value > numRandom) {
        alert('Перебор')
    }
    inputNumber.value = "";
})
const box = document.querySelector('.box')

box.addEventListener('click' , (e) => {
    document.style.position = 'absolute'

})



//
// function gameGuess() {
//     let myInput = document.querySelector('.game-input')
//     if (myInput.value === '' || Number(myInput.value) < 1 || Number(myInput.value) > 10) {
//         alert('Пожалуйста, введите число от 1 до 10!')
//     } else if (Number(myInput.value) === number) {
//         alert("Поздравляем, вы выиграли!")
//     }else if (guesses > 1) {
//         guesses--;
//         alert(`У вас ${guesses} попыт${guesses > 1 ? 'ки' : 'ка'} осталось`)
//     } else {
//         alert(`
//          Игра окончена!
//          Номер был ${number}
//          Начать все сначала`)
//
//     }
//     myInput.value = ''
//
// }
//
// const gameBtn = document.querySelector('.game-btn');
// gameBtn.addEventListener("click", gameGuess);
