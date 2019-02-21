// Toggle Item as done after clicking.

var li = document.querySelector("li");
var ul = document.querySelector("ul");
var input = document.querySelector("input[type='text']");


// With dynamic elements
ul.addEventListener("click", setCompleted);

function setCompleted(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle("completed");
	}
}


// remove the todo after hitting trash icon.

// With dynamic elements.
ul.addEventListener("click", setDeleted);

function setDeleted(e) {
	if (e.target.tagName.toLowerCase() === 'i') {
		e.target.parentNode.parentNode.classList.add("deleted")
		setTimeout(function(){
			e.target.parentNode.parentNode.remove();
			// e.stopPropagation(); 
		},1000);
	}
}

// add new todo to the list upon hitting enter key.

input.addEventListener("keydown", function(){
	if (event.keyCode === 13) {
		var val = this.value;
		newItem = document.createElement("li");
		newItem.innerHTML = "<span> <i class='fas fa-trash-alt'></i> </span>" + val;
		ul.appendChild(newItem)
		input.value = "";
	}
})
