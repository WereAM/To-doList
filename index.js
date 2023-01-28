let addBtn = document.getElementById("add");
let listItems = document.getElementById("listItems");
let inputValue = document.getElementById("addItem"); 

//Add a new item
addBtn.addEventListener('click', function(){
    var list = document.createElement("li");
    list.innerText = inputValue.value;
    listItems.appendChild(list);
    if(!inputValue){
        alert('Enter an item');
    }
    else{
        document.getElementById('listItems').appendChild(list);
    }
    inputValue.value="";
})
