function formValidate(){

    let submitForm = true;
    
    let username = document.querySelector(".username");
    let email = document.querySelector(".email");
    let phone = document.querySelector(".phone");
    let pass = document.querySelector(".pass");
    let C_pass = document.querySelector(".C-pass");


    let form_errors = document.querySelectorAll(".form-erorrs");
    form_errors.forEach(error => error.innerText = "")

    if(username.value.trim().length < 3){
        form_errors[0].innerText= "*must be at least 3 characters.";
        submitForm = false;
    }
    if(email.value.length > 50){
        form_errors[1].innerText= "*Email must not exceed 50 words.";
        submitForm = false;
    }
    if(phone.value < 11){
        form_errors[2].innerText = "*Phone number must be at least 11 digits.";
        submitForm = false;
    }
    if(pass.value.length < 8){
        form_errors[3].innerText = "*Password must be at least 8 characters";
        submitForm = false;
    }else if(!pass.value.match(/[!@#$%^&*]/)){
        form_errors[3].innerText = "*Passwoed at least one special character";
        submitForm = false;
    }
    if(pass.value !== C_pass.value){
        form_errors[4].innerText = "*Password and Confirm password does not match.";
        submitForm = false;
    }
    if(submitForm){
        alert("Form Submitted succesfully");
    }
    return submitForm
}