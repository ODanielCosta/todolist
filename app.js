let arrayItemList = [];
let taskList = document.getElementById("taskList");
let itemInList = document.getElementsByClassName("item");

//SLIT divide as palavras e transforma em array
let savedList = localStorage.getItem("ALISTA").split(',');
arrayItemList.push(savedList);


//PRINT NA TELA
savedList.forEach(function (item)
{
    taskList.innerHTML = "";

    for (i = 0; i < savedList.length; i++)
    {
        let li = document.createElement('li');
        li.textContent = savedList[i];
        li.setAttribute('class', `item a${[i]}`);
        taskList.appendChild(li);

        let eraseBtn = document.createElement('button');
        eraseBtn.textContent = 'Clear';
        eraseBtn.setAttribute('class', 'eraser');
        eraseBtn.setAttribute('onclick', 'erase');
        li.appendChild(eraseBtn);
    }

});



//BUTTON FUNCTIONS

function erase ()
{

}



function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array
    arrayItemList.push(x);

    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    taskList.insertAdjacentHTML("beforeEnd", `<li class=item>${x}</li>`);

}


function clearItems ()
{

    arrayItemList = [];

    taskList.innerHTML = null;

    localStorage.clear("ALISTA");
}














