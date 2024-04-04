const main = document.querySelector(".center");
const submit = document.querySelector(".submit");
const input = document.querySelector(".input");

const newTask = document.createElement("div");
const btn = document.createElement("input");
const task = document.createElement("h2");
const dlt = document.createElement("button");

btn.type = "checkbox";
dlt.type = "submit";

dlt.innerText = "🗑";
dlt.style.fontWeight = 'bold';
task.style.display = "inline";
btn.style.margin = "20px";
task.style.marginRight = "20px";
newTask.appendChild(dlt);
newTask.appendChild(btn);
newTask.appendChild(task);
dlt.setAttribute("class", "dlt");
btn.setAttribute("class", "btn");

submit.addEventListener("click", (e) => {
  if(input.value === ""){
    alert("Enter task first!!");
    return;
  }
  task.innerHTML = input.value;
  input.value = "";
  const p = newTask.cloneNode(true);
  main.appendChild(p);
  console.log(p);
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('dlt')) {
      e.target.parentNode.remove();
    }
  });


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        if (e.target.checked == true){
            e.target.parentNode.children[2].style.textDecoration = "line-through";
          } else {
            e.target.parentNode.children[2].style.textDecoration = "";
          }
    }
  });