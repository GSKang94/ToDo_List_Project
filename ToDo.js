// Toggle Item as done after clicking.

var li = document.querySelector("li");
var ul = document.querySelector("ul");
var input = document.querySelector("input[type='text']");

/* Without dynamic elements
for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", function(){
		this.classList.toggle("tDisplay")
	})
}*/

// With dynamic elements
ul.addEventListener("click", setCompleted);

function setCompleted(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle("completed");
	}
}


// remove the todo after hitting X.

// With dynamic elements.
ul.addEventListener("click", setDeleted);

function setDeleted(e) {
	if (e.target.tagName.toLowerCase() === 'span') {
		e.target.parentNode.remove();
		e.stopPropagation(); 
	}
}

/* without dynamic elements.
var spans = document.querySelectorAll("span");

for (var i = 0; i < spans.length; i++) {
	spans[i].addEventListener("click", function(){
		this.parentNode.remove()
	})
}*/

// add new todo to the list upon hitting enter key.

input.addEventListener("keydown", function(){
	if (event.keyCode === 13) {
		var val = this.value;
		newItem = document.createElement("li");
		newItem.innerHTML = "<span> X </span>" + val;
		ul.appendChild(newItem)
		input.value = "";
	}
})

// add effects.
// add icons.
// style the app.