let boton =document.getElementById('boton')

function mostrar(elementos){


    switch (elementos) {
        case "Bienvenidos":
            Bienvenidos.style.display= 'block';
            Resumen.style.display= 'none';
            Portafolios.style.display= 'none';
            Contactos.style.display= 'none';
            break;
        case "Resumen":
            Bienvenidos.style.display= 'none';
            Resumen.style.display= 'block';
            Portafolios.style.display= 'none';
            Contactos.style.display= 'none';
            break;
        case "Portafolios":
        Bienvenidos.style.display= 'none';
        Resumen.style.display= 'none';
        Portafolios.style.display= 'block';
        Contactos.style.display= 'none';
        break;

        case "Contactos":
        Bienvenidos.style.display= 'none';
        Resumen.style.display= 'none';
        Portafolios.style.display= 'none';
        Contactos.style.display= 'block';
        break;
  
}
}