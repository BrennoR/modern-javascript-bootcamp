// Global (name)
  // Local (name)
    // Local
  // Local

// let name = 'Andrew'

if (true) {
    // let name = 'Mike'  // variable shadowing

    if (true) {
        let name = 'Jen'
        // name = 'Jen' // leaked global
        console.log(name)
    }
    console.log(name)
}

if (true) {
    console.log(name)
}