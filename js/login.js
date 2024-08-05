let username=document.querySelector("#username")
let password=document.querySelector("#password")
let loginBtn=document.querySelector("#sign_in")

let getusername=localStorage.getItem("username")
let getpassword=localStorage.getItem("password")

loginBtn.addEventListener("click",function(e){
   e.preventDefault()
   if(username.value===""||password.value===""){
    alert("please,fill the  data")
   }
   else{
   if(getusername&&getusername.trim()===username.value&& getpassword&&getpassword.trim()===password.value){
         setTimeout(() => {
             window.location="index.html"
         }, 1500);
   }
   else{
    alert("enter user name or password correctly")
   }
   }
},1000)