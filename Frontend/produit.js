//-----------------CONST------------------------

const oneTeddy = document.getElementById("produit");
const urls = new URL(window.location.href);
const params = new URLSearchParams(urls.search);
const teddyId = params.get('id');
const photo = document.getElementById("photo");
const price = document.getElementById("price");
const name = document.getElementById("name");
const description = document.getElementById("description");
const color = document.getElementById("color");
const select = document.getElementById("select");

//----------------------------FETCH------------------------

async function teddiesInformation (url) {
    let result = await fetch(url)
    return result.json()
}

//--------------------------TEDDY------------------------------

teddiesInformation ('http://localhost:3000/api/teddies' + '/' + teddyId)

.then (teddy => { photo.innerHTML += `<img id="teddyPhoto" src="${teddy.imageUrl}">`
                name.innerHTML += `${teddy.name}`
                price.innerHTML += `${teddy.price} €`
                description.innerHTML += `${teddy.description}`

//----------------menu déroulant couleurs-----------------------

                const teddyColor = teddy.colors;
                const select = document.getElementById ("select");
            
                for(let i = 0; i < teddyColor.length; i++) {
                    let colorOption = teddyColor[i];
                    select.innerHTML += `<option> ${colorOption} </option>` 
                }});
          
let addCart = [];
const panier = document.getElementById("btn");
const myLocalStorage = localStorage;
let quantity = 1;
const colorSelect = select.options[select.selectedIndex].value; 

    panier.addEventListener('click', addProduct())
    function addProduct() { 
    alert("article ajouté au panier ;)") 
    localStorage.setItem('cart',JSON.stringify(addCart))}
                                        
    function product () {
        let productFound = addCart.find(element => element.teddyId == teddyId && element.colorSelect == colorSelect);
            if (productFound = undefined){
        addCart.push(teddyId, colorSelect, teddy.price, quantity)
            } else {
        productFound.quantity++;
    }

    localStorage.setItem('cart',JSON.stringify(addCart));
    console.log(productFound)
}
console.log(addCart)
/*
class teddyAndColor { 
            constructor(teddyId, colorSelect) {
            this.teddyId = teddyId;
            this.colorSelect = colorSelect;
    }
}    
localStorage.key = 0;
    let key = localStorage.key;
    function onClick() {
        key += 1;
    }
     const newTeddyAndColor = new teddyAndColor (teddyId, colorSelect);
    console.log(newTeddyAndColor); */
    


