let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// Challenge
// Create function - take fahrenheit in - return object with all three
let returnTemps = function(temp) {
    return {
        fahrenheit: temp,
        celsius: (temp - 32) * (5 / 9),
        kelvin: (temp - 32) * (5 / 9) + 273.15
    }
}

let currentTemp = returnTemps(74)
console.log(currentTemp)
console.log(currentTemp.fahrenheit)
console.log(currentTemp.celsius)
console.log(currentTemp.kelvin)
