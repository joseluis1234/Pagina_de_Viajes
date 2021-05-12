document.addEventListener('DOMContentLoaded', ()=>{
    //Obtener la imagen del hero
    const imagenHero = document.querySelector('.hero');

    //Inicializando variables
    let i = 0;
    let tiempo = 0;

    //Arreglo con imagenes de fondo
    const imagenes =['arriba2.jpg', 'arriba.jpg']

    setInterval(()=>{
        imagenHero.style.backgroundPositionY = '-'+tiempo+'px';

        if (tiempo >35) {
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";
            if (i === imagenes.length - 1) {
                i = 0;
            }else{
                i++
            }
            console.log(i)
        }
            tiempo++; 
    },100);

    //Boton Flotante en el footer
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e)=>{
        e.preventDefault();

        //Prevenimos default, pero ejecutamos el siguiente codigo
        const footer = document.querySelector('#footer');
        
        if (footer.classList.contains('activo')){
            //Si lo contiene, ejecuta ese codigo
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda'
        }else{
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText= 'X cerrar'
        } 
    });
})



