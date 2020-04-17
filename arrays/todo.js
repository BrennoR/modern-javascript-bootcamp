// Create an array with five todos
// You have x todos
// Print the first and second to last items -> walk the dog

const todos = ['Pay AMEX', 'Complete fitness plan', 'Buy bed set', 'Setup guitar', 'Pick a ML specialization']
console.log(`You have ${todos.length} todos`)
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list
todos.splice(2,1)
todos.push('Set a clear vision for the future')
todos.shift()
console.log(todos)

// 1. The first item
// 2. The second item
// etc..
todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})


for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`)
}
