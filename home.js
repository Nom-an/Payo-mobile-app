
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


document.getElementById('add-money-card').addEventListener('click', function(){
    document.getElementById('cash-out').style.display = 'none';

    document.getElementById('add-money').style.display= 'block';
        document.getElementById('transfer-money').style.display= 'none';
        document.getElementById('get-bonus').style.display= 'none';
            document.getElementById('pay-bill').style.display= 'none';


})

document.getElementById('cash-out-card').addEventListener('click',function(){
    document.getElementById('add-money').style.display= 'none';

    document.getElementById('cash-out').style.display= 'block';
        document.getElementById('transfer-money').style.display= 'none';
        document.getElementById('get-bonus').style.display= 'none';
            document.getElementById('pay-bill').style.display= 'none';

})


document.getElementById('transfer-money-card').addEventListener('click', function(){
    document.getElementById('add-money').style.display= 'none';    
    document.getElementById('cash-out').style.display = 'none';    
    document.getElementById('transfer-money').style.display= 'block';
    document.getElementById('get-bonus').style.display= 'none';
        document.getElementById('pay-bill').style.display= 'none';

})

document.getElementById('get-bonus-card').addEventListener('click', function(){
    document.getElementById('add-money').style.display= 'none';    
    document.getElementById('cash-out').style.display = 'none';    
    document.getElementById('transfer-money').style.display= 'none';
    document.getElementById('get-bonus').style.display= 'block';
        document.getElementById('pay-bill').style.display= 'none';

})
document.getElementById('pay-bill-card').addEventListener('click', function(){
    document.getElementById('add-money').style.display= 'none';    
    document.getElementById('cash-out').style.display = 'none';    
    document.getElementById('transfer-money').style.display= 'none';
    document.getElementById('get-bonus').style.display= 'none';
    document.getElementById('pay-bill').style.display= 'block';
})

document.getElementById('btn-withdraw-money').addEventListener('click', function(e){
    e.preventDefault();

    const AmountToWithdraw = parseInt(document.getElementById('amount-to-withdraw').value);
    
    const pinWithdraw = parseInt(document.getElementById('pin-withdraw').value);

    if(pin != pinWithdraw){
        alert('enter your valid pin number');
        return;

    }

    const afterWithdrawAmount = parseInt(document.getElementById('amount').innerText) - AmountToWithdraw;

    document.getElementById('amount').innerText = afterWithdrawAmount;

})