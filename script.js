function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

// Close modal if user clicks outside of the white box
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

/*            tried to make the cart work but it is not working, I will try to fix it later, 
              I am not sure if the problem is in the html or the js, I will try to debug it later            */

              /*
//  Initialize an empty cart or Load from memorty
let cart = JSON.parse(localStorage.getItem('myCart')) || [];

//  select all "Add to Cart" buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
button.addEventListerners('click'), () => {
    // 3. Get product details from clicked button's data attributes
    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        quantity: 1
    };

    //  check if product is already in cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem){
        existingItem.quantity += 1 ;
    }
    else{
        cart.push(product);
    }

    //save the updated cart to memory
    localStorage.setItem('myCart', JSON.stringify(cart));

    alert(`${product.name} added to cart!`);
    console.log ("current cart:", cart);

    };
});
               */