var oldVar = "I am var"; 
let name = "Alice"; 
const pi = 3.14; 
console.log(name, pi);

function calculateBMI(weight, height) {
    return weight / (height * height);
}
console.log(calculateBMI(70, 1.75)); // Example usage

let age = 18;
if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age < 65) {
    console.log("Adult");
} else {
    console.log("Senior");
}

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Another day!");
}

let users = ["Alice", "Bob", "Charlie"];
let userList = "<ul>";
for (let user of users) {
    userList += `<li>${user}</li>`;
}
userList += "</ul>";
document.getElementById("content").innerHTML = userList;
