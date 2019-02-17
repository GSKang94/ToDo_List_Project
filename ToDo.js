//ToDo.js

// Add task to list
function addTask() {
    var li = document.createElement("LI");

    // Modifies <li> list element to add a button in the list
    var btn = document.createElement("button");
    var t = document.createTextNode("X");
    btn.appendChild(t);
    btn.addEventListener("click", deleteTask);

    var input = document.getElementById("task-name");

    // Here, unfortunately, the order matters. It needs a better way to append a button.
    // If the button append first, then innerHTML ovverides it and
    // button disappears.
    // "\xa0" is a no-break-space char
    if(isInputValid(input.value)) {
        li.innerHTML = input.value + "\xa0"; 
        li.appendChild(btn);
    }

    // li.id = "list-item";

    input.value = ""; // Clear after entry

    document.getElementById("todo-list").appendChild(li);
}

function isInputValid(input) {
    if(input == "") {
        alert("Are not you gonna do anything?");
        return false;
    } else {
        return true;
    }
}

function deleteTask() {

    // I couldn't find a way to make it work (o_o)

    // var item = document.getElementById("todo-list");
    // item.parentNode.removeChild("list-item");
}

// Toggle Item as done after clicking.
var ul = document.querySelector("ul");

ul.addEventListener("click", setCompleted);

function setCompleted(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle("completed");
	}
}
