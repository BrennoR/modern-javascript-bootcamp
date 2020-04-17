let name = 'Jen'
console.log(name)

// undefined is used to represent the absence of a value
let undefinedName
console.log(undefinedName)

if (undefinedName === undefined) {
    console.log("Please provide a name!")
} else {
    console.log(undefinedName)
}

// undefined for function arguments
let square = function (num) {
    console.log(num)
}

square(3)
square()  // javascript sets num as undefined

let result = square()

console.log(result)

// Null as assigned value
let age = 27

age = null  // clears variable

console.log(age)

