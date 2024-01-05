class Gallery extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        document.addEventListener("showModalDelete", (event => {
            this.openModal()
        }));

        this.render()
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        <style>

            .title{
                display: flex;
                justify-content: center;
                background-image: url('images/fondo.jpg'); /* Reemplaza 'ruta-de-tu-imagen.jpg' con la ruta de tu imagen de fondo */
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                filter: brightness(0.8);
                width: 100%;
                position: sticky;
                top: 0px;
                z-index: 100;
                
            }
            h1{
                
                font-size: 50px;
                display: flex;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: hsl(330, 100%, 50%);
                align-items: center;
                justify-content: center;
                font-family: "Rubik Glitch";
                color: black;
                transition: 1s;
                cursor: pointer;

            }

            h1:hover{
                color: aquamarine;
                transition: 2s;
                cursor: pointer;
            }

            .games{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                padding: 5%;
                gap: 4rem;
                width: 90%;
                
                justify-content: center;
                align-items: center;
            }

            a{
                display: flex;
                width: 100%
            }
            .game{
                width: 100%;
                display: flex;
                
                justify-content: center;
                border-radius: 10px;
                box-shadow: 
                    0 0 20px rgba(204, 0, 102, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(204, 0, 102, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(204, 0, 102, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(204, 0, 102, 0.2); /* Sombra inferior */
                
                flex-direction: column;
                margin-bottom: 1rem;
                position: relative;
                overflow: hidden;
            }

            .game:hover{
                cursor: pointer;
                border-radius: 10px;
                transform: scale(1.03);
                transition: transform 0.5s;    
                filter: brightness(1);
                
                box-shadow: 
                    0 0 20px rgba(102, 204, 170, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(102, 204, 170, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(102, 204, 170, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(102, 204, 170, 0.2); /* Sombra inferior */
            }

            .game-image h2::before {
                
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7); /* Fondo semi-transparente para que el texto sea legible */
                color: white; /* Color del texto encima del fondo */
                text-align: center;
                line-height: 2; /* Ajusta según sea necesario */
                opacity: 0;
                transition: opacity 0.3s ease; /* Agrega una transición para un efecto suave */
            }

            .game-image:hover h2::before {
                opacity: 1;
                filter: brightness(1.3)
            }

            .game h2{
                background-color: black;
                filter: brightness(1);
            }

            h2{
                padding-left: 1rem;
                font-family: "Roboto";
                color: white;
                
            }

            .game-image img{
                position: relative;
                width: 100%;
                justify-content: center;
                
                border-radius: 10px;
                filter: brightness(1);
                box-shadow: 
                    0 0 10px rgba(0, 0, 0, 0.1), /* Sombra general */
                    0 0 10px 15px rgba(0, 0, 0, 0.1), /* Sombra derecha */
                    0 0 10px -15px rgba(0, 0, 0, 0.1), /* Sombra izquierda */
                    0 0 10px 15px rgba(0, 0, 0, 0.1); /* Sombra inferior */

            }

            .game-image img:hover{
                filter: brightness(0.7);
            }
            .overlay {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7); /* Fondo semi-transparente para que el texto sea legible */
                color: white; /* Color del texto encima del fondo */
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease; /* Agrega una transición para un efecto suave */
            }

            .game:hover .overlay {
                opacity: 1;
            }

            .overlay ul {
                width: 80%;
                display: flex;
                
                justify-content: center;
                flex-direction: column;
                list-style: none;
                
                font-family: "Roboto";
                text-align: left;
                margin: 0;
                font-size: 14px; /* Ajusta según sea necesario */
                color: white;
                -webkit-text-stroke-width: 0;
                -webkit-text-stroke-color: transparent;
            }

            .overlay ul span{
                margin-right: 0.5rem;

            }
            .overlay h3{
                text-decoration: underline;
                font-family: "Roboto";
                color: aquamarine;
                font-size: 14px;
                
            }

            .overlay img{
                width: 30%;
                background-color: none;
                border-radius: none;
                box-shadow: none;
                margin-bottom: 2rem;
                
            }
            

            .overlay img:hover{
                filter: brightness(1)
            }
            .overlay .game-links{
                display: flex;
                gap: 0.7rem;
            }

            .overlay .game-link{
                display: flex;
                
            }
            .overlay .game-link:hover{
                filter: brightness(0.7)
            }

            .overlay .game-link svg{
                display: flex;
                width: 1rem;
                fill: aquamarine;
            }
        </style>
  
            <div class="title">
                <h1>J u E G o S!¿</h1>
            </div>
            <div class="games">
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/de-pie.png" alt="de-pie">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/de-chill.png" alt="chill">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/saludo.png" alt="saludo">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/boca.png" alt="boca">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/espada.png" alt="espada">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/diego.png" alt="diego">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/boca.png" alt="boca">
                        </div>
                    </div>
                </div>
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                        <div class="overlay">
                            <img src="images/shrek/shrek-titulo.png" alt="shrek2">
                            <ul>
                                <li><span>Plataforma/s:</span>PC PlayStation 2</li>
                                <li><span>Genero:</span>Terror, Suspense</li>
                                <li><span>Fecha de Lanzamiento:</span>22 Abril 2005</li>
                            </ul>
                            <div class="game-links">
                                <div class="game-link">
                                    <a href="./juego.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                        <h3 class="game-link">Saber Mas</h3>
                                    </a>        
                                </div>
                                <div class="game-link">
                                    <a href="./carrito.html">
                                        <h3 class="game-link">Añadir al carrito</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-down</title><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <img src="images/shrek/boca.png" alt="boca">
                        </div>
                    </div>
                </div>

            </div>

        `
    }

}

customElements.define('gallery-component', Gallery);