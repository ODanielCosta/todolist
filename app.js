let arrayItemList = [];

function getTaskInput ()
{
    let x = document.getElementById("taskInput").value;
    arrayItemList.push(x);

    for (let i = 0; i < arrayItemList.length; i++)
    {
        list = arrayItemList[i] + "<br>";
    }
    document.getElementById("taskList").innerHTML = list;
}

