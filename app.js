let arrayItemList = [];
let taskList = document.getElementById("taskList");
let itemInList = document.getElementsByClassName("itemInList");
let currentList = localStorage.getItem("ALISTA");
arrayItemList = [currentList];




function printLi(){
    // Executa o print na tela
for (let i = 0; i < arrayItemList.length; i++)
{
    taskList.innerHTML = arrayItemList.join("<li class=itemInList>") + "</li>" + "<br>";
}
}


//Função do botão
function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array
    arrayItemList.push(x);


    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    printLi();
}

function clearItems(){
    localStorage.clear("ALISTA");
    //Nao funciona
    //Transformar array localstorage em lista primeiro
    itemInList.remove();
}

printLi();












