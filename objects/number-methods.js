let num = 103.941

console.log(num.toFixed())
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let randomNum = Math.random()  // [0,1)
console.log(randomNum)

let min = 0
let max = 200
console.log(Math.round(Math.random() * (max-min) + min))

// Challenge area
// 1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
    let randomNum = Math.round(Math.random() * (5 - 1) + 1)
    console.log(`You guessed ${guess}, the real number is ${randomNum}...`)
    return randomNum === guess
}


console.log(makeGuess(2))
