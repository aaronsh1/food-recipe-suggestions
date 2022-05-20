import { html, css, LitElement } from 'lit';
import { fetchApi } from '../../api/fetchApi';
import { PantryStyles } from '../../styles/pantry';

export class Pantry extends LitElement {
    static styles = PantryStyles;

    static properties = {
        ingredientArr: [],
        forSearch: [],
        selectedNm:0
    }

    constructor() {
        super();
        this.ingredientArr = [];
        this.getPantry();
    }

    getPantry = () => {
        let pantrySection = document.querySelector("#ingredient-pantry");
        fetchApi({
            endpoint: 'pantry',
            method: "GET",
            token: window.localStorage.getItem("token")
        })
        .then(res => {
            if (res.status == 200) {
                // console.log(JSON.stringify(res.data));
                // this.ingredientArr = JSON.parse(JSON.stringify(res.data));
                this.ingredientArr = res.data;
                this.forSearch = new Array(this.ingredientArr.length).fill(false);
            }
        })
        .catch(err => {
            console.log(err);
        })

        // console.log(this.ingredientArr);
    }
    
    modalPopUp = () => {
        let screenFilm = document.createElement("section");
        screenFilm.style = css `
            filter: blur(4);
            transition: 0.5s;
            position: fixed;
            z-index: 1;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        `
        screenFilm.setAttribute("id", "screen-film")
        document.body.appendChild(screenFilm);
        let modalToAdd = document.createElement("add-ingredient-modal");
        document.body.appendChild(modalToAdd);
    }
    
    // Handlers
    submitIngredientHandler = () => {
        addIngredient();
    }
    
    addIngredientButtonHandler = () => {
        this.modalPopUp();
        document.querySelector("#add-ingredient-submit").addEventListener("click", submitIngredientHandler);
    }

    addIngredientButtonHandler = () => {
        // adjust css to blur background and modal pop up
        this.modalPopUp();
        document.querySelector("#add-ingredient-submit").addEventListener("click", submitIngredientHandler);
    }

    selectedNum= ()=> {
        let i=0;
        this.forSearch.forEach(x=>{if(x)i++})
        return i;
       }

       outItems=() =>{
        let arr=[];
        this.forSearch.forEach((element,index) => {
            if(element)
            {
                arr.push(this.ingredientArr[index].id)
            }
        })
        let url=arr.map='/receipes/?'+arr.map(item=>'item=&{item}').join('&')
        window.location.href=url;
    }

    render() {
        return html`
        <h1>My Pantry</h1>
        <h2 class="pantry-subheading">View all of your current ingredients and add/remove</h2>
        <section id="search-bar">
        <label class="scoreboard">Selected items: ${this.selectedNm}/${this.forSearch.length} </label>
            <button @click="${() => window.location.href = "/recipes?searchitem=1"}" id="search-button">Find Recipe</button>
        </section>
        <section id="ingredient-pantry">
        ${
            this.ingredientArr.map(
                (ingr,i) => {
                return html `
                    <pantry-ingredient @click='${() => this._ingredientClicked(i)}' class='ingredient' name="${ingr.IngredientName}" image="${ingr.Image}" id="${ingr.IngredientId}"></pantry-ingredient>
                `;
                }
            )
        }
        </section>
        <button @click="${this.addIngredientButtonHandler}" id="add-ingredient-fab">+</button>
        `;
    }

    _ingredientClicked(i) {
        let index = i;

        this.forSearch[index]  = !this.forSearch[index];
        this.selectedNm=this.selectedNum()


    }
}

customElements.define("pantry-a", Pantry);