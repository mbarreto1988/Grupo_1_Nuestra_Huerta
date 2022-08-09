window.addEventListener('load', function(){    
    // copia y pega el codigo de la etapa 1 aca 
    let form = document.querySelector('#form')
    let button = document.querySelector('#button')
    let name = document.querySelector('#name');
    let nameError = document.querySelector('#nameError');
    let email = document.querySelector('#email');
    let emailError = document.querySelector('#emailError');
    let password = document.querySelector('#password');
    let passwordError = document.querySelector('#passwordError');
    let repassword = document.querySelector('#repassword');
    let repasswordError = document.querySelector('#repasswordError');

button.addEventListener('click', function (event) {
        event.preventDefault()
        let errores = {}
        if (first_name.value.length > 2) {
            errores.first_name = 'Este campo debe estar completo'
        }
        if (last_name.value.length > 2) {
            errores.last_name = 'Este campo debe estar completo'
        }
        if (email.value.length > 7) {
            errores.email = 'Este campo debe estar completo'
        }
        if (password.value.length >= 8) {
            errores.password = 'Este campo debe estar completo'
        }
        if (Object.keys(errores).length >= 1) {
            erName.innerText = (errores.first_name) ? errores.first_name : ''
        } else {
            form.submit();
        }
    })
   
})