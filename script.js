let SignUpBtn = document.getElementById("SignUpBtn");
    let SignInBtn = document.getElementById("SignInBtn");
    let nameField = document.getElementById("nameField");
    let emailField = document.getElementById("emailField");
    let confirmPasswordField = document.getElementById("confirmPasswordField");
    let formContainer = document.querySelector('.form-container');
    let title = document.getElementById("title");

    SignInBtn.onclick = function () {
      SignUpBtn.classList.add("disable");
      SignInBtn.classList.remove("disable");
      title.textContent = "SignIn";
      nameField.style.display = "none";
      emailField.style.display = "none";
      confirmPasswordField.style.display = "none";
      if (formContainer.classList.contains('form-container')) {
        formContainer.classList.add("signIn");
        console.log(formContainer.className);
      }
    }

    SignUpBtn.onclick = function () {
      SignUpBtn.classList.remove("disable");
      SignInBtn.classList.add("disable");
      title.textContent = "SignUp";
      nameField.style.display = "flex";
      emailField.style.display = "flex";
      confirmPasswordField.style.display = "flex";
      formContainer.classList.remove("signIn");
    }