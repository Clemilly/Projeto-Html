// Relações

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// Algoritmo

let charset = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx1234567890!@#$%";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
    //Aqui faz a inserção da quantidade de caractere
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

    novaSenha = pass;
}

function copyPassword() {
    
    alert(novaSenha);
    navigator.clipboard.writeText(novaSenha);
}

