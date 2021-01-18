// comment
'use strict';
const aside = document.querySelector(".aside");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const clearCart = document.querySelector(".clear-cart");
const single = document.querySelector(".single");
const goBack = document.querySelector('.go-back');

function toggleCart() {
    if(single.classList.contains('show-single')){
        single.classList.remove('show-single');
    }
    aside.classList.toggle("show");
}

function closeCart() {
    aside.classList.remove("show");
}

function createProduct(data){
  return `
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="product text-center">
      <div class="position-relative mb-3">
          <a href="#" class="d-block product-detail">
              <img  class="img-fluid w-100 product-img" src="${data.image}" alt="${data.image}">
          </a>    
          <div class="product-overlay">
              <ul class="list-inline">
                  <li class="list-inline-item">
                      <a class="btn btn-sm btn-outline-dark" href="#"><i class="far fa-heart"></i></a>
                  </li>
                  <li class="list-inline-item">
                      <a href="#" class="btn btn-sm btn-dark add-to-cart"><i class="fas fa-cart-plus"></i> Add to cart</a>
                  </li>
                  <li class="list-inline-item">
                      <a class="btn btn-sm btn-outline-dark product-detail" href="#"><i class="fas fa-expand"></i></a>
                  </li>
              </ul>
          </div>
      </div>        

      <h3 class="reset-anchor product-name">${data.name}</h3>
      <p class="text-small text-muted">$<span class="product-price">${data.price}</span></p>
    </div>
  </div>
  `;
}
function makeShowcase(products){
  let result = '';

  products.forEach(function(element){
    result += createProduct(element);

  });
  document.querySelector('.showcase').innerHTML = result;
}
function renderShowcase(){
  let addToCarts = document.querySelectorAll('.add-to-cart');
  let productDetails = document.querySelectorAll('.product-detail');

  goBack.addEventListener('click',function(){
    single.classList.remove('show-single');
  })
  productDetails.forEach(function(element){
    element.addEventListener('click',function(e){
      //console.dir(e.target.closest('.product'));
      let parent = e.target.closest('.product');
      let name = parent.querySelector('.product-name').innerText;
      let price = parent.querySelector('.product-price').innerText;
      let about = `
      <h1>${name}</h1>
        <h2>$${price}</h2>
        <div>цветочная композиция</div>
      `;
      //description__content--about
      let contentAbout = document.querySelector('.description_content--about');
      contentAbout.innerHTML = about;

      //product-img
      let image = parent.querySelector('.product-img').getAttribute('src');
      document.querySelector('.product_img').innerHTML = `<img src="${image}" alt="">`;
      single.classList.add("show-single");
    });
  })
}
document.addEventListener("DOMContentLoaded", function(){
  closeBtn.addEventListener("click", closeCart);
  sidebarToggle.addEventListener("click", toggleCart);

  makeShowcase(products);
  renderShowcase();
});
