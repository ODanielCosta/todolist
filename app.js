let arrayItemList = [];
let taskList = document.getElementById("taskList");
let itemInList = document.getElementsByClassName("itemInList");

//SLIT divide as palavras e transforma em array
let savedList = localStorage.getItem("ALISTA").split(',');
arrayItemList.push(savedList);

//MAP dá para passar uma função que deixa alterar cada um dos item da array
//JOIN retira as virgulas
let currentList = savedList.map(item => `<li class=item>${item}</li>`).join('');

taskList.innerHTML = currentList;


//Função do botão
function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array
    arrayItemList.push(x);

    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());
 
    taskList.insertAdjacentHTML("beforeEnd",`<li class=item>${x}</li>`);


}


function clearItems(){

    localStorage.clear("ALISTA");
    savedList = null;   
    taskList.innerHTML = null;
}














