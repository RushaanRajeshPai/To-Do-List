const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value === ''){                             //if no task is entered
        alert("You need to enter some task");       
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);                     //task is displayed
        let cross = document.createElement("cross");       //cross mark
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                          //when the user clicks on the written task
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "CROSS"){                  //when the user clicks on the cross button
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//To save the data i.e the tasks
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();