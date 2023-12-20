const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
};

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed-task");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveTask();
    }
    

}, false);

function saveTask(){
    localStorage.setItem("task",list.innerHTML);

}
function showTask(){
    list.innerHTML = localStorage.getItem("task");
}
showTask();
