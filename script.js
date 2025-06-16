const tarefa = document.getElementById("tarefa")
const form = document.getElementById("fa")
const butao = document.getElementById("butao")


function add(){
    const texto = document.getElementById("entrada").value
    const novo = document.createElement("div")
    const a = document.createElement("a")
    a.innerText = texto
    const ex = document.createElement("button")
    ex.innerText = "Excluir"
    novo.appendChild(a)
    novo.appendChild(ex)
    tarefa.appendChild(novo)
    localStorage.setItem("aqui", novo)
}


while(localStorage.getItem("aqui") != null){
    tarefa.appendChild(localStorage.getItem("aqui"))
    localStorage.removeItem("aqui")
}

butao.addEventListener("click", add)

tarefa.addEventListener("click", function (e){
    e.target.parentElement.remove()
})


