class Game extends HTMLElement {

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

            h4{
                color: aquamarine;
                font-family: "Roboto";
            }
            h1:hover{
                color: aquamarine;
                transition: 2s;
                cursor: pointer;
            }

            .games{
                display: flex;
                
                padding: 5%;
                
                width: 100%;
                
            }

            .game{
                width: 20%;
                display: flex;
                
                justify-content: center;
                border-radius: 10px 0px 0px 10px;
                box-shadow: -15px 2px 35px 10px rgba(204, 0, 102, 0.5); /* Sombra inferior */
                transition: 1s;
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

            .game-info{
                width: 50%;
                height: 52vh;
                padding: 2rem;
                border-radius: 0px 10px 10px 0px;
                box-shadow: 15px 2px 35px 10px rgba(204, 0, 102, 0.5); /* Sombra general */
                
                    
            }

            .buy-button{
                display: flex;
                justify-content: center;
                gap: 10rem;
                margin-top: 10rem;
            }
            .jimmy{
                width:20%
            }
            .buy-now{
                height: 10rem;
                width: 50%
            }

            .buy-now:hover{
                filter: brightness(0.7);
            }
            .age-restrcition{
                width: 2rem;
            }
        </style>
  
            <div class="title">
                <h1>S h u e r k!🧌¿</h1>
            </div>
            <div class="games">
                <div class="game">
                    <h2>Shrek 2</h2>
                    <div class="game-image">
                        <img src="images/shrek/shrek.jpg" alt="shrek2">
                    </div>
                </div>
                <div class="game-info">
                    <h2>INFORMACION DEL PRODUCTO</h2>
                    <h4>Shuerk es el nuevo MMOPRPG no lineal de terror que hará que te tiemblen todos los huesos, de los creadores de Clash Royale, Hello Neighbour y Torrente 3, llega este aterrador juego basado en las peliculas del exorcista y shrek, en este caso la segunda en la cual se pueden ver apariciones del monstruo y del terrible asno violador de aves que buscaran matarte de cualquier manera</h4>
                    <div class="buy-button">
                        <img class="jimmy" src="images/neutron-style.gif" alt="jimmy">
                        <img class="buy-now" src="images/buy-now.png" alt="de-pie"> 
                        <img class="age-restriction" src="images/pegi.svg.png" alt="pegi">       
                    </div>
                </div>
            </div>

        `
    }

}

customElements.define('game-component', Game);