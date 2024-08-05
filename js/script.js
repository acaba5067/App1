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
    userinfo.style.display="block"
    userData.innerHTML=localStorage.getItem("username")
}