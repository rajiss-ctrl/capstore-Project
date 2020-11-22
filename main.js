

let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name:'brownBrim',
        tag:'brim',
        price:'25',
        inCart:'0'
    },
    {
        name:'blueBeanie',
        tag:'beanie',
        price:'18',
        inCart:'0'
    },
    {
        name:'brownCowBoy',
        tag:'cowboy',
        price:'35',
        inCart:'0'
    },
    {
        name:'greyBrim',
        tag:'greyb',
        price:'25',
        inCart:'0'
    },
    {
        name:'addidas',
        tag:'nmd',
        price:'220',
        inCart:'0'
    },
    {
        name:'addidasYeezy',
        tag:'yeezy',
        price:'280',
        inCart:'0'
    },
    {
        name:'blackConverse',
        tag:'converse',
        price:'110',
        inCart:'0'
    },
    {
        name:'nikeWhite',
        tag:'nike',
        price:'160',
        inCart:'0'
    },
    {
        name:'blackJean',
        tag:'jean',
        price:'125',
        inCart:'0'
    },
    {
        name:'blueJeanJacket',
        tag:'jacket',
        price:'90',
        inCart:'0'
    },
    {
        name:'brownShearling',
        tag:'bshearl',
        price:'165',
        inCart:'0'
    },
    {
        name:'blueTanktop',
        tag:'tanktop',
        price:'25',
        inCart:'0'
    },
    {
        name:'florablouse',
        tag:'blousef',
        price:'20',
        inCart:'0'
    },
    {
        name:'floradress',
        tag:'florad',
        price:'80',
        inCart:'0'
    },
    {
        name:'reddotdress',
        tag:'reddot',
        price:'80',
        inCart:'0'
    },
    {
        name:'camodownvest',
        tag:'camo',
        price:'325',
        inCart:'0'
    },
    {
        name:'floratshirt',
        tag:'tshirt',
        price:'20',
        inCart:'0'
    },
    {
        name:'blackwhitelong',
        tag:'sleeve',
        price:'25',
        inCart:'0'
    },
    {
        name:'pinktshirt',
        tag:'pink',
        price:'25',
        inCart:'0'
    }
]

for(let i =0;i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }  
}

function cartNumbers(product){
    console.log("The product click", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers=parseInt(productNumbers);
    if(productNumbers){
    
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers +1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,[product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
           [product.tag]:product
    }
}
localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}
function totalCost(product){
// console.log("the product price is " , product.price);
let cartCost = localStorage.getItem('totalCost');

if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    console.log(product.price + cartCost);
}else{
    localStorage.setItem("totalCost", product.price);
}

}
onLoadCartNumbers();