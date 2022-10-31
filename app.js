let arrayItemList = [];
let taskList = document.getElementById("taskList");
let itemInList = document.getElementsByClassName("item");

//SLIT divide as palavras e transforma em array
let savedList = localStorage.getItem("ALISTA").split(',');
arrayItemList.push(savedList);


//PRINT NA TELA
function refresh ()
{

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
            eraseBtn.setAttribute('onclick', `erase(${i})`);
            li.appendChild(eraseBtn);
        }

    });



}

refresh();



//BUTTON FUNCTIONS

function erase (arrayN)
{
    let erased = savedList.splice(arrayN, 1);
    console.log(erased);

    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    refresh();

    if (arrayItemList < 1)
    {
        localStorage.clear("ALISTA", arrayItemList);
        taskList.innerHTML = null;

    }
}



function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array
    arrayItemList.push(x);

    localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    //taskList.insertAdjacentHTML("beforeEnd", `<li class=item>${x}</li>`);



    let newItem = document.createElement('li');
    newItem.textContent = x;
    newItem.setAttribute('class', `item`);
    taskList.appendChild(newItem);

    let eraseBtn = document.createElement('button');
    eraseBtn.textContent = 'Clear';
    eraseBtn.setAttribute('class', 'eraser');
    eraseBtn.setAttribute('onclick', `erase`);
    newItem.appendChild(eraseBtn);

}


function clearItems ()
{

    arrayItemList = [];

    taskList.innerHTML = null;

    localStorage.clear("ALISTA");
}














