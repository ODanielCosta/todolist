//let arrayItemList = [];

let segundaItemList = [];
let tercaItemList = [];
let quartaItemList = [];
let quintaItemList = [];
let sextaItemList = [];
let sabadoItemList = [];
let domingoItemList = [];

let diaDaSemana = null;

let hitBox = document.querySelectorAll(".semana h2");

let taskInput1 = document.getElementById("taskInput1");

let taskList1 = document.getElementById("taskList1");
let taskList2 = document.getElementById("taskList2");
let taskList3 = document.getElementById("taskList3");
let taskList4 = document.getElementById("taskList4");
let taskList5 = document.getElementById("taskList5");
let taskList6 = document.getElementById("taskList6");
let taskList7 = document.getElementById("taskList7");

let itemInList = document.getElementsByClassName("item");
let taskInput = document.getElementById('taskInput');

let itemZero = document.getElementsByClassName("a0");


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


/////////////////////////////////////////////////////


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


    refresh();


    //CORRIGIR LI VAZIA
    function correctList (currentArray, currentKey, list)
    {
        if (currentArray[0] === '' || currentArray.length == 0)
        {
            localStorage.clear(currentKey);
            currentArray.shift();
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

}



//BUSCA DIA DA SEMANA
/*function semanaSelector ()
{
    diaDaSemana = semana.value;
}
*/

/*
segundaBox[0].addEventListener("click",function(){

    let newInput= document.createElement('input');
    newInput.setAttribute("type","text");
    newInput.setAttribute("id","taskInput");
    newInput.setAttribute("placeholder","Enter your task");
    taskList1.appendChild(newInput);

});*/



hitBox[0].addEventListener("click", () => showInput(taskInput1, "segunda"));
hitBox[1].addEventListener("click", () => showInput(taskInput2, "terca"));
hitBox[2].addEventListener("click", () => showInput(taskInput3, "quarta"));
hitBox[3].addEventListener("click", () => showInput(taskInput4, "quinta"));
hitBox[4].addEventListener("click", () => showInput(taskInput5, "sexta"));
hitBox[5].addEventListener("click", () => showInput(taskInput6, "sabado"));
hitBox[6].addEventListener("click", () => showInput(taskInput7, "domingo"));



function showInput (currentInput, currentDia)
{

    currentInput.style.display = "block";

    currentInput.focus();

    inputClick(currentInput);

    diaDaSemana = currentDia;

    return taskInput;


};




//CLICK KEYS

function inputClick (currentInput)
{

    currentInput.addEventListener("keypress", function (event)
    {

        if (event.key === "Enter")
        {
            getTaskInput();
            event.preventDefault();
            currentInput.value = '';
            currentInput.style.display = "none";
        }

    });

}








function getTaskInput ()
{
    //Vai buscar valor do input e mete em "x"
    let x = '';


    switch (diaDaSemana)
    {
        case 'segunda':
            x = taskInput1.value;
            segundaItemList.push(x);
            segundaItemList = segundaItemList.filter(Boolean);//AQUIIIIIIIIIIII
            createItem(taskList1, segundaItemList, 'List1');
            localStorage.setItem("SEGUNDA", segundaItemList);
            break;

        case 'terca':
            x = taskInput2.value;
            tercaItemList.push(x);
            createItem(taskList2, tercaItemList, 'List2');
            localStorage.setItem("TERCA", tercaItemList);
            break;

        case 'quarta':
            x = taskInput3.value;
            quartaItemList.push(x);
            createItem(taskList3, quartaItemList, 'List3');
            localStorage.setItem("QUARTA", quartaItemList);
            break;

        case 'quinta':
            x = taskInput4.value;
            quintaItemList.push(x);
            createItem(taskList4, quintaItemList, 'List4');
            localStorage.setItem("QUINTA", quintaItemList);
            break;

        case 'sexta':
            x = taskInput5.value;
            sextaItemList.push(x);
            createItem(taskList5, sextaItemList, 'List5');
            localStorage.setItem("SEXTA", sextaItemList);
            break;

        case 'sabado':
            x = taskInput6.value;
            sabadoItemList.push(x);
            createItem(taskList6, sabadoItemList, 'List6');
            localStorage.setItem("SABADO", sabadoItemList);
            break;

        case 'domingo':
            x = taskInput7.value;
            domingoItemList.push(x);
            createItem(taskList7, domingoItemList, 'List7');
            localStorage.setItem("DOMINGO", domingoItemList);
            break;

    }





    function createItem (y, z, v)
    {



        let newItem = document.createElement('li');
        newItem.textContent = x;
        newItem.setAttribute('class', `item`);
        y.appendChild(newItem);


        let eraseBtn = document.createElement('button');
        eraseBtn.textContent = 'Clear';
        eraseBtn.setAttribute('class', `eraser ${v}`);

        newItem.appendChild(eraseBtn);

        for (i = 0; i < z.length; i++)
        {
            eraseBtn.setAttribute('onclick', `erase(${i})`);
        }

        if (y === taskList1)
        {

            eraseBtn.setAttribute('onclick', `erase1()`);

        } else if (y === taskList2)
        {

            eraseBtn.setAttribute('onclick', `erase2()`);

        } else if (y === taskList3)
        {

            eraseBtn.setAttribute('onclick', `erase3()`);

        } else if (y === taskList4)
        {

            eraseBtn.setAttribute('onclick', `erase4()`);

        } else if (y === taskList5)
        {

            eraseBtn.setAttribute('onclick', `erase5()`);

        } else if (y === taskList6)
        {

            eraseBtn.setAttribute('onclick', `erase6()`);

        } else if (y === taskList7)
        {

            eraseBtn.setAttribute('onclick', `erase7()`);

        }
    }




}




//PRINT NA TELA
function refresh ()
{

    function semanaRefresh (currentArray, list, IdPaste)
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
                eraseBtn.setAttribute('class', `eraser ${IdPaste}`);
                //eraseBtn.setAttribute('onclick', `erase${eraseIdReciver}(${i})`);
                li.appendChild(eraseBtn);

                if (list === taskList1)
                {

                    eraseBtn.setAttribute('onclick', `erase1(${i})`);

                } else if (list === taskList2)
                {

                    eraseBtn.setAttribute('onclick', `erase2(${i})`);

                } else if (list === taskList3)
                {

                    eraseBtn.setAttribute('onclick', `erase3(${i})`);

                } else if (list === taskList4)
                {

                    eraseBtn.setAttribute('onclick', `erase4(${i})`);

                } else if (list === taskList5)
                {

                    eraseBtn.setAttribute('onclick', `erase5(${i})`);

                } else if (list === taskList6)
                {

                    eraseBtn.setAttribute('onclick', `erase6(${i})`);

                } else if (list === taskList7)
                {

                    eraseBtn.setAttribute('onclick', `erase7(${i})`);

                }

            }



        });

    }

    semanaRefresh(segundaItemList, taskList1, 'List1');
    semanaRefresh(tercaItemList, taskList2, 'List2');
    semanaRefresh(quartaItemList, taskList3, 'List3');
    semanaRefresh(quintaItemList, taskList4, 'List4');
    semanaRefresh(sextaItemList, taskList5, 'List5');
    semanaRefresh(sabadoItemList, taskList6, 'List6');
    semanaRefresh(domingoItemList, taskList7, 'List7');


}


//ERASE SECTION

function erase1 (arrayN)
{

    let erased = segundaItemList.splice(arrayN, 1);

    localStorage.setItem("List1", segundaItemList);


    refresh();

    if (segundaItemList < 1)
    {
        localStorage.clear("List1", segundaItemList);
        taskList1.innerHTML = null;
    }
}

function erase2 (arrayN)
{

    let erased = tercaItemList.splice(arrayN, 1);

    localStorage.setItem("List2", tercaItemList);

    refresh();

    if (tercaItemList < 1)
    {
        localStorage.clear("List2", tercaItemList);
        taskList2.innerHTML = null;
    }
}

function erase3 (arrayN)
{

    let erased = quartaItemList.splice(arrayN, 1);

    localStorage.setItem("List3", quartaItemList);

    refresh();

    if (quartaItemList < 1)
    {
        localStorage.clear("List3", quartaItemList);
        taskList3.innerHTML = null;
    }
}


function erase4 (arrayN)
{

    let erased = quintaItemList.splice(arrayN, 1);

    localStorage.setItem("List4", quintaItemList);

    refresh();

    if (quintaItemList < 1)
    {
        localStorage.clear("List4", quintaItemList);
        taskList4.innerHTML = null;
    }
}

function erase5 (arrayN)
{

    let erased = sextaItemList.splice(arrayN, 1);

    localStorage.setItem("List5", sextaItemList);

    refresh();

    if (sextaItemList < 1)
    {
        localStorage.clear("List5", sextaItemList);
        taskList5.innerHTML = null;
    }
}

function erase6 (arrayN)
{

    let erased = sabadoItemList.splice(arrayN, 1);

    localStorage.setItem("List6", sabadoItemList);

    refresh();

    if (sabadoItemList < 1)
    {
        localStorage.clear("List6", sabadoItemList);
        taskList6.innerHTML = null;
    }
}

function erase7 (arrayN)
{

    let erased = domingoItemList.splice(arrayN, 1);

    localStorage.setItem("List7", domingoItemList);

    refresh();

    if (domingoItemList < 1)
    {
        localStorage.clear("List7", domingoItemList);
        taskList7.innerHTML = null;
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
























