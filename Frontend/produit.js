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
          
const addCart = [];
const panier = document.getElementById("btn");

const myLocalStorage = localStorage;


    panier.addEventListener('click', function() {
        
    alert("article ajouté au panier ;)") 
    const colorSelect = select.options[select.selectedIndex].value
    addCart.push(teddyId, colorSelect)
    console.log(addCart)

    class teddyAndColor { 
            constructor(teddy, color) {
            this.teddy = teddyId;
            this.color = colorSelect;
    }
} 
    console.log(teddyAndColor)
    localStorage.setItem(new teddyAndColor, 1 );
})
   

    
    


