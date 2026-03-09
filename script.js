document.getElementById("btnMenu")
.addEventListener("click", function(){
  document.querySelector(".social").classList.toggle("show");
});
const btn = document.getElementById("btnMenu");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
console.log("Portfólio Wilton carregado");