console.log('script connected');
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('button clicked');

    const mobileNumber =1234567890;
    const pinNumber =1234;

    const inputMobile = document.getElementById('input-mobile').value;
    const inputMobileConverted = parseInt(inputMobile);
    console.log(inputMobileConverted);

    const inputPin = document.getElementById('input-pin').value;
    const inputPinConverted = parseInt(inputPin);
    console.log(inputPinConverted);

    if(inputMobileConverted === mobileNumber && inputPinConverted === pinNumber){
        window.location.href = "./home.html";
    }
    else{
        alert("Invalid credentials");
    }
})