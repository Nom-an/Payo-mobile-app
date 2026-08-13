
const pin = 1234;
const transectionData  = [];

// function to get input value number

function getInputValue(id){
    const getInput = document.getElementById(id);
    const getInputValue = getInput.value;
    const getInputValueNumber = parseInt(getInputValue);
    return getInputValueNumber;

}

function getInputValueAc(id){
    const getInput = document.getElementById(id);
    const getInputValue = getInput.value;

    return getInputValue;

}

//SET INNER TXT 











document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bank-name').value;
    
    const accountNumber = getInputValueAc('account-number');
    

    const amountToAdd =getInputValue('amount-to-add');
    console.log(amountToAdd);
    const pinNumber = getInputValue('pin-number');

    // console.log(bankName,accountNumber, amountWithdraw , pinNumber);

    if(pin !== pinNumber){
        alert("enter valid pin number");
        return;

    }
       if( accountNumber.length < 11){

        alert("Please enter valid account number");
        return;
    }



    const amount = parseInt(document.getElementById('amount').innerText);



    const newAmount = amount + amountToAdd;

    document.getElementById('amount').innerText= newAmount;
    // console.log(newAmount)

 const data = {
    name : "add money",
    date : new Date().toLocaleString()
 }

 transectionData.push(data);

 console.log(transectionData);

 
  
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





// CashOut Section


document.getElementById('btn-withdraw-money').addEventListener('click', function(e){
    e.preventDefault();


    const AmountToWithdrawCashOut = parseInt(document.getElementById('amount-to-withdraw-cash-out').value);
 
    
    const pinWithdraw =  getInputValue('pin-withdraw');







 




    if(pin != pinWithdraw){
        alert("enter valid pin number");
        return;

    }










    const afterWithdrawAmount = parseInt(document.getElementById('amount').innerText) - AmountToWithdrawCashOut;


    document.getElementById('amount').innerText = afterWithdrawAmount;

     const data = {
    name : "cash out",
    date : new Date().toLocaleString()
 }

 transectionData.push(data);
 console.log(transectionData)


})