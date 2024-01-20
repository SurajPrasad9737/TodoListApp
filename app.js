let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let del = document.querySelectorAll(".btn");
let countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount=(taskCount)=>{
    countValue.innerText = taskCount;
}

btn.addEventListener("click",function(){
    if(inp.value.trim()==""){
        alert("Input Todo ");
    }
    else{
    let item = document.createElement("li");
    let delBtn = document.createElement("Button");
    item.innerText = inp.value;

    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
}
});

ul.addEventListener("click",function(event){
    
    if(event.target.nodeName == "BUTTON"){
       let listItem =  event.target.parentElement;
       listItem.remove();
       taskCount--;
       countValue.innerText = taskCount;
    }else if(event.target.nodeName == 'LI') { 
        event.target.classList.toggle('red-line');
            taskCount++;
            countValue.innerText = taskCount;
            
    }
    
});

