var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	lineThrough(li);
	
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"))
	li.appendChild(deleteButton);
	deleteButton.onclick = function() {
		this.parentElement.style.display = "none";
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeydown(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function lineThrough(list) {
	list.addEventListener("click", function() {
	  list.classList.toggle("done");
	})
  };

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);
