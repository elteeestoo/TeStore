class Cart extends HTMLElement {

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

            .cart{
                margin-top: 2rem;
                display: flex;
                justify-content: space-between;
                gap: 2rem;
                width: 90%;
                
            }
            
            .cart-products{
                
                width: 60%;
                padding-left: 5%;
                
            }

            .cart-product{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                background-color: white;
                border-radius: 10px;
                margin-bottom: 1rem;
                box-shadow: 
                    0 0 20px rgba(102, 204, 170, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(102, 204, 170, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(102, 204, 170, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(102, 204, 170, 0.2); /* Sombra inferior */
            }

            .cart-product:hover{
                cursor: pointer;
                filter: brightness(0.9);
                box-shadow: 
                    0 0 20px rgba(204, 0, 102, 0.2), /* Sombra general */
                    0 0 20px 10px rgba(204, 0, 102, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(204, 0, 102, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(204, 0, 102, 0.2); /* Sombra inferior */
            }
            .cart-product-image img{
                display: flex;
                justify-content: center;
                width: 2rem;
                padding: 1rem
            }
            .cart-checkout{
                width: 20%;
            }
            
            .cart-product-buttons{
                display: flex;
            }
            .cart-product-buttons button{
                border: none; 
                background-color: transparent;
                width: 2.5rem;
                margin-right: 0.5rem;
            }
            .cart-product-buttons h4{
                padding-right: 1rem;
            }

            .cart-checkout{
                width: 20%;
                background-color: aquamarine;
                border-radius: 10px;
                padding: 2rem;
                margin-bottom: 2rem;
                box-shadow: 
                    0 0 20px rgba(102, 204, 170, 0.5), /* Sombra general */
                    0 0 20px 10px rgba(102, 204, 170, 0.2), /* Sombra derecha */
                    0 0 20px -10px rgba(102, 204, 170, 0.2), /* Sombra izquierda */
                    0 0 20px 10px rgba(102, 204, 170, 0.2); /* Sombra inferior */
                transition: 0.5s;
            }

            .cart-checkout:hover{
                box-shadow:
                    0 0 20px rgba(102, 204, 170, 0.5), /* Sombra general */
                    0 0 20px 10px rgba(102, 204, 170, 0.5), /* Sombra derecha */
                    0 0 20px -10px rgba(102, 204, 170, 0.5), /* Sombra izquierda */
                    0 0 20px 10px rgba(102, 204, 170, 0.5); /* Sombra inferior */
                transition: 0.5s;
            }
            .cart-checkout-title{
                display: flex;
                justify-content: center;
            }

            .cart-checkout-description{
                display: flex;
                text-decoration: none;
                
            }

            .cart-checkout-description span{
                margin: 0 0.5rem;
                
            }

            .cart-checkout-description ul{
                
            }
            .cart-checkout-description li{
                margin-bottom: 0.5rem;
                text-decoration: underline;
            }
            .cart-checkout-description li:hover{
                
                cursor: pointer
            }
            .cart-checkout-button{
                display: flex;
                justify-content: center;
            }
            .cart-checkout-button img{
                width: 80%
            }
            .cart-checkout-button img:hover{
                filter: brightness(0.8)
            }
        </style>
  
            <div class="title">
                <h1>C a R r i T o!🧌¿</h1>
            </div>
            <div class="cart">
                <div class="cart-products">
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="images/shrek/shrek.jpg" alt="shrek2">
                        </div>
                        <div class="cart-product-description">
                            <h3>Shrek 2 PC/PS2 Ultimate Edition</h3>
                        </div>
                        <div class="cart-product-description">
                            <h3>69,95€</h3>
                        </div>
                        <div class="cart-product-buttons">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>
                            </button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>unfold-more-horizontal</title><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></button>
                            <h4>1</h4>
                        </div>
                    </div>
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="images/shrek/shrek.jpg" alt="shrek2">
                        </div>
                        <div class="cart-product-description">
                            <h3>Shrek 2 PC/PS2 Ultimate Edition</h3>
                        </div>
                        <div class="cart-product-description">
                            <h3>69,95€</h3>
                        </div>
                        <div class="cart-product-buttons">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>
                            </button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>unfold-more-horizontal</title><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></button>
                            <h4>1</h4>
                        </div>
                    </div>
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="images/shrek/shrek.jpg" alt="shrek2">
                        </div>
                        <div class="cart-product-description">
                            <h3>Shrek 2 PC/PS2 Ultimate Edition</h3>
                        </div>
                        <div class="cart-product-description">
                            <h3>69,95€</h3>
                        </div>
                        <div class="cart-product-buttons">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>
                            </button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>unfold-more-horizontal</title><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></button>
                            <h4>1</h4>
                        </div>
                    </div>
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="images/shrek/shrek.jpg" alt="shrek2">
                        </div>
                        <div class="cart-product-description">
                            <h3>Shrek 2 PC/PS2 Ultimate Edition</h3>
                        </div>
                        <div class="cart-product-description">
                            <h3>69,95€</h3>
                        </div>
                        <div class="cart-product-buttons">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>
                            </button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>unfold-more-horizontal</title><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></button>
                            <h4>1</h4>
                        </div>
                    </div>
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="images/shrek/shrek.jpg" alt="shrek2">
                        </div>
                        <div class="cart-product-description">
                            <h3>Shrek 2 PC/PS2 Ultimate Edition</h3>
                        </div>
                        <div class="cart-product-description">
                            <h3>69,95€</h3>
                        </div>
                        <div class="cart-product-buttons">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>
                            </button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>unfold-more-horizontal</title><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></button>
                            <h4>1</h4>
                        </div>
                    </div>
                </div>
                <div class="cart-checkout">
                    <div class="cart-checkout-title">
                        <h2>Resumen de Compra</h2>
                    </div>
                    <div class="cart-checkout-description">
                        <ul>
                            <li><span>Product/s:</span>Shrek 2 x1<span>Price</span>69.95€</li>
                            <li><span>Product/s:</span>Shrek 2 x1<span>Price</span>69.95€</li>
                            <li><span>Product/s:</span>Shrek 2 x1<span>Price</span>69.95€</li>
                            <li><span>Product/s:</span>Shrek 2 x1<span>Price</span>69.95€</li>
                            <li><span>Product/s:</span>Shrek 2 x1<span>Price</span>69.95€</li>
                        </ul>
                    </div>
                    <div class="cart-checkout-button">
                        <img class="buy-now" src="images/buy-now.png" alt="de-pie"> 
                    </div>
                </div>
            </div>

        `
    }

}

customElements.define('cart-component', Cart);