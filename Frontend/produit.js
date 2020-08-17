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
const panier = document.getElementById("btn");
const myLocalStorage = localStorage;

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
                }
            
  //------------------------------création panier----------------------//        
let newCart = null;
let quantity = 1;
let productPrice = teddy.price;
let productId = teddyId;

panier.addEventListener('click', addProduct);

function createNewCart() {
    let storageCart = localStorage.getItem('cart');

    if (storageCart == null ) {
        newCart = [];

    } else { newCart= JSON.parse(storageCart)}

    localStorage.setItem('cart',JSON.stringify(newCart));
}

//----------------------Ajout Panier-------------------------//


function product() {
    let colorSelect = select.options[select.selectedIndex].value;
    let productColor = colorSelect;
    let productFound = newCart.find(element => element.productId == productId && element.productColor == productColor); 
            if (productFound == undefined) {
        newCart.push({productId, productColor, productPrice, quantity});
            } else {
        productFound.quantity++;
    }
    console.log(productFound)
    localStorage.setItem('cart',JSON.stringify(newCart));    
}

function addProduct () {
    alert("article ajouté au panier ;)")
    if(newCart == null){
        createNewCart() 
    } 

    product()

    }

})






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
    


