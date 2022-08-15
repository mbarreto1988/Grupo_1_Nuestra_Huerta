const form = document.getElementById('form');
const nameProduc = document.getElementById('nombreProducto');
const precio = document.getElementById('price');
const stock = document.getElementById('stock');

form.addEventListener('submit', (e) => {
    let errores = [];
    console.log('name');
    console.log('precio');
    console.log('stock');
    //valido el Producto   
    if (nameProduc.value.length < 3) {
        errores.push("Nombre no puede ser menor a 3 caracteres");
    };
    if (nameProduc.value == "") {
        errores.push("El campo Nombre del producto no puede estar vacio");
    };
    //valido que el precio no este vacio
    if (precio.value == "") {
        errores.push("El campo Precio no puede estar vacio");
    };
    //valido que el Stock no este vacio
    if (stock.value == "") {
        errores.push("El campo Stock no puede estar vacio");
    };    
    //compruebo las validaciones para poder enviar el formulario
    if (errores.length > 0) {
        e.preventDefault();
        let erroresUl = document.querySelector("div.errores ul");
        erroresUl.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            erroresUl.innerHTML += "<li>" + errores[i] + "</li>";
        };
    }else{
        alert(errores)
    }
});


