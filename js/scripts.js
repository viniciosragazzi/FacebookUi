let register = document.getElementById("register")
let login = document.getElementById("login")
document.getElementById("criar").addEventListener("click", function(){
    register.classList.remove('opcd')
    login.classList.add('opcd')
    setTimeout(function(){
        login.style.display = "none";
        register.style.display = "block";
    },400)
})
document.getElementById("entrar").addEventListener("click", function(){
        login.classList.remove('opcd')   
        register.classList.add('opcd')
       
    setTimeout(function(){
        register.style.display = "none";
        login.style.display = "block";
    },400)
})