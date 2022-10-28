let arrayItemList = [];
arrayItemList[0] = "";
let taskList = document.getElementById("taskList");



//Função do botão
function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array
    arrayItemList.push(x);


    localStorage.setItem("ALISTA", arrayItemList);

    // Executa o print na tela
    for (let i = 0; i < arrayItemList.length; i++)
    {
        taskList.innerHTML = arrayItemList.join("<li>") + "</li>" + "<br>";
    }

}





