var firstName = 'Brenno'
firstName = 'Billy'

var firstName = 'Drogba'  // works with var, but not with const or let

console.log(firstName)

if (10 === 10) {
    var secondName = 'Smith'  // not block scope, only function scope, variables get exposed outside if
}

console.log(secondName)

const setName = function() {
    var newName = 'Jared'
}

setName()
// console.log(newName)   var is function scope

let age
console.log(age)
var backpack
console.log(backpack)

console.log(surfboard)
// let surfboard  // error
var surfboard = 10  // declaration of variable goes through, but not value... very strange behavior
