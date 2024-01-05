class Faqs extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        // Mueve la definición de toggleAcordeon al constructor
        this.toggleAcordeon = this.toggleAcordeon.bind(this);
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
                background-image: url("images/fondo.jpg"); /* Reemplaza "ruta-de-tu-imagen.jpg" con la ruta de tu imagen de fondo */
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
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
            p{
                color: black;
                font-family: "Roboto";
            }
            h1:hover{
                color: aquamarine;
                transition: 2s;
                cursor: pointer;
            }

            .faqs{
                margin-top: 2rem;
                padding-left: 5rem;
                height: 100vh;
                gap: 2rem;
                width: 100%;
                
            }
            
            .faq{
                padding: 1rem 5rem;
                width: 20%;
                background-color: white;
                border-radius: 10px;
                margin: 1rem;
                box-shadow: 
                    0 0 20px rgba(102, 204, 170, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(102, 204, 170, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(102, 204, 170, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(102, 204, 170, 0.2); /* Sombra inferior */
            }

            .faq:hover{
                cursor: pointer;
                filter: brightness(0.9);
                box-shadow: 
                    0 0 20px rgba(204, 0, 102, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(204, 0, 102, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(204, 0, 102, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(204, 0, 102, 0.2); /* Sombra inferior */
            }

            .faq-title{
                font-family: "Roboto";
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                padding: 10px;
                cursor: pointer;
            }
            .faq-title svg{
                width: 1.5rem;
                margin-right: 10%;
            }
            .content{
                display: none;
                padding: 10px;
            }
        </style>
  
            <div class="title">
                <h1>f A q S!🧌¿</h1>
            </div>
            <div class="faqs">
                <div class="faq">
                    <div class="faq-title" data-content-id="first-content">¿Que metodos de pago estan aceptados?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></div>
                        <div id="first-content" class="content">
                            <p>El metodo de pago aceptado es Stripe pero si estas usando el navegador de Tor puedes usar BTC 🤫</p>
                        </div>
                </div>
                <div class="faq">
                    <div class="faq-title" data-content-id="second-content">¿Cuanto tardan los envios?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></div>
                        <div id="second-content" class="content">
                            <p>El envio tarda entre 24/72h habiles, Baleares y Canarias puede tardar mas </p>
                        </div>
                </div>
                <div class="faq">
                    <div class="faq-title" data-content-id="third-content">¿Se pueden realizar devoluciones?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></div>
                        <div id="third-content" class="content">
                            <p>Vaya, el producto no te ha gustado?, Sí, tenemos una política de devolucion de 30 días en los que podrás probar el juego y ver si es de tu agrado o no, si superas las 50 horas de juego, el juego no podrá ser reembolsado</p>
                        </div>
                </div>
                <div class="faq">
                    <div class="faq-title" data-content-id="fourth-content">¿Hace envios fuera de españa?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></div>
                        <div id="fourth-content" class="content">
                            <p>No, solo estan permitidos los pedidos en la peninsula, Baleares y Canarias</p>
                        </div>
                </div>
                <div class="faq">
                    <div class="faq-title" data-content-id="fifth-content">¿En que idiomas estan los juegos?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></div>
                        <div id="fifth-content" class="content">
                            <p>Por el momento todos los juegos están en Ingles y Español</p>
                        </div>
                </div>
                <div class="faq">
                    <div class="faq-title" data-content-id="sixth-content">¿Es seguro el metodo de pago?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></div>
                        <div id="sixth-content" class="content">
                            <p>Stripe es una plataforma utilizada por miles de empresa que garantiza una seguridad absoluta tanto para el comprador como para el vendedor</p>
                        </div>
                </div>
            </div>

        `
        const faqTitles = this.shadow.querySelectorAll(".faq-title");

        // Agrega un manejador de eventos a cada título de la pregunta
        faqTitles.forEach(title => {
            title.addEventListener("click", (event) => {
                // Llama a toggleAcordeon con el ID correspondiente
                this.toggleAcordeon(event.target.dataset.contentId);
            });
        });
    } 
    // Define toggleAcordeon como un método de la clase
    toggleAcordeon(id) {
        var content = this.shadowRoot.getElementById(id);
        var displayStyle = window.getComputedStyle(content).getPropertyValue("display");

        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }
}

customElements.define("faqs-component", Faqs);