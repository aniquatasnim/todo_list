
let ctr=0;
function deleteTodo(index){
    console.log("executing delete for index"+index)
    
    const deleteElement = document.getElementById(index)
    console.log(deleteElement);
    document.querySelector(".todo").removeChild(deleteElement)
    

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
newDivElement.innerHTML= value+"  <button onclick= deleteTodo("+ctr+")>Delete</button>"
 ctr = ctr + 1;
document.querySelector(".todo").appendChild(newDivElement)
}
