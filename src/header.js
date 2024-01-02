class Header extends HTMLElement {

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
            header{
                width: 100%;
                
                background-color: black;

                
            }
            .header-main{
                margin-top: -1.5rem;
                width: 100%;
                display: flex;
                background-color: black;

                
            }


            .header-title{
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 3s
            }

            .header-title:hover{
                transition: 2s;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 20px;
                color: pink;
                width: 47.5%;
                cursor: pointer;
            }
            h2{
                width: 13%;
                font-size: 50px;
                display: flex;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: aquamarine;
                align-items: center;
                justify-content: center;
                font-family: "Rubik Glitch";
                color: hsl(330, 100%, 50%);

            }

            h2:hover{
                display: flex;
                justify-content: space-between;
                color: aquamarine;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: hsl(330, 100%, 50%);
                
            }
            .header-title-left{
                display: flex;
                margin-left: 33%;
                
            }

            .header-title-right{
                display: flex;
                margin-right: 33%;
            }


            .cart{
                width: 30%;
                display: flex;
                justify-content: end;
                padding-right: 5rem
            }

            .cart svg {
                width: 2rem;
                fill: hsl(330, 100%, 50%);
                transition: 0.5s;
            }

            .cart svg:hover {
                transition: 0.5s;
                width: 3rem;
                padding-left: 1rem;
                fill: aquamarine;
                cursor: pointer;
            }

            .header-functions{
                width: 80%;
                margin-top: -2rem;
                display: flex;
                justify-content: space-between;
                padding: 0 10%;
                padding-bottom: 1rem
            }

            .header-searcher{
                width: 66%;
                display: flex;
                justify-content: end;
                
            }

            .header-searcher input{
                width: 60%;
                height: 1.5rem;
                color: hsl(330, 100%, 50%);
                border: solid 2px aquamarine;
                border-radius: 10px
            }


            .header-user{
                width: 30%;
                display: flex;
                justify-content: center;
                gap: 1rem
            }
            .header-user-login{
                padding: 0 10%;
                background-color: black;
                color: hsl(330, 100%, 50%);
                border: solid 3px aquamarine;
                border-radius: 10px;
                transition: 0.5s;

            }

            .header-user-login:hover{
                padding: 0 20%;
                background-color: black;
                color: aquamarine;
                border: solid 3px hsl(330, 100%, 50%);
                border-radius: 10px;
                transition: 0.5s;

            }

            .header-user-register{
                padding: 0 10%;
                background-color: black;
                color: aquamarine;
                border: solid 3px hsl(330, 100%, 50%);
                border-radius: 10px;
                transition: 0.5s;

            }

            .header-user-register:hover{
                padding: 0 20%;
                background-color: black;
                color: hsl(330, 100%, 50%);
                border: solid 3px aquamarine;
                border-radius: 10px;
                transition: 0.5s;

            }
        </style>
  
        <header>
            <div class="header-main">
                <div class="header-title">
                    <h2 class="header-title-left">Te</h2><h2 class="header-title-right">Store</h2>
                </div>
                <div class="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>
                </div>
            </div>
            <div class="header-functions">
                <div class="header-searcher">
                    <input type="text" placeholder="Search ...">
                </div>
                <div class="header-user">
                    <button class="header-user-login">LOGIN</button>
                    <button class="header-user-register">REGISTRATE</button>
                </div>
            </div>
            
        </header>

        `
        }
  
    }
  
  customElements.define('header-component', Header);