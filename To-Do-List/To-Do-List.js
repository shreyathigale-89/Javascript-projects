
//localStorage.tasks =JSON.stringify([]);
updateList(); //Json.stringify method coverts  array to string 

function addEvent()
{   // take input from input box
    let input = document.getElementById("Task_input");

    //take tasks from LocalStorage and store task (array)
    let tasksArr = JSON.parse(localStorage.tasks);  //Json.stringify method coverts string to Array.
    //push(new element) into array
    tasksArr.push(input.value);

    //update that array to local storage
    localStorage.tasks = JSON.stringify(tasksArr);

    //empty the input box
    input.value = "";

    // Update list
    updateList();

} 

function updateList()  // for updating list 
{
    //get reference ul(tasks)

    let ul = document.getElementById("tasks");

    //get tasks from localstorage

    let tasksArr = JSON.parse(localStorage.tasks);
    let length = tasksArr.length - 1;
    let list = "";

    for(  i = length ; i >= 0 ; i-- )
    {
        list += '<li class="list-group-item" id = " ' + i + ' " >' + tasksArr[i] + ' <span  onclick = "removeItem()" > x </span></li>';
    }
    ul.innerHTML = list;   
    
}

function removeItem(item)  // to remove object from list
{
   // let index_id = item.parentElement.id;

    //get array tasks
    let tasksArr = JSON.parse(localStorage.tasks);

    //update tasks array 
    tasksArr.splice(i,1);  // Array.splice function use to remove array items

    // update localstorage new array 

    localStorage.tasks = JSON.stringify(tasksArr); // Json.stringify method coverts  array to string 

    updateList();
}
// to show today's date 
function displayDate()
{
 document.getElementById("date").innerHTML = Date();
}

