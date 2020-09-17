const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

// Transaction entry
function createTransaction (transaction){
    user.transactions.push(transaction)
    if (transaction.type === 'Credit') 
        user.balance = user.balance + transaction.value
    else (transaction.type === 'Debit')
        user.balance = user.balance - transaction.value
};

// Getting the higher transaction by type
function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

// Getting de average transaction value
function getAverageTransactionValue(){
    let sum = 0

    for (let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

// getting de count transactions by type
function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions){
        if (transaction.type === 'Credit'){
            count.credit++
        } else{
            count.debit++
        }
    }

    return count
}

// Creating transactions
createTransaction ({type: 'Credit', value: 50});
createTransaction ({type: 'Debit', value: 50});
createTransaction ({type: 'Credit', value: 70});
createTransaction ({type: 'Debit', value: 20});
createTransaction ({type: 'Credit', value: 50});

// Displaying Transactions and Balance 
console.table(user.transactions)
console.table(user.balance)

// Displaying higher transactions by type
console.log(getHigherTransactionByType('Credit'))
console.log(getHigherTransactionByType('Debit'))

// Displaying average transaction and transactions count
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())

