const produtos = [
    document.getElementById("teclado"),
    document.getElementById("moldem"),
    document.getElementById("impressora"),
    document.getElementById("mouse"),
    document.getElementById("cpu"),
    document.getElementById("pendrive"),
    document.getElementById("cartao"),
    document.getElementById("hd"),
    document.getElementById("fone"),
    document.getElementById("webcam")
]
const input = document.getElementById("search")
const btn_search = document.getElementById("btn-search")

btn_search.addEventListener("click",()=> aparecerProduto())

const aparecerProduto = ()=>{
    produtos.forEach(elemento =>{
        if(elemento.id === input.value){
            elemento.classList.add("on")
            return
        }
        elemento.classList.remove("on")
    })
}

input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.key === "Enter") {
        aparecerProduto()
    }
  });