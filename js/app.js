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

});