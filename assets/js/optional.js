// Toggle 'completed' class when clicking on a list item
document.querySelector("ul").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});

// Event delegation for delete buttons
document.querySelector("ul").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.stopPropagation();
        
        // Fade out effect
        let listItem = event.target.closest("li");
        listItem.style.transition = "opacity 0.5s";
        listItem.style.opacity = 0;

        setTimeout(() => {
            listItem.remove();
        }, 500);
    }
});

// Add new todos when pressing Enter
document.querySelector("#input").addEventListener("keypress", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        let todoText = this.value.trim();
        this.value = ""; // Clear input field

        // Create new list item
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.classList.add("delete");
        span.innerHTML = '<i class="fas fa-trash-alt"></i> X';

        li.appendChild(span);
        li.appendChild(document.createTextNode(` ${todoText}`));

        // Append to the list
        document.querySelector("ul").appendChild(li);
    }
});