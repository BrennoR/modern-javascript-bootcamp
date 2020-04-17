// === - equality operator
// !== - not equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 45
let isFreezing = temp <= 32

console.log(isFreezing)

if (temp <= 32) {
    console.log("It is freezing")
} else {
    console.log("It is not freezing")
}

// if (isFreezing) {
//      console.log('It is freezin')
// }

// Challenge

// create age, set to your age
let age = 7
// calculate is child - if they are 7 or under
let isChild = age <= 7
// calculate is senior - if they are 65 or older
let isSenior = age >= 65
// print is child value
console.log('is child: ' + isChild)
// print is senior value
console.log('is senior: ' + isSenior)


// Challenge

if (age <= 7) {
    console.log("Child discount!")
} else if (age >= 65) {
    console.log("Senior discount!")
} else {
    console.log("Sorry, no discount boss!")
}
