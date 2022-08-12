window.addEventListener('load', function () {
    
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    email.addEventListener("focus",()=> {
        email.style.color = "red"
        
    })

//     button.addEventListener('click', function (event) {
//         event.preventDefault()
//         let errores = {}
        
//         if (email.value.length > 7) {
//             errores.email = 'Este campo debe estar completo'
//         }
//         if (password.value.length >= 8) {
//             errores.password = 'Este campo debe estar completo'
//         }

//         if (Object.keys(errores).length >= 1) {
//             erName.innerText = (errores.first_name) ? errores.first_name : ''
//         } else {
//             form.submit();
//         }
//     })

// })
})