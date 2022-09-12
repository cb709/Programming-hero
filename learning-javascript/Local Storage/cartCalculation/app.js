// get input fields value by id
const getInputValueById = (id) => {
    const productField = document.getElementById(id);
    const productValue = productField.value;
    productField.value = '';
    return productValue;
}

//set key value in local storage
const setValuesToLocalStorage = (key, value) => {
    if(key !== '' && value !== ''){
        localStorage.setItem(key, value);
    }
}

// getting cart as object form local storage
const getCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {}
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;

}

const addProductsToCart = (productName, productQuantity) => {
    // let savedCart = localStorage.getItem('cart');
    let cart = getCartFromLocalStorage(); 
    cart[productName] = productQuantity;
    cartStringified = JSON.stringify(cart)
    setValuesToLocalStorage('cart', cartStringified)
}

// addproducts button on click event listener
document.getElementById ('add-button').addEventListener('click', function() {
   const productName =  getInputValueById('product-name');
   const productQuantity =  getInputValueById('product-quantity');
//    console.log(productName + " : " + productQuantity);
   // set products to local storage
    addProductsToCart(productName, productQuantity);
    showCartProducts();
})


// show products to display
const showCartProducts = () => {
    const cart = getCartFromLocalStorage()
    const productContainer = document.getElementById('products-container');
    productContainer.innerHTML = ``;
    for ( product in cart) {
        productContainer.innerHTML += `<li>${product} : ${cart[product]}</li>`
    }
}

// clear cart
document.getElementById('clear-button').addEventListener('click', function() {
    localStorage.clear()
    const productContainer = document.getElementById('products-container');
    productContainer.innerHTML = ``;
})
 
showCartProducts();





