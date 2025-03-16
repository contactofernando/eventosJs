window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubbicacion = premium.getBoundingClientRect();

    if( ubbicacion.top < 784 ) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, sigue dando scroll');
    }
});