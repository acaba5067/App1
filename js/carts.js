let prodcutsInCart=localStorage.getItem("productsInCart")
let allProducts=document.querySelector(".products")

if(prodcutsInCart){
    let item=JSON.parse(prodcutsInCart);
    drawCartProducts(item)
}
function drawCartProducts(products){
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
                    <button class="add_to_cart" onClick="removefromcart(${item.id})">Remove from Card</button>
                </div>
            </div> 
            `
})
allProducts.innerHTML=y
}
let cartproductsDiv=localStorage.getItem("cartproductsDiv")
let badge=localStorage.getItem("badge")
let count=badge
let cartProductsLength=document.querySelectorAll(".carts_products div p")

function removefromcart(item)
{
    if(cartproductsDiv !==" ")       
    {
      count--;
       let final=localStorage.setItem("badge",count)

    }
}
      

    

