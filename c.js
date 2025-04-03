// Change text on button click
document.getElementById("textBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "Text changed!";
});

// Hover effect
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});
document.getElementById("hoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
});

// Add/Remove Items from List
document.getElementById("addItemBtn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("list").appendChild(newItem);
});
