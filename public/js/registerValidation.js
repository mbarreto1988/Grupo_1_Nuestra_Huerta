    window.addEventListener('load', function () {
    
    let first_name = document.querySelector('#first_name');
    let last_name = document.querySelector('#last_name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');


    first_name.addEventListener("focus",()=> {
        first_name.style.borderColor = "red"
        
    })


    // button.addEventListener('click', function (event) {
    //     event.preventDefault()
    //     let errores = {}
    //     if (first_name.value.length > 2) {
    //         errores.first_name = 'Este campo debe estar completo'
    //     }
    //     if (last_name.value.length > 2) {
    //         errores.last_name = 'Este campo debe estar completo'
    //     }
    //     if (email.value.length > 7) {
    //         errores.email = 'Este campo debe estar completo'
    //     }
    //     if (password.value.length >= 8) {
    //         errores.password = 'Este campo debe estar completo'
    //     }

    //     //pendiente la imagen//

    //     if (Object.keys(errores).length >= 1) {
    //         erName.innerText = (errores.first_name) ? errores.first_name : ''
    //     } else {
    //         form.submit();
    //     }
    // })

})