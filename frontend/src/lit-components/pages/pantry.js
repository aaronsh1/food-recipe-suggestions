import { html, css, LitElement } from 'lit';
import { PantryStyles } from '../../styles/pantry';

export class Pantry extends LitElement {
    static styles = PantryStyles;

    static properties = {
        ingredientArr: [],
        selectIngredients:[],
        forSearch: [],
        selectedNm:0
    }

    constructor() {
        super();
        this.forSearch = [];
        this.getPantry();

        this.forSearch = new Array(this.ingredientArr.length).fill(false);
    }

    apiUrl = "placementforurl";

    getPantry = () => {
        let pantrySection = document.querySelector("#ingredient-pantry");
        // fetch(apiUrl+"/pantry", new URLSearchParams({
        //     id: 1,
        // }))
        // .then(response => response.json())
        // .then(data.map(
        //     ingredient => addIngredientsToPage(ingredient, pantrySection)
        // ));
    
        this.ingredientArr = [
            {
                id: 12,
                name: "apple",
                image: "/public/images/ingredients/croissant.png",
                selected: false,
            },
            {
                id: 2,
                name: "banana",
                image: "/public/images/ingredients/croissant.png",
                selected: false,
            },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "banana",
            //     image: "/public/images/ingredients/croissant.png"
            // },
            // {
            //     id: 1,
            //     name: "carrot",
            //     image: "/public/images/ingredients/croissant.png"
            // },
        ];
        //this.ingredientArr = ingredientArr;
    }
    
    addIngredientsToPage = (ingredient, pantrySection) => {
        let ingredientToAdd = document.createElement("pantry-ingredient");
        ingredientToAdd.name = ingredient.name;
        ingredientToAdd.image = ingredient.image;
        console.log(ingredient.name);
    
        pantrySection.appendChild(ingredientToAdd);
    }
    
    addIngredient = (ingredient) => {
        let addIngredientForm = document.getElementsByClassName("add-ingredient-form");
        let form = FormData(addIngredientForm);
    
        let ingredientToAdd = {
            "User": form.user,
            "Name": form.name
        }
    
        fetch(apiUrl, {
            method: "POST",
            body: ingredientToAdd
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    
        let bodyChildren = document.querySelectorAll("body > *:not(add-ingredient-modal)");
        bodyChildren.forEach(child => child.classList -= " blur");
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
        document.body.appendChild(screenFilm);
        let modalToAdd = document.createElement("add-ingredient-modal");
        document.body.appendChild(modalToAdd);
        let bodyChildren = document.querySelector("pantr-a");
        // bodyChildren.classList += " blur";
        bodyChildren.forEach(child => child.classList += " blur");
    }
    

    // Handlers
    submitIngredientHandler = () => {
        addIngredient();
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





    // addForSearch = (id) => {
    //     if (this.forSearch.includes(id)){
            
    //         idx = this.forSearch.indexOf(id);
    //         this.forSearch.splice(idx, 1);

    //         changeColour = document.querySelector("#"+id);
    //         changeColour.style.backgroundColor = "#E9C46A";
    //     } else {
    //         this.forSearch.push(id);
    //         changeColour = document.querySelector("#"+id);
    //         changeColour.style.backgroundColor = "blue";
    //     }


    // }
    outItems=() =>{
        let arr=[];
        this.forSearch.forEach((element,index) => {
            if(element)
            {
                arr.push(this.ingredientArr[index].id)
            }
        })
        console.log(arr)
    }



    render() {
// <label>Selected items: ${this.forEach.length}/</label><output>selectedNum</output>
        return html`
        <h1>My Pantry</h1>
        <h2 class="pantry-subheading">View all of your current ingredients and add/remove</h2>
        <section id="search-bar">
        <label>Selected items: ${this.selectedNm}/${this.forSearch.length} </label>
            <button @click="${this.outItems}" id="search-button">Find Recipe</button>

        </section>

        <section id="ingredient-pantry" >
        
        ${
            this.ingredientArr.map(
                (ingr,i) => html`
                    <pantry-ingredient id='${i}' @click='${this._ingredientClicked}' class='ingredient' .selected='${this.forSearch[i]}' name=${ingr.name} image=${ingr.image} id=${ingr.id}></pantry-ingredient>
                `
            )
        }
        </section>
        <button @click="${this.addIngredientButtonHandler}" id="add-ingredient-fab">+</button>
        `;
    }

    _ingredientClicked(e) {
        let index = e.target.id;

        this.forSearch[index]  = !this.forSearch[index];
        console.log(this.selectedNum())
        this.selectedNm=this.selectedNum()


    }
}

customElements.define("pantry-a", Pantry);