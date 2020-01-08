const postBtnEl = document.getElementById("postButton");
const password = document.getElementById("password");
const userName = document.getElementById("userName");
const loginSubmit = document.getElementById("login-submit");
 const title = document.getElementById("blog-title");
 const content = document.getElementById("blog-content");
 const pic = document.getElementById("blog-pic");
   loginSubmit.addEventListener("click",function(){
     console.log(password.value);
     console.log(userName.value);
   })
   postBtnEl.addEventListener("click",function(){
     console.log(title.value);
     console.log(content.value);
     console.log(pic.value);
   })

