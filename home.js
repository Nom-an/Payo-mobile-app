

document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bank-name').value;
    
    const accountNumber = parseInt(document.getElementById('account-number').value);

    const amountWithdraw = parseInt(document.getElementById('amount-withdraw').value);

    const pinNumber = parseInt(document.getElementById('pin-number').value);

    console.log(bankName,accountNumber, amountWithdraw , pinNumber);
  
})