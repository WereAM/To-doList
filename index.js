let addBtn = document.getElementById("add");
let listItems = document.getElementById("listItems");
let inputValue = document.getElementById("addItem"); 

function toDo(){
    // Add a new item
    addBtn.addEventListener('click', function(){
        const listContainer = document.createElement("div");
        const listItem = document.createElement("li");
        listItem.innerText = inputValue.value;
        listContainer.id = Math.floor(Math.random()*100);
        // listContainer.id =  inputValue.value
        if(!listItem.innerText){
            alert('Enter an item');
        } else {
            //Create edit button
            var edit = document.createElement("edit");
            var text = document.createTextNode("\u270E");
            edit.className = "edit";
            edit.appendChild(text);
    
            // Create delete button
            const del = document.createElement("delete");
            const txt = document.createTextNode("\u00D7");
            del.className = "delete";
            del.addEventListener('click', deleteFxn);
            del.appendChild(txt);
    
            listContainer.appendChild(listItem);
            listContainer.appendChild(edit);
            listContainer.appendChild(del);
            listItems.appendChild(listContainer);
        }
        inputValue.value="";
    })

    // // To mark items as done
    // listItem.addEventListener('click', function(){
    //     listItem.style.textDecoration = "line-through";
    // }) 
    // listItem.addEventListener('dblclick', function(){
    //     listItems.style.textDecoration = "none";
    // })

    // Enter key to add
    inputValue.addEventListener('keypress', function(e){
        if(e.key === "Enter"){
            addBtn.click();
        }
    })

    // To delete
    function deleteFxn(event){
        console.log(event.target);
        const del = event.target;
        // const listContainer = document.getElementById();
        del.parentElement.remove()
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