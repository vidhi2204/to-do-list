const input  = document.getElementById('inp');
let tasks = document.getElementById('tasks')

function addtask(){
    if(input.value === ''){
        alert("please enter task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        tasks.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       
    }
    input.value= '';
    store();
}

tasks.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        store();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        store();
    }
})

function store(){
    localStorage.setItem('task',tasks.innerHTML);
}
function show(){
    tasks.innerHTML = localStorage.getItem('task');
}
show();