let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// Challenge

let temp = 45

// It is freezing outside!
// It is hot outside!
// Go for it. It is pretty nice.

if (temp >= 110) {
    console.log("It is way too hot out there!")
} else if (temp <= 32) {
    console.log("It is freezing outside!")
} else {
    console.log("The temperature is perfect!")
}
