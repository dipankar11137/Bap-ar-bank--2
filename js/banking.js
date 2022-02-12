
// function
function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

    // set empty value 
    depositInput.value = '';

    return depositInputAmount;
}




document.getElementById('diposit-button').addEventListener('click', function () {
    // get deposit value 
    /* const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText); */

    const depositInputAmount = getInputValue();

    // total deposit  
    const pretotalDeposit = document.getElementById('deposit-total');
    const pretotalDepositText = pretotalDeposit.innerText;
    const pretotalDepositAmount = parseFloat(pretotalDepositText);

    // total deposit  update
    const updateTotalDeposit = depositInputAmount + pretotalDepositAmount;

    // set deposit in total value
    pretotalDeposit.innerText = updateTotalDeposit;

    // get total balance 
    const totalBalance = document.getElementById('balance-total');
    const preTotalBalanceText = totalBalance.innerText;
    const preTotalBalanceAmount = parseFloat(preTotalBalanceText);

    // update total balance 
    const updateTotalBalance = depositInputAmount + preTotalBalanceAmount;
    totalBalance.innerText = updateTotalBalance;



});

// deposit button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdrow input
    const inputWithdrow = document.getElementById('withdraw-input');
    const inputWithdrowText = inputWithdrow.value;
    const inputWithdrowAmount = parseFloat(inputWithdrowText);

    // total withdrow input
    const preTotalWithdrow = document.getElementById('withdraw-total');
    const preTotalWithdrowText = preTotalWithdrow.innerText;
    const preTotalWithdrowAmonunt = parseFloat(preTotalWithdrowText);

    // update withdrow 
    const updateTotalAmount = inputWithdrowAmount + preTotalWithdrowAmonunt;
    preTotalWithdrow.innerText = updateTotalAmount;

    // get total balance 
    const totalBalance = document.getElementById('balance-total');
    const preTotalBalanceText = totalBalance.innerText;
    const preTotalBalanceAmount = parseFloat(preTotalBalanceText);

    // update total balance 
    const updateTotalBalance = preTotalBalanceAmount - inputWithdrowAmount;
    totalBalance.innerText = updateTotalBalance;

    // clear output
    inputWithdrow.value = '';

});