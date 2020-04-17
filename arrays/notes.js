const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes)
// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[22])
// console.log(notes[notes.length - 1])
//
// console.log(notes)
// notes.push('My new note')
// console.log(notes)
// console.log(notes.pop())
// console.log(notes)
// console.log(notes.shift())
// console.log(notes)
// notes.unshift('My first note')
// console.log(notes)

// notes.splice(1, 0, 'This is the new second item')
// console.log(notes)

notes[2] = 'This is now the new note 3'
console.log(notes)

notes.forEach(function (item, index) {  // callback function
    console.log(index)
    console.log(item)
})

// Counting... 1
for (let count = 0; count < 3; count++) {
    console.log('Counting... ' + (count + 1))
}

for (let index = 0; index < notes.length; index++) {
    console.log(notes[index])
}

console.log(notes.indexOf('Note 2'))  // -1 means the item is not in the array

const new_notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

console.log(new_notes.indexOf())
console.log(new_notes)
console.log({} === {})  // false, objects are only equal to each other if they are the SAME object in memory

let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject)

const index = new_notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
})

console.log(index)


