function validate(event){
   
    let username= document.getElementById('userName');
    let emailId=document.getElementById('inputEmail');
    let password1= document.getElementById('inputPassword1');
    let password2= document.getElementById('inputPassword2');
    let passowdmismatch= document.getElementById('password-error');

    let emailPattern= new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,'g');
    let namePattern= new RegExp(/^[a-zA-Z ]{2,30}$/,'g');
    let passwordPattern = new RegExp(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,'g');


   /* if(namePattern.test(username.textContent)){
        username.classList.add("is-valid");
    }else{
        username.classList.add("is-invalid");
    }

    if(emailPattern.test(emailId.textContent)){
        emailId.classList.add("is-valid");
    }else{
        emailId.classList.add("is-invalid");
    }

    if(passwordPattern.test(password1.textContent)){
        password1.classList.add('is-valid');
    }else{
        password1.classList.add('is-invalid');
    }

    if(passwordPattern.test(password2.textContent)){
        password1.classList.add('is-valid');
    }else{
        password1.classList.add('is-invalid');
    }
*/
       //alert("prateek") ;

    let password1val= password1;
    let password2val= password2;
    console.log(password1val.value);
    console.log(password2val.value);

    // if(password1val!==password2val){
    //     passowdmismatch.classList.remove('noError');
    //     passowdmismatch.classList.add('error');
    //     alert("wrong password");
    // }


    // event.preventDefault();
    
}

