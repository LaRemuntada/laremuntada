* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Outfit';
}
body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
}

main {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
/* Estilos para el banner */
.banner {
    width: 100%;            /* Asegura que el banner ocupe todo el ancho */
    max-height: 500px;      /* Altura máxima de 500px */
    overflow: hidden;       /* Elimina cualquier contenido que exceda la altura */
}

.banner img {
    width: 100%;            /* La imagen ocupa todo el ancho del contenedor */
    height: auto;           /* Ajusta la altura proporcionalmente */
}

/* Contenedor principal del header */
.site-header {
    background-color: #00ff8a;  /* Fondo blanco */
    padding: 20px 40px;      /* Espaciado alrededor */
    margin: 0;
}

/* Contenedor que agrupa el título y la nav */
.header-container {
    display: flex;
    justify-content: space-between; /* Espai entre el títol i el nav */
    align-items: center;           /* Centrat vertical dels elements */
    margin: 0;
    gap: 10px;    
}

/* Título de la web */
.site-title {
    font-size: 2rem;         /* Tamaño de la fuente del título */
    font-weight: bold;       /* Poner en negrita */
    color: #000000;
    padding: 0;            
}

/* Barra de navegación */
.site-nav ul {
    display: flex;           /* Mostrar los enlaces en fila */
    list-style: none;        /* Eliminar los puntos de la lista */
}

.site-nav li {
    margin-left: 20px;       /* Espacio entre los elementos de la lista */
}

.site-nav a {
    text-decoration: none;   /* Eliminar el subrayado */
    font-size: 1.1rem;       /* Tamaño de la fuente */
    color: #000000;             /* Color de los enlaces */
    transition: color 0.3s ease; /* Efecto de transición para hover */
}

/* Efecto hover para los enlaces */
.site-nav a:hover {
    color: #ffffff;          /* Color cuando se pasa el ratón por encima */
}

.twitter-icon{
    height: 50px;
    width: auto;
    display: block;        /* Necessari per aplicar 'margin: auto' */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;

}
.subtexttwitter{
    text-align: center;
    font-size: smaller;
    margin-bottom: 15px;
}
.logoheader{
    height: 40px;
    width: auto;
    margin: 0;
}
.noticiesrecents  {
margin: 20px;
}

/* QUI SOM */
.qui-som{
    background-color: #ffffff;  /* Fondo blanco */
    padding: 20px 40px;      /* Espaciado alrededor */
    margin: 0;
}

.qui-som-container {
    display: flex;
    justify-content: flex-start; /* Evita espai excessiu entre elements */
    align-items: flex-start;    /* Assegura un alineament superior */
    gap: 10px;                  /* Espai mínim entre la imatge i el text */
    margin: 0;                  /* Elimina marges externs innecessaris */

}
.text-qui-som {
    margin: 0;                  /* Elimina marges externs */
    padding-left: 40px;         /* Espai mínim entre la imatge i el text */
    padding-top: 40px;
}

.sergirobertofoto {
    flex-shrink: 0;            /* Evita que la imatge es redueixi */
}

.sergirobertofoto img {
    max-width: 100%;
    height: auto;
    width: 500px;
    margin: 0;                  /* Elimina marges al voltant de la imatge */

}

.titolseccio{
    font-size: 4rem;
}
.titolnoticies{
    font-size: 4rem;
    margin-top: 20px;

    text-align: center;
}
h1, h2, h3, h4 {
    font-size: 2rem;           /* Mida de la font del títol */
    color: #333;               /* Color del títol */
}

p {
    font-size: 1rem;           /* Mida de la font del text */
    color: #666;               /* Color del text */
    max-width: 600px;          /* Llargada màxima del text per evitar que ocupi tot l'espai */
}
.noticiesrecents{

    margin: 10;
}
/* ARTICLES*/
.subtitol{
    font-size: 0.5em;
}
.autor{
    font-size: smaller;
    color:#666;
    margin-bottom: 15px;
}
.article-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    line-height: 1.6;
    font-size: 1rem;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
}

.article-content p {
    margin-bottom: 20px;
}
.featured-article {
    text-align: center;
}

.featured-article h2 {
    font-size: 1.2rem;
    color: #4a4747;
    margin-bottom: 10px;
}

.featured-image {
    max-width: 50%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}
.featured-image2{
    max-width: 75%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}
.contact-form button:hover {
    background: #00ff8a;
}
/* Carrusel Noticies recents*/
/* Estils generals del carrusel */
.carousel-container {
    position: relative;
    max-width: 100%;
    margin: 20px 0;
    overflow: hidden; /* Amaga els elements fora de la zona visible */
}

.carousel {
    display: flex;
    transition: transform 0.5s ease; /* Transició suau entre les notícies */
}

.carousel-item {
    min-width: 33.33%; /* Cada item ocupa un terç de l'amplada */
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
}

.carousel-item img {
    width: 100%; /* La imatge ocupa tot l'ample de l'element */
    height: auto;
    border-radius: 8px;
}

.carousel-item h3 {
    font-size: 1.2rem;
    margin-top: 10px;
}

/* Estil dels botons de navegació */
button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    z-index: 100;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.7);
}
.carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    min-width: 33.33%;
    box-sizing: border-box;
}

.carousel img {
    width: 100%;
    height: auto;
    display: block;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}


/* FOOTER*/
.textfooter{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;   
}
/* Graella de notícies */
#all-articles h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    margin: 10px;
}

.text-center{
margin-left: 10px;
}
.card:hover {
    transform: translateY(-5px);
}

.card-img-top {
    max-height: 250px;
    object-fit: cover;
}

#all-articles .row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

#all-articles .card:hover {
    transform: translateY(-5px);
}

#all-articles .card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
}

/* Media Queries para responsividad */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .site-title {
        font-size: 1.5rem;
    }

    .site-nav ul {
        flex-direction: column;
        gap: 10px;
    }

    .qui-som-container {
        flex-direction: column;
    }

    .sergirobertofoto img {
        width: 100%;
    }

    .titolseccio, .titolnoticies {
        font-size: 2.5rem;
    }

    .article-content {
        padding: 10px;
    }

    .carousel-item {
        min-width: 100%;
    }

    button {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .site-header {
        padding: 10px 20px;
    }

    .site-title {
        font-size: 1.2rem;
    }

    .site-nav a {
        font-size: 1rem;
    }

    .titolseccio, .titolnoticies {
        font-size: 2rem;
    }

    p {
        font-size: 0.9rem;
    }
}

