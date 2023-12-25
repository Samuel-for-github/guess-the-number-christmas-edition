const form = document.querySelector("form");
const submit = document.querySelector("#subt");
let userGuess = document.querySelector("#guessField")
let lastResult = document.querySelector(".lastResult");
let guessD = document.querySelector(".guesses");
let lowOrHigh = document.querySelector(".lowOrHi")
let random = Math.floor(Math.random()*100 + 1 )

let startOver = document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

console.log(random);
if (playGame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userGuess.value);
        console.log(guess);
        validateGuess(guess)
    })
}



const validateGuess = (guess)=>{
    if (isNaN(guess)) {
        alert("not valid");
    }
    else if(guess<1 || guess>100){
        alert("not in range of 1 to 100");
    }
    else{
        checkGuess(guess)
    }
}

const checkGuess = (guess)=>{
    if (guess === random) {
        lowOrHigh.innerHTML = "<h2>You Win</h2>"  
        const audio = new Audio("audio.mp3");
        audio.play()
        endGame()
    }
    else if (guess<random) {
        lowOrHigh.innerHTML = "<h2>Guess is Low</h2>" 
        lastResult.textContent = `${10-numGuess}`
        numGuess++;
        prevGuess.push(guess);
        guessD.textContent = `${prevGuess}`

        if (lastResult.textContent == "0" ) {
            lowOrHigh.innerHTML = `<h1>Game Over Random number was ${random}</h1>`
          endGame()
        }

    }
    else if (guess>random) {
        lowOrHigh.innerHTML = "<h2>Guess is High</h2>"
        lastResult.textContent = `${10-numGuess}`
        numGuess++;
        prevGuess.push(guess);
        guessD.textContent = `${prevGuess}`
        if (lastResult.textContent == "0" ) {
            lowOrHigh.innerHTML = `<h1>Game Over Random number was ${random}</h1>`
            endGame()
          }
    }
}

const endGame = ()=>{
    userGuess.value = '';
    userGuess.setAttribute("disabled", '')
    p.innerHTML = "<h1 id='newG'>Start new game</h1>"
    playGame = false
    startOver.appendChild(p)
    newGame()
}
const newGame = ()=>{
    const newG = document.querySelector("#newG");
    newG.addEventListener('click', ()=>{

    random = Math.floor(Math.random()*100 + 1 )
    userGuess.value = '';
    numGuess = 1;
    prevGuess = [];
    guessD.textContent = `${prevGuess}`
    lastResult.textContent = `${10}`
    lowOrHigh.innerHTML = ``
    startOver.removeChild(p)
    userGuess.removeAttribute("disabled")
     
        playGame = true;
    })

    
    
}