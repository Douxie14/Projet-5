const ligneOurson = document.getElementById("ligneOurson");
let cart = localStorage.getItem('cart');
let totalCart = JSON.parse(cart);


for (let i = 0; i < totalCart.length; i++) {
            ligneOurson.innerHTML += `<tr><td>${totalCart[i].productName}</td>
                                        <td>${totalCart[i].productColor}</td>
                                        <td>${totalCart[i].productPrice}</td>
                                        <td>${totalCart[i].quantity}</td>
                                        </tr>`
                                   
                                   } 
                                   