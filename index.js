let addBtn = document.getElementById("add");
let listItems = document.getElementById("listItems");
let inputValue = document.getElementById("addItem"); 

//Add a new item
addBtn.addEventListener('click', function(){
    var list = document.createElement("li");
    list.innerText = inputValue.value;
    listItems.appendChild(list);
    if(!inputValue.innerText){
        alert('Enter an item');
    }
    else{
        document.getElementById('listItems').appendChild(list);
    }
    inputValue.value="";

    // To mark items as done
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
    }) 
    list.addEventListener('dblclick', function(){
        list.style.textDecoration = "none";
    })

    // Create a delete button 
    var myList = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(txt);
    myList[i].appendChild(span);
    }

    // Create an edit button 
    var myList = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u270E");
    span.className = "edit";
    span.appendChild(txt);
    myList[i].appendChild(span);
    }

    // To delete an item
    var remove = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // To edit an item
    var edit = document.getElementsByClassName("edit");
    edit.addEventListener("click", function(){
        if (edit == txt) {
            list.focus();
            edit.innerText = "Save";
        } else {
            edit.innerText = txt;
        }
    })
    // var i;
    // for (i = 0; i < edit.length; i++) {
    //     if (edit == "\u270E") {
    //         edit[i].onclick = function(){
    //             list.focus();
    //             edit.innerText = "Save";
    //         }
    //     } else {
    //         edit.innerText = "d\u270E";
    //     }
        
    // }
})

