const teddiesList = document.getElementById("produit");

async function teddiesInformation (url) {
    let result = await fetch(url)
    return result.json()
}
teddiesInformation ('http://localhost:3000/api/teddies') 
.then (teddies => {
    teddies.forEach(teddy => {
        console.log(teddy)
    })
})
.catch (error => {
    console.log(error)
})