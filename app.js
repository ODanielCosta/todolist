//let arrayItemList = [];

let segundaItemList = [];
let tercaItemList = [];
let quartaItemList = [];
let quintaItemList = [];
let sextaItemList = [];
let sabadoItemList = [];
let domingoItemList = [];

let semana = document.getElementById("semana");
let segunda = document.getElementById("segunda");
let terca = document.getElementById("terca");
let quarta = document.getElementById("quarta");
let quinta = document.getElementById("quinta");
let sexta = document.getElementById("sexta");
let sabado = document.getElementById("sabado");
let domingo = document.getElementById("domingo");

let diaDaSemana = null;

let taskList1 = document.getElementById("taskList1");
let taskList2 = document.getElementById("taskList2");
let itemInList = document.getElementsByClassName("item");
let taskInput = document.getElementById('taskInput');


//CLOSE WINDOW
window.onbeforeunload = saveState;
function saveState ()
{
    //  arrayItemList = localStorage.setItem("ALISTA", arrayItemList, JSON.stringify());

    segundaItemList = localStorage.setItem("SEGUNDA", segundaItemList);
    tercaItemList = localStorage.setItem("TERCA", tercaItemList);
    quartaItemList = localStorage.setItem("QUARTA", quartaItemList);
    quintaItemList = localStorage.setItem("QUINTA", quintaItemList);
    sextaItemList = localStorage.setItem("SEXTA", sextaItemList);
    sabadoItemList = localStorage.setItem("SABADO", sabadoItemList);
    domingoItemList = localStorage.setItem("DOMINGO", domingoItemList);

}

//OPEN WINDOW
window.onload = loadState;
function loadState ()
{
    // arrayItemList = localStorage.getItem("ALISTA").split(',');

    segundaItemList = localStorage.getItem("SEGUNDA").split(',');
    tercaItemList = localStorage.getItem("TERCA").split(',');
    quartaItemList = localStorage.getItem("QUARTA").split(',');
    quintaItemList = localStorage.getItem("QUINTA").split(',');
    sextaItemList = localStorage.getItem("SEXTA").split(',');
    sabadoItemList = localStorage.getItem("SABADO").split(',');
    domingoItemList = localStorage.getItem("DOMINGO").split(',');


    //CORRIGIR LI VAZIA

    function correctList (currentArray, currentKey, list)
    {
        if (currentArray[0] === '' || currentArray.length == 0)
        {
            localStorage.clear(currentKey);
            currentArray = [];
            list.replaceChildren();
        }
    }

    correctList(segundaItemList, "SEGUNDA", taskList1);
    correctList(tercaItemList, "TERCA", taskList2);
    correctList(quartaItemList, "QUARTA", taskList3);
    correctList(quintaItemList, "QUINTA", taskList4);
    correctList(sextaItemList, "SEXTA", taskList5);
    correctList(sabadoItemList, "SABADO", taskList6);
    correctList(domingoItemList, "DOMINGO", taskList7);

    refresh();


}





//BUSCA DIA DA SEMANA
function semanaSelector ()
{
    diaDaSemana = semana.value;
}





function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = document.getElementById("taskInput").value;
    // Coloca o que estava no input dentro da array

    //arrayItemList.push(x);

    switch (diaDaSemana)
    {
        case 'segunda':
            segundaItemList.push(x);
            createItem(taskList1, segundaItemList);
            localStorage.setItem("SEGUNDA", segundaItemList);
            break;

        case 'terca':
            tercaItemList.push(x);
            createItem(taskList2, tercaItemList);
            localStorage.setItem("TERCA", tercaItemList);
            break;

        case 'quarta':
            quartaItemList.push(x);
            createItem(taskList3, quartaItemList);
            localStorage.setItem("QUARTA", quartaItemList);
            break;

        case 'quinta':
            quintaItemList.push(x);
            createItem(taskList4, quintaItemList);
            localStorage.setItem("QUINTA", quintaItemList);
            break;

        case 'sexta':
            sextaItemList.push(x);
            createItem(taskList5, sextaItemList);
            localStorage.setItem("SEXTA", sextaItemList);
            break;

        case 'sabado':
            sabadoItemList.push(x);
            createItem(taskList6, sabadoItemList);
            localStorage.setItem("SABADO", sabadoItemList);
            break;

        case 'domingo':
            domingoItemList.push(x);
            createItem(taskList7, domingoItemList);
            localStorage.setItem("DOMINGO", domingoItemList);
            break;

    }

    //localStorage.setItem("ALISTA", arrayItemList);





    function createItem (y, z)
    {
        let newItem = document.createElement('li');
        newItem.textContent = x;
        newItem.setAttribute('class', `item`);
        y.appendChild(newItem);

        let eraseBtn = document.createElement('button');
        eraseBtn.textContent = 'Clear';
        eraseBtn.setAttribute('class', 'eraser');
        eraseBtn.setAttribute('onclick', `erase()`);
        newItem.appendChild(eraseBtn);

        for (i = 0; i < z.length; i++)
        {
            eraseBtn.setAttribute('onclick', `erase(${i})`);
        }
    }


    /*
        let newItem = document.createElement('li');
        newItem.textContent = x;
        newItem.setAttribute('class', `item`);
        taskList1.appendChild(newItem);
    
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
    */
}




//PRINT NA TELA
function refresh ()
{

    function semanaRefresh (currentArray, list)
    {

        currentArray.forEach(function (item)
        {
            list.replaceChildren();

            for (i = 0; i < currentArray.length; i++)
            {
                let li = document.createElement('li');
                li.textContent = currentArray[i];
                li.setAttribute('class', `item a${[i]}`);
                list.appendChild(li);

                let eraseBtn = document.createElement('button');
                eraseBtn.textContent = 'Clear';
                eraseBtn.setAttribute('class', 'eraser');
                eraseBtn.setAttribute('onclick', `erase(${i})`);
                li.appendChild(eraseBtn);
            }

        });

    }

    semanaRefresh(segundaItemList, taskList1);
    semanaRefresh(tercaItemList, taskList2);
    semanaRefresh(quartaItemList, taskList3);
    semanaRefresh(quintaItemList, taskList4);
    semanaRefresh(sextaItemList, taskList5);
    semanaRefresh(sabadoItemList, taskList6);
    semanaRefresh(domingoItemList, taskList7);

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
        taskList1.innerHTML = null;
    }
}




function clearItems ()
{
    //arrayItemList = [];

    segundaItemList = [];
    tercaItemList = [];
    quartaItemList = [];
    quintaItemList = [];
    sextaItemList = [];
    sabadoItemList = [];
    domingoItemList = [];

    taskList1.innerHTML = null;
    taskList2.innerHTML = null;
    taskList3.innerHTML = null;
    taskList4.innerHTML = null;
    taskList5.innerHTML = null;
    taskList6.innerHTML = null;
    taskList7.innerHTML = null;

    localStorage.clear("SEGUNDA");
    localStorage.clear("TERCA");
    localStorage.clear("QUARTA");
    localStorage.clear("QUINTA");
    localStorage.clear("SEXTA");
    localStorage.clear("SABADO");
    localStorage.clear("DOMINGO");
}



//CLICK KEYS
taskInput.addEventListener('keydown', function (e)
{
    if (e.key === "Enter")
    {
        getTaskInput();
        e.preventDefault();
        taskInput.value = '';
    }

});













