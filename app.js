let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


function validateName(){
    let name = document.getElementById('contact-name').value;
    if(name.length === 0){
         nameError.style.display = "block";
         nameError.innerHTML = 'Name is required';
         setTimeout(function () {
          nameError.style.display = "none";
         }, 3000);
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full Name";
        return false;
    }

   nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
   
    return true;
     
};

function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length === 0){
         phoneError.style.display = "block";
         phoneError.innerHTML = 'phone is required';
         setTimeout(function () {
           phoneError.style.display = "none";
         }, 3000);
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

};

function validateEmail(){
    let email = document.getElementById('contact-email').value;


    if(email.length === 0){
         emailError.style.display = "block";
         emailError.innerHTML = 'Email is required';
         setTimeout(function () {
           emailError.style.display = "none";
         }, 3000);
        return false;
    };

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailError.innerHTML = "Email Invalid";
      return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;

    let limitChar = 30;
    let left = limitChar - message.length;


    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        if(left === 1){
             messageError.innerHTML = "a character required";
        }
        return false;
    }

     messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
       return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){  
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = "none";},3000)
        return false; 
    }
}


