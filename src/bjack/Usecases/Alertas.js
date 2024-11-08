export const alertas = (titulo, texto, icono,) => {
  
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Reiniciar"
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });


}