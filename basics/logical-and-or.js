let temp = 0

// Logical And Operator - True if both sides are true, false otherwise
if (temp >= 60 && temp <= 90) {
    console.log("The temperature is perfect!")
}

// Logical Or operator - True if at least one side is true, false otherwise
if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside!")
}

// Challenge
let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.
// At least one guest is vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu.

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Here is our vegan only menu!")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Here is our menu, we have some vegan dishes on the back!")
} else {
    console.log("Here is our standard menu!")
}
