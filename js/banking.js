
// function
function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // set empty value 
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, inputAmount) {
    const totalBalance = document.getElementById(totalFieldId);
    const preTotalBalanceText = totalBalance.innerText;
    const preTotalBalanceAmount = parseFloat(preTotalBalanceText);

    // update total balance 
    totalBalance.innerText = preTotalBalanceAmount + inputAmount;


}

function updateBalance(depositInputAmount) {
    const totalBalance = document.getElementById('balance-total');
    const preTotalBalanceText = totalBalance.innerText;
    const preTotalBalanceAmount = parseFloat(preTotalBalanceText);

    // update total balance 
    const updateTotalBalance = preTotalBalanceAmount + depositInputAmount;
    totalBalance.innerText = updateTotalBalance;
}


document.getElementById('diposit-button').addEventListener('click', function () {
    // get deposit value (Function a chola gaca) 
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText); 
    */

    const depositInputAmount = getInputValue('deposit-input');

    // total deposit  
    const pretotalDeposit = document.getElementById('deposit-total');
    const pretotalDepositText = pretotalDeposit.innerText;
    const pretotalDepositAmount = parseFloat(pretotalDepositText);

    // total deposit  update
    const updateTotalDeposit = depositInputAmount + pretotalDepositAmount;

    // set deposit in total value
    pretotalDeposit.innerText = updateTotalDeposit;

    updateTotalField('deposit-total', pretotalDepositAmount);


    // get total balance 
    /*    const totalBalance = document.getElementById('balance-total');
       const preTotalBalanceText = totalBalance.innerText;
       const preTotalBalanceAmount = parseFloat(preTotalBalanceText);
   
       // update total balance 
       const updateTotalBalance = preTotalBalanceAmount + inputWithdrowAmount;
       totalBalance.innerText = updateTotalBalance; */

    updateBalance(depositInputAmount);

});

// deposit button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdrow input (Function a chola gaca) 
    /*  
    const inputWithdrow = document.getElementById('withdraw-input');
     const inputWithdrowText = inputWithdrow.value;
     const inputWithdrowAmount = parseFloat(inputWithdrowText); 
     */

    const inputWithdrowAmount = getInputValue('withdraw-input');

    // total withdrow input
    /*  const preTotalWithdrow = document.getElementById('withdraw-total');
     const preTotalWithdrowText = preTotalWithdrow.innerText;
     const preTotalWithdrowAmonunt = parseFloat(preTotalWithdrowText);    
    update withdrow 
    const updateTotalAmount = inputWithdrowAmount + preTotalWithdrowAmonunt;
    preTotalWithdrow.innerText = updateTotalAmount; */

    updateTotalField('withdraw-total', inputWithdrowAmount);
    // get total balance 
    const totalBalance = document.getElementById('balance-total');
    const preTotalBalanceText = totalBalance.innerText;
    const preTotalBalanceAmount = parseFloat(preTotalBalanceText);

    // update total balance 
    const updateTotalBalance = preTotalBalanceAmount - inputWithdrowAmount;
    totalBalance.innerText = updateTotalBalance;



});