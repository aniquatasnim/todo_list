
let ctr=0;
function deleteTodo(index){
    console.log("executing delete for index"+index)
    alert("Are you sure , you want to  delete it?");
    const deleteElement = document.getElementById(index)
    console.log(deleteElement);
    document.querySelector(".todo").removeChild(deleteElement)
    //document.querySelector(".done").appendChild(deleteElement);
    //const button = deleteElement.querySelector("button");
    //button.innerText = "delete"
    //button = button.disabled
    //button.onclick=document.querySelector(".done").removeChild(deleteElement);
    
}
function addTodo() {
    
const inputElement= document.querySelector("input");
const value=inputElement.value;
console.log(value);
 if (!value){
    alert("Please add a task");
    return;
 }
const newDivElement = document.createElement("li");
newDivElement.setAttribute("id", ctr);
newDivElement.innerHTML= value+" <button id='button' onclick= deleteTodo("+ctr+")>Done</button>"
 ctr = ctr + 1;
document.querySelector(".todo").appendChild(newDivElement)
}
