
let ctr=0;
function updateToInprogress(index){
    let state = "Inprogress";
    console.log("Updating to in Progress called for"+index)  
    const element = document.getElementById(index)
    console.log(element)
    element.setAttribute("state", state)
    document.querySelector(".inprogress").appendChild(element);

}



function addTodo() {
    
let state = "start";
const inputElement= document.querySelector("input");
const value=inputElement.value;
console.log(value);

const newDivElement = document.createElement("div");
newDivElement.setAttribute("id", ctr);
newDivElement.innerHTML= value +"   <button onclick=updateToInprogress("+ctr+")>"+state+"</button>"
 ctr = ctr + 1;
 
document.querySelector(".todo").appendChild(newDivElement)
}
