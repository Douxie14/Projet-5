const teddiesList = document.getElementById("bloc_image");

async function teddiesInformation (url) {
    let result = await fetch(url)
    return result.json()
}

teddiesInformation ('http://localhost:3000/api/teddies') 
.then (teddies => {
    teddies.forEach(teddy => {
        console.log(teddy)  
        teddiesList.innerHTML += `<div><a href="./produit.html"><img id="teddyImg"
         src="${teddy.imageUrl}"><div id="detail">${teddy.name}${teddy.price}</div></a></div>`
    })         
})
.catch (error => {
    console.log("nous avons trouvé " + error)
});
