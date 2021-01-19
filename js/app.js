const aside = document.querySelector(".aside");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const clearCart = document.querySelector(".clear-cart");
const single = document.querySelector(".single");
const goBack = document.querySelector('.go-back');
const cartItems = document.querySelector('.cart-items');

function toggleCart() {
    if(single.classList.contains('show-single')){
        single.classList.remove('show-single');
    }
    // populateCart(cart);
    aside.classList.toggle("show");
    if(aside.classList.contains('show')){
        cartItems.innerHTML = '';
        populateCart(cart);
    }
}

function closeCart() {
    aside.classList.remove("show");
}

function createProduct(data){
    return `
    <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center" data-id="${data.id}">
            <div class="position-relative mb-3">
                <a class="d-block product-detail" href="#">
                    <img class="img-fluid w-100 product-img" src="${data.image}" alt="${data.name}">
                </a>
                <div class="product-overlay">
                    <ul class="mb-0 list-inline">
                        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark" href="#"><i class="far fa-heart"></i></a></li>
                        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart">Add to cart</a></li>
                        <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark product-detail"><i class="fas fa-expand"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <h6> <a class="reset-anchor product-name" href="#">${data.name}</a></h6>
            <p class="text-small text-muted">$<span class="product-price">${data.price}</span></p>
        </div>
    </div>
    `;
}
        
function makeShowcase(products) {
    let result = '';
    products.forEach(item => {
        result+=createProduct(item);
    });
    document.querySelector('.showcase').innerHTML = result;
}

function renderShowcase(){
    
    // product-detail
    let productDetails = document.querySelectorAll('.product-detail');
    
    goBack.addEventListener('click', function(){
        single.classList.remove("show-single");
    })
    
    productDetails.forEach(function(element) {
        element.addEventListener("click", function(e){
    
            let parent = e.target.closest(".product")
    
            // description_content--about
            
            let price = parent.querySelector('.product-price').innerText;
            let name = parent.querySelector('.product-name').innerText;
            let about = `
            <h1>${name}</h1>
            <h2>$${price}</h2>
            <div>Цветочная композиция</div>
            `;
            let contentAbout = document.querySelector('.description_content--about');
            contentAbout.innerHTML = about;
    
            // product_img
            let image = parent.querySelector('.product-img').getAttribute('src');
            document.querySelector('.product_img').innerHTML = `<img src="${image}" alt="">`;
            single.classList.add("show-single");
        });
    });
    
}

function carouselItem(data){
    return `
    <div class="carousel-item">
        <a class="category-item" href="shop.html">
            <img src="${data.image}" alt="${data.name}" height="100" width="250"><strong
            class="category-item-title">${data.name}</strong></a>
    </div>
    `;
}

function makeCarousel(categories) {
    let result = '';
    categories.forEach(item => {
        result+=carouselItem(item);
    });
    result += result;
    document.querySelector('.carousel-track').innerHTML = result;
}
// 

const getProduct = function(id){
    return products.find(function(product){
        return product.id === +(id);
    });
};
const cart = [];

function addToCartItem(item){
    const div = document.createElement("div");
        div.classList.add("cart-item");
        div.setAttribute('id', 'id'+item.id);
        div.innerHTML = `
            <div class="picture product-img">
                <img src="${item.image}" alt="${item.name}" class="img-fluid w-100">
            </div>
            <div class="product-name p-auto">${item.name}</div>
            <div class="remove-btn text-right">
                <a class="reset-anchor m-auto" href="#">
                    <i class="fas fa-trash-alt" data-id=${item.id}></i>
                </a>
            </div>
            <div class="quantity">
                <div class="border d-flex justify-content-around mx-auto">
                    <i class="fas fa-caret-left inc-dec-btn" data-id=${item.id}></i>
                    <span class="border-1 p-1 amount">1</span>
                    <i class="fas fa-caret-right inc-dec-btn" data-id=${item.id}></i>
                </div>
            </div>
            <div class="prices">
                <span class="price">$<span class="product-price">${item.price}</span></span>
                <span class="subtotal">Total: $<span class="product-subtotal"></span></span>
            </div>
        `;
        cartItems.appendChild(div);
}
function populateCart(cart) {
    cart.forEach(function(item){addToCartItem(item);});
}
document.addEventListener("DOMContentLoaded", function(){
    let style = getComputedStyle(document.body)
    console.log( style.getPropertyValue('--categories-length') ) 
    document.body.style.setProperty( "--categories-length", categories.length );
    console.log( style.getPropertyValue('--categories-length') ) 
    

    closeBtn.addEventListener("click", closeCart);
    sidebarToggle.addEventListener("click", toggleCart);
    makeCarousel(categories);
    makeShowcase(products);
    renderShowcase();

    let addToCarts = document.querySelectorAll('.add-to-cart');

    addToCarts.forEach(function(item) {
        item.addEventListener("click", function(event) {
        // let id = event.target.closest('.product').getAttribute('data-id');
        // console.log(id);
        // let product = getProduct(event.target.closest('.product').getAttribute('data-id'));
        // let product = getProduct(id);
        // dataset
        let product = getProduct(event.target.closest('.product').dataset.id);
        console.log(product);
        cart.push(product);
        console.log(cart);
        });
    });

});