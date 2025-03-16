const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('falló la validacion');
    }
})

// keydown cuando presionas
// keyup cuando sueltas la tecla
// blur cuando doy click por fuera del input (para validar formulario)
// copy cuando copias del input
// paste cuando pegas en el input
// cut cuando cortas del input
// input es para todo menos el blur 