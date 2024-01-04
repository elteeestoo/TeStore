class Recomended extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.currentSlide = 0;
    }

    connectedCallback() {

        document.addEventListener("showModalDelete", (event => {
            this.openModal()
        }));

        this.render();
        this.attachEventListeners();
        this.startSliderAutoPlay();
    }

    startSliderAutoPlay() {
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, 3000); // Cambia este valor a la cantidad de milisegundos que desees (en este caso, 3000 ms = 3 segundos)
    }

    stopSliderAutoPlay() {
        clearInterval(this.intervalId);
    }

    attachEventListeners() {
        const prevButton = this.shadow.querySelector('.prev');
        const nextButton = this.shadow.querySelector('.next');

        prevButton.addEventListener('click', () => this.prevSlide());
        nextButton.addEventListener('click', () => this.nextSlide());
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
                margin-bottom: 1rem;
                filter: brightness(0.8);
                width: 100%;
                position: sticky;
                top: 0px;
                z-index: 100;
                
            }

            ul {
                list-style: none;
                font-family: "Roboto";
                
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

            h2{
                font-family: "Roboto";
                color: black;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: hsl(330, 100%, 50%);
            }

            h3{
                font-family: "Roboto";
                color: black;
                
            }
            h4{
                color: black;
                font-family: "Roboto";
            }
            h1:hover{
                color: aquamarine;
                transition: 2s;
                cursor: pointer;
            }

            .slider-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                position: relative;
                width: 60%;
                
                margin: 0 auto;
                margin-bottom: 20%;
                
            }

            .slides {
                display: flex;
                transition: transform 0.5s ease-in-out;
            }

            .slide {
                display: flex;
                flex-direction: column;
                max-height: 100%;
                min-width: 100%;
                box-sizing: border-box;
                margin-right: 5rem;
                position: relative;
                
            }

            .slide img {
                width: 50%;
                height: auto;
                border-radius: 10px;
                box-shadow: 
                    0 0 20px rgba(204, 0, 102, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(204, 0, 102, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(204, 0, 102, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(204, 0, 102, 0.2); /* Sombra inferior */
            }
            .slide:hover{
                filter: brightness(0.7)
            }
            .prev, .next {
                position: absolute;
                margin-top: 30%;
                top: 50%;
                transform: translateY(-50%);
                font-size: 40px;
                cursor: pointer;
                color: aquamarine;
                background-color: transparent;
                border: none;
                padding: 10px;
                outline: none;
                transition: font-size 0.3s ease-in-out;
            }

            .next {
                right: 0;
            }

            .prev:hover, .next:hover {
                color: hsl(330, 100%, 50%);
                font-size: 60px;
                transition: 0.5s;
            }

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 50%; /* Cambié el ancho al 100% para cubrir todo el contenedor del slide */
                height: 100%; /* Cambié la altura al 100% para cubrir todo el contenedor del slide */
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
                border-radius: 10px; /* Añadí un borde redondeado al overlay */
            }

            .slide:hover .overlay {
                opacity: 1;
            }

            .overlay:hover {
                opacity: 1;
            }

            .overlay img {
                width: 50%; /* Ajusté el ancho de la imagen dentro del overlay */
                height: auto;
                box-shadow: none;
                cursor: pointer;
               
                
                
            }

            .overlay .weird{
                background-color: black;
                width: 100%
            }
            
            .overlay h3{
                color: white;
            }
            .overlay img:hover{
                filter: brightness(1)
            }

        </style>
  
            <div class="title">
                <h1>O t R O s  / / / J u E G o S!🧌¿</h1>
            </div>
            <div class="slider-container">
                <div class="slides">
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img src="images/cat.gif" alt="chill">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img src="images/skate.gif" alt="chill">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="jimmy" src="images/neutron-style.gif" alt="jimmy">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="shaggy" src="images/shaggy.gif" alt="shaggy">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="flanders" src="images/flanders.gif" alt="flanders">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="weird" src="images/weird.gif" alt="weird">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="walter" src="images/walter.gif" alt="walter">
                            <h3>Shrek 2</h3>>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="benten" src="images/benten.gif" alt="benten">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="images/shrek/shrek.jpg" alt="Imagen 1">
                        <div class="overlay">
                            <img class="pepe" src="images/pepe.gif" alt="pepe">
                            <h3>Shrek 2</h3>
                        </div>
                    </div>
                </div>
                <button class="prev" onclick="prevSlide()">❮</button>
                <button class="next" onclick="nextSlide()">❯</button>
            </div>
        

        `
        this.showSlide(this.currentSlide);
    }

    showSlide(index) {
        const slides = this.shadow.querySelector('.slides');
        const totalSlides = this.shadow.querySelectorAll('.slide').length;

        if (index >= totalSlides) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = totalSlides - 1;
        } else {
            this.currentSlide = index;
        }

        const newTransformValue = -this.currentSlide * 100 + '%';
        slides.style.transform = 'translateX(' + newTransformValue + ')';
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }
}


customElements.define('recomended-component', Recomended);