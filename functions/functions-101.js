// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log("Welcome User!")
}

greetUser()
greetUser()
greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

let otherValue = square(10)
console.log(otherValue)

// Challenge

// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function(temp) {
    return (temp - 32) * (5/9)
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))

