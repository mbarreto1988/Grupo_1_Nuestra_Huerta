const form = document.getElementById('registerUser');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const pass = document.getElementById('password');


form.addEventListener('submit', (e) => {
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let errores = [];
    console.log(errores);
    console.log(firstName.value.length);
    console.log(lastName.value);
    console.log(email.value);
    console.log(pass.value);

    //valido Nombre    
    if (firstName.value.length < 2) {
        errores.push("Nombre no valido");
    };
    if (firstName.value == "") {
        errores.push("El campo Nombre no puede estar vacio");
    }
    //valido Apellido
    if (lastName.value.length < 2) {
        errores.push("Apellido no valido");
    };
    if (lastName.value == "") {
        errores.push("El campo Apellido no puede estar vacio");
    }
    //Valido Email
    if (!emailVal.test(email.value)) {
        errores.push("El email no es un formato valido");
    };
    //Valido Password
    if (pass.value.length < 8) {
        errores.push("La contrasena debe tener entre 8 y 10 caracteres");
    };
    if (pass.value == "") {
        errores.push("La contraseña no puede estar vacia");
    };
    //compruebo las validaciones para poder enviar el formulario
    if (errores.length > 0) {
        e.preventDefault();
        let erroresUl = document.querySelector("div.errores ul");
        erroresUl.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            erroresUl.innerHTML += "<li>" + errores[i] + "</li>";
        };
    };
});