const {Blockchain, Transaction} = require('./blockchain');

let danCoin = new Blockchain();
danCoin.createTransaction(new Transaction('address1','address2', 100));
danCoin.createTransaction(new Transaction('address2','address1', 50));

console.log('\n Starting the miner...');
danCoin.minePendingTransactions('dans-address');
danCoin.minePendingTransactions('dans-address');

console.log(danCoin.getBalanceOfAddress('dans-address'))