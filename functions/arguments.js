// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name +' - Score: ' + score
}

getScoreText('Brenno', 100)

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

console.log(getScoreText())
console.log(getScoreText('John', 10))
console.log(getScoreText('Ryan'))

// Challenge
// total, tipPercent
// A 25% tip on $40 would be $10
let getTip = function(total, tipPercent = 0.2) {
    console.log(`A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`)
    return total * tipPercent
}

console.log(getTip(100))
console.log(getTip(100, 0.3))

let name = 'Jack'
let age = 25
console.log(`Hey, my name is ${name}! I am ${age} years old!`)
