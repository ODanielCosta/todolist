let arrayItemList = [];
let taskList = document.getElementById("taskList");
let itemInList = document.getElementsByClassName("item");
let taskInput = document.getElementById('taskInput');

//CLOSE WINDOW
window.onbeforeunload = saveState;
function saveState ()
{
    arrayItemList = localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());
}

//OPEN WINDOW
window.onload = loadState;
function loadState ()
{
    arrayItemList = localStorage.getItem("ALISTA").split(',');
    refresh();
    //CORRIGIR LI VAZIA
    if (arrayItemList[0] === '' || arrayItemList.length == 0)
    {
        localStorage.clear("ALISTA");
        arrayItemList = [];
        taskList.replaceChildren();
    }
}



function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array
    arrayItemList.push(x);

    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    let newItem = document.createElement('li');
    newItem.textContent = x;
    newItem.setAttribute('class', `item`);
    taskList.appendChild(newItem);

    let eraseBtn = document.createElement('button');
    eraseBtn.textContent = 'Clear';
    eraseBtn.setAttribute('class', 'eraser');
    eraseBtn.setAttribute('onclick', `erase()`);
    newItem.appendChild(eraseBtn);
    //IDENTIFICA NOVA LI
    for (i = 0; i < arrayItemList.length; i++)
    {
        eraseBtn.setAttribute('onclick', `erase(${i})`);
    }

}




//PRINT NA TELA
function refresh ()
{

    arrayItemList.forEach(function (item)
    {
        taskList.innerHTML = "";

        for (i = 0; i < arrayItemList.length; i++)
        {
            let li = document.createElement('li');
            li.textContent = arrayItemList[i];
            li.setAttribute('class', `item a${[i]}`);
            taskList.appendChild(li);

            let eraseBtn = document.createElement('button');
            eraseBtn.textContent = 'Clear';
            eraseBtn.setAttribute('class', 'eraser');
            eraseBtn.setAttribute('onclick', `erase(${i})`);
            li.appendChild(eraseBtn);
        }

    });

}



function erase (arrayN)
{
    let erased = arrayItemList.splice(arrayN, 1);
    console.log(erased);

    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    refresh();

    if (arrayItemList < 1)
    {
        localStorage.clear("ALISTA", arrayItemList);
        taskList.innerHTML = null;
    }
}




function clearItems ()
{

    arrayItemList = [];

    taskList.innerHTML = null;

    localStorage.clear("ALISTA");
}



//CLICK ENTER
taskInput.addEventListener('keypress', function (e)
{
    if (e.key === "Enter")
    {
        getTaskInput();
        e.preventDefault();
        taskInput.value = '';
    }
});













