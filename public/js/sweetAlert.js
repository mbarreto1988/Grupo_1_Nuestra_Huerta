function confirmar (){
    Swal.fire({
        title: '¿Confirma eliminar el registro: '+id+'?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Confirmar'
      }).then((result) => {   
        e.preventDefault()  
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}