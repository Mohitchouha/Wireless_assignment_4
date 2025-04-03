// Alert when form is submitted
document.getElementById("submitBtn").addEventListener("click", function() {
    alert("Form Submitted!");
});

// Confirm before deleting an item
document.getElementById("deleteBtn").addEventListener("click", function() {
    if (confirm("Are you sure?")) {
        console.log("Item deleted.");
    } else {
        console.log("Deletion cancelled.");
    }
});

// Prompt for user input
document.getElementById("nameBtn").addEventListener("click", function() {
    let userInput = prompt("Enter your name:");
    if (userInput) {
        document.getElementById("content").innerHTML += `<p>Hello, ${userInput}!</p>`;
    }
});
