
const pin = 1234;
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bank-name').value;
    
    const accountNumber = document.getElementById('account-number').value;

    const amountWithdraw = parseInt(document.getElementById('amount-withdraw').value);

    const pinNumber = parseInt(document.getElementById('pin-number').value);

    // console.log(bankName,accountNumber, amountWithdraw , pinNumber);

    if(pin !== pinNumber){
        alert("enter valid pin number");
        return;

    }


    const amount = parseInt(document.getElementById('amount').innerText);
        if(accountNumber.length < 11){
        alert("Please enter valid account number");
        return;
    }


    const newAmount = amount + amountWithdraw;

    document.getElementById('amount').innerText= newAmount;
    // console.log(newAmount)



 
  
})