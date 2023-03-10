let addBtn = document.getElementById("add");
let listItems = document.getElementById("listItems");
let inputValue = document.getElementById("addItem"); 
let errorMsg = document.getElementById("error");

function toDo(){

    document.addEventListener('DOMContentLoaded', displayTodos)

    // Add a new item
    addBtn.addEventListener('click', function(){
        const listContainer = document.createElement("div");
        var listItem = document.createElement("li");
        listItem.addEventListener('click', markFxn);
        listItem.addEventListener('dblclick', unmarkFxn);
        listContainer.id = Math.floor(Math.random()*100);
        if(!inputValue.value){
            errorMsg.textContent = "Enter an item"
            // alert('Enter an item');
        } else {
            errorMsg.textContent='';
            // Save to local
            saveLocal(inputValue.value);
            //Create edit button
            const edit = document.createElement("edit");
            const text = document.createTextNode("\u270E");
            edit.className = "edit";
            edit.addEventListener('click', editFxn);
            edit.appendChild(text);
    
            // Create delete button
            const del = document.createElement("delete");
            const txt = document.createTextNode("\u00D7");
            del.className = "delete";
            del.addEventListener('click', deleteFxn);
            del.appendChild(txt);
    
            // localStorage.setItem('todo', inputValue.value);
            listItem.innerHTML = inputValue.value;
            listContainer.appendChild(listItem);
            listContainer.appendChild(edit);
            listContainer.appendChild(del);
            listItems.appendChild(listContainer);
        }
        inputValue.value="";
    
    })

    // Enter key to add
    inputValue.addEventListener('keypress', function(e){
        if(e.key === "Enter"){
            addBtn.click();
        }
    })

    // To mark items as done/undone
    function markFxn(e){
        const listItem = e.target;
        listItem.style.textDecoration = "line-through";
    }
    function unmarkFxn(e){
        const listItem = e.target;
        listItem.style.textDecoration = "none";
    }  

    // To delete
    function deleteFxn(event){
        // console.log(event.target);
        const btn = event.target;
        const listContainer = btn.parentElement;
        // const listItem = listContainer.children[0];
        deleteLocal(listContainer);
        listContainer.remove();
    }

    // To edit
    function editFxn(event){
        // console.log(event.target);
        const item = event.target;
        const listContainer = item.parentElement;
        // console.log(itemDiv);
        const list = listContainer.childNodes[0];
        const editInput = document.createElement("input");
        editInput.className = "editInput";
        const newValue = document.createElement("li");
        const saveEdit = document.createElement("button");
        const text = document.createTextNode("\u2713");
        saveEdit.className = "saveEdit";
        saveEdit.addEventListener('click', saveFxn);
        saveEdit.appendChild(text);
        listContainer.appendChild(editInput);
        listContainer.appendChild(saveEdit);

        function saveFxn(){
            if(!editInput.value){
                errorMsg.textContent = "Enter an item";
            }
            else{
                errorMsg.textContent='';
                // editLocal(listContainer);
                // localStorage.setItem('todo', editInput.value);
                newValue.innerHTML = editInput.value;
                listContainer.replaceChild(newValue, list);   
                listContainer.removeChild(editInput);
                listContainer.removeChild(saveEdit); 
                // console.log(newValue);
            }  
        }

        editInput.addEventListener('keypress', function(e){
                if(e.key === "Enter"){
                    saveEdit.click();
                }
        })
    }

    // Save to local storage
    function saveLocal(item){
        let todo;
        if(localStorage.getItem('todo') === null){
            todo = [];
        }else{
            todo = JSON.parse(localStorage.getItem('todo'));
        }

        todo.push(item);
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    // // Edit local storage
    // function editLocal(editInput){
    //     let todo;
    //     if(localStorage.getItem('todo') === null){
    //         todo = [];
    //     }else{
    //         todo = JSON.parse(localStorage.getItem('todo'));
    //     }

    //     const listItem = listContainer.children[0].innerText;
    //     const newValue = editInput.value;
    //     todo.splice(todo.indexOf(listItem), 1, newValue);
    //     localStorage.setItem('todo', JSON.stringify(todo));
    // }

    // Retrieve from local storage
    function displayTodos(){
        let todo;
        if(localStorage.getItem('todo') === null){
            todo = [];
        }else{
            todo = JSON.parse(localStorage.getItem('todo'));
        }

        todo.forEach(function(item){
            const listContainer = document.createElement("div");
            var listItem = document.createElement("li");
            listItem.addEventListener('click', markFxn);
            listItem.addEventListener('dblclick', unmarkFxn);
        
            //Create edit button
            const edit = document.createElement("edit");
            const text = document.createTextNode("\u270E");
            edit.className = "edit";
            edit.addEventListener('click', editFxn);
            edit.appendChild(text);
    
            // Create delete button
            const del = document.createElement("delete");
            const txt = document.createTextNode("\u00D7");
            del.className = "delete";
            del.addEventListener('click', deleteFxn);
            del.appendChild(txt);
    
            listItem.innerHTML = item;
            listContainer.appendChild(listItem);
            listContainer.appendChild(edit);
            listContainer.appendChild(del);
            listItems.appendChild(listContainer);
        })
    }

    // Delete from local storage
    function deleteLocal(listContainer){
        let todo;
        if(localStorage.getItem('todo') === null){
            todo = [];
        }else{
            todo = JSON.parse(localStorage.getItem('todo'));
        }
        
        const listItem = listContainer.children[0].innerText;
        // console.log(item)
        todo.splice(todo.indexOf(listItem), 1);
        localStorage.setItem('todo', JSON.stringify(todo));
    }
}

toDo();


//Add a new item
// addBtn.addEventListener('click', function(){
//     const listContainer = document.createElement("div");
//     const listItem = document.createElement("li");
//     listItem.innerText = inputValue.value;
//     listContainer.id = Math.floor(Math.random()*100);
//     // listContainer.id =  inputValue.value
//     if(!listItem.innerText){
//         alert('Enter an item');
//     } else {
//         //Create edit button
//         var edit = document.createElement("SPAN");
//         var text = document.createTextNode("\u270E");
//         edit.className = "edit";
//         edit.appendChild(text);

//         // Create delete button
//         const span = document.createElement("SPAN");
//         const txt = document.createTextNode("\u00D7");
//         span.className = "delete";
//         // span.click = deletFxn()
//         span.appendChild(txt);

//         listContainer.appendChild(listItem);
//         listContainer.appendChild(edit);
//         listContainer.appendChild(span);
//         listItems.appendChild(listContainer);
//     }
//     inputValue.value="";

//     // To mark items as done
//     listItem.addEventListener('click', function(){
//         listItem.style.textDecoration = "line-through";
//     }) 
//     listItem.addEventListener('dblclick', function(){
//         listItem.style.textDecoration = "none";
//     })

// //     const removeBtn = document.querySelector(".delete");
    
// //     removeBtn.addEventListener('click', function(event){
// //     console.log(event.target);
// //     const span = event.target;
// //     // const listContainer = document.getElementById();
// //     span.parentElement.remove()
// // })
// })

// // Enter key to add
// inputValue.addEventListener('keypress', function(e){
//     if(e.key === "Enter"){
//         addBtn.click();
//     }
// })

// To delete an item
// const removeBtn = document.getElementsByName("delete");
// console.log({removeBtn});
// removeBtn.addEventListener('click', function(event){
//     console.log(event.target);
//     const span = event.target;
//     // const listContainer = document.getElementById();
//     span.remove()
// })


    // // Create a delete button 
    // var myList = document.getElementsByTagName("li");
    // var i;
    // for (i = 0; i < myList.length; i++) {
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    // span.className = "delete";
    // span.appendChild(txt);
    // myList[i].appendChild(span);
    // }

    // // Create an edit button 
    // var myList = document.getElementsByTagName("li");
    // var i;
    // for (i = 0; i < myList.length; i++) {
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u270E");
    // span.className = "edit";
    // span.appendChild(txt);
    // myList[i].appendChild(span);
    // }

    // // To delete an item
    // var remove = document.getElementsByClassName("delete");
    // var i;
    // for (i = 0; i < remove.length; i++) {
    //     remove[i].onclick = function() {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //     }
    // }

    // // To edit an item
    // var edit = document.getElementsByClassName("edit");
    // edit.addEventListener("click", function(){
    //     if (edit == txt) {
    //         list.focus();
    //         edit.innerText = "Save";
    //     } else {
    //         edit.innerText = txt;
    //     }
    // })
    // // var i;
    // // for (i = 0; i < edit.length; i++) {
    // //     if (edit == "\u270E") {
    // //         edit[i].onclick = function(){
    // //             list.focus();
    // //             edit.innerText = "Save";
    // //         }
    // //     } else {
    // //         edit.innerText = "d\u270E";
    // //     }
        
    // // }

// const x =5

// const myFunc = () => {
// const x =1

// console.log(x)

// }


// myFunc()


// console.log(x)