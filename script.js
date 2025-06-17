const tarefa = document.getElementById("tarefa")
const form = document.getElementById("fa")
const butao = document.getElementById("butao")
let count = 0


function load(){
    while(localStorage.getItem("tar" + count) != null){
        addFromLoad(localStorage.getItem("tar" + count), count)
        count++
    }
}

function add(){
    const texto = document.getElementById("entrada").value
    const novo = document.createElement("div")
    novo.id= "tar" + count
    count++
    const a = document.createElement("a")
    a.innerText = texto
    const ex = document.createElement("button")
    ex.innerText = "Excluir"
    novo.appendChild(a)
    novo.appendChild(ex)
    tarefa.appendChild(novo)
    localStorage.setItem(novo.id, texto)
}

function addFromLoad(texto, vid){
    const novo = document.createElement("div")
    novo.id= "tar" + vid
    const a = document.createElement("a")
    a.innerText = texto
    const ex = document.createElement("button")
    ex.innerText = "Excluir"
    novo.appendChild(a)
    novo.appendChild(ex)
    tarefa.appendChild(novo)
}




butao.addEventListener("click", add)

tarefa.addEventListener("click", function (e){
    const s = String(e.target.parentElement.id)
    localStorage.removeItem(s)
    e.target.parentElement.remove()

    vId = parseInt(s.replace("tar" , ""))
    for (let index = vId + 1; index < count; index++) {
        const elem = document.getElementById("tar" + index)

        const texto = localStorage.getItem("tar" + index)
        localStorage.removeItem("tar" + index)
        elem.remove()

        localStorage.setItem("tar" + (index - 1), texto)
        addFromLoad(texto, index - 1)
    }
    
})


window.onload = load;