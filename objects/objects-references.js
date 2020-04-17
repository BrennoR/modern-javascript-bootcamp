let myAccount = {
    name: 'Brenno R',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount  // reference to myAccount
otherAccount.income = 1000
otherAccount = {}

let addExpense = function(account, amount) {
    // account = {}  // new assignment breaks the bind
    account.expenses += amount
    // console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)

// addIncome
let addIncome = function(account, amount) {
    account.income += amount
}

// resetAccount
let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let myNewAccount = {
    name: 'brennobrenno',
    expenses: 0,
    income: 0
}

// add income
// add expense
// add expense
// get account summary
// reset account
// get account summary
addIncome(myNewAccount, 100)
addExpense(myNewAccount, 20)
addExpense(myNewAccount, 30)
getAccountSummary(myNewAccount)
resetAccount(myNewAccount)
getAccountSummary(myNewAccount)
