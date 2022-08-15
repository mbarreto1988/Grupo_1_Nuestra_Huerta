const form = document.getElementById('loginForm');
const email = document.getElementById('loginEmail');
const pass = document.getElementById('loginPassword');

form.addEventListener('submit', (e) => {
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let errors = [];
    //Valido Email
    if (!emailVal.test(email.value)) {
        errors.push("El email no es un formato valido");
    };
    //Valido Password
    if (pass.value.length < 6 && pass.value.length < 8) {
        errors.push("La contrasena debe tener entre 6 y 8 caracteres");
    };
    if (pass.value == "") {
        errors.push("La contrasena no puede estar vacia");
    };
    //compruebo las validaciones para poder enviar el formulario
    if (errors.length > 0) {
        e.preventDefault();
        let errorsUl = document.querySelector("div.errores ul");
        errorsUl.innerHTML = "";
        for (let i = 0; i < errors.length; i++) {
            errorsUl.innerHTML += "<li>" + errors[i] + "</li>";
        };
    };
});
