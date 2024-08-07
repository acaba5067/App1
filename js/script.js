// localStorage.setItem("firstcar","BM")
// console.log(localStorage.getItem("firstcar"))
// localStorage.setItem("stu1","Ahmed")
// console.log(localStorage.getItem("stu1"))
// localStorage.setItem("student1","abdelrhamn")
// localStorage.removeItem("student1")
// localStorage.setItem("st6","bassant")
// localStorage.setItem("st7","aya")
// localStorage.clear()

// ////////////////////////////////////////////////////////////
let userinfo=document.querySelector("#user_info")
let userData=document.querySelector("#user")
let links=document.querySelector("#links")
if(localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="flex"
    userData.innerHTML=localStorage.getItem("username")
}
let logOutBtn=document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1500)
})
/////////////////////////////////////////////////////////////////////////////////
let allProducts=document.querySelector(".products")
let products=[
{
    id:1,
    title:"OPPO reno 7",
    color:"black",
    imageUrl:"images/Images/oppo reno 7.jpg"
},

{
    id:2,
    title:"Iphone 13",
    color:"red",
    imageUrl:"images/Images/IPhone-13.jpg"
},


{
    id:3,
    title:"Golden Watch32",
    color:"blue",
    imageUrl:"images/Images/w32.jpg"
},



{
    id:4,
    title:"Car",
    color:"grey",
    imageUrl:"images/Images/car19.jpg"
},
]

function drawItems(){
    let y=products.map((item)=>{
        return `
            <div class="product_item">
                <img class="product_item_img"src="${item.imageUrl}" alt="">
                <div class="product_item_desc">
                    <h2>${item.title}</h2>
                    <p>the new mobile from oppo company 6-2022</p>
                    <span>${item.color}</span>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
                    <i class="far fa-heart fav"></i>
                </div>
            </div> 
            `
    })
    allProducts.innerHTML=y
}
drawItems()
//let count=1
let badge=document.querySelector(".badge")
let cartproductsDiv=document.querySelector(".carts_products div")
//let addedItem = [];
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartproductsDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

    if(localStorage.getItem=("username"))
    {
        function addToCart(id)
        {
            let choosenItem=products.find((item)=>item.id===id);
            cartproductsDiv.innerHTML+=`<p>${choosenItem.title}</p>`


            addedItem=[...addedItem,choosenItem]
            localStorage.setItem("productsInCart", JSON.stringify(addedItem))

            let cartProductsLength=document.querySelectorAll(".carts_products div p")
           // console.log(cartProductsLength.length)
            badge.style.display="block"
            badge.innerHTML=cartProductsLength.length
            // badge.style.display="block" 
            // badge.innerHTML=`<p>${count++}</p>`
        }
        
    }
    else{
        window.location="login.html"
    }

////////////////////////////////////////////////////////////////////////////
let shoppingCartIcon=document.querySelector(".shopping_cart")
let cartsProducts=document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click",opencart)
function opencart(){
    if(cartproductsDiv.innerHTML !==" "){
     if(cartsProducts.style.display=="block"){
        cartsProducts.style.display="none"
     }
     else{
        cartsProducts.style.display="block"
     }
    }
}

////////////////////////////////////////////////////////////////////////////

