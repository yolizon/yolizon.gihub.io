// comment
'use strict';
// document.body.innerHTML ="<h1>Helloooo</h1>";
// document.body.style.backgroundColor = "green";
const shoppingCart=document.getElementById('shopping-cart');
const aside=document.querySelector('.aside');
const closeBtn=document.querySelector('.close-btn');

let toggleCart=function(){
    aside.classList.toggle('show-sidebar');
   
};
shoppingCart.addEventListener('click', toggleCart);
closeBtn.addEventListener('click', function(){
    aside.classList.remove('show-sidebar');

})

let productDetails = document.querySelectorAll('.product-detail');

const single = document.querySelector('.single');
const goBack = document.querySelector('.go-back');
productDetails.forEach(function(element){
  element.addEventListener('click',function(e){
    //console.dir(e.target.closest('.product'));
    let parent = e.target.closest('.product');
    let name = parent.querySelector('.product-name').innerText;
    let price = parent.querySelector('.product-price').innerText;
    let image = parent.querySelector('.product-img').getAttribute('src');

    //console.log(name,price);
    document.querySelector('.product_img').innerHTML =`<img scr="${image}" alt="${name}"`;
    single.classList.add('show-single');
    document.querySelector('.description_content--about').innerHTML =`
    <h1>${name}</h1>
    <h2>${price}</h2>
    <p> цветочная композиция</p>
    `;
  })
})
goBack.addEventListener('click',function(){
  single.classList.remove('show-single');
})
