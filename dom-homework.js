// main div variable
myDiv = document.getElementById("myDiv");

welcome = document.createElement("h1");
welcome.id = "welcome"
welcome.innerHTML = "Welcome to DOM homework"
welcome.className = "highlight"
myDiv.appendChild(welcome)

firstHW = document.createElement("p");
firstHW.id = "firstHW";
firstHW.innerHTML = "This is your first DOM homework assignment"
myDiv.appendChild(firstHW)

// list making
myList = document.createElement("ul");
myList.id = "myList"

listItem1 = document.createElement("li");
listItem1.innerHTML = "Food"
myList.appendChild(listItem1)
listItem2 = document.createElement("li");
listItem2.innerHTML = "Dessert"
myList.appendChild(listItem2)
listItem3 = document.createElement("li");
listItem3.innerHTML = "Water"
myList.appendChild(listItem3)

myDiv.appendChild(myList)

// check to see if div was clicked
let divRandomColor = "div"
myDiv.addEventListener("click", function(){
    genColorFn(divRandomColor)
})

// Button
listButton = document.createElement("button")
listButton.innerHTML = "Add new list item"
document.body.append(listButton)

let newItem;
let newItemCounter = 1;
let itemRandomColor = "item";
listButton.addEventListener("click", function(){ // check to see if button was clicked
    newItem = document.createElement("li");
    newItem.innerHTML = `New List Item ${newItemCounter}`;
    myList.appendChild(newItem)
    genColorFn(itemRandomColor)
    newItemCounter += 1
})

// Function to generate random color
function genColorFn(check) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let hexColor = `#${randomColor}`;

    // // Update the displayed color values
    if (check == "item") {
        newItem.style.backgroundColor = hexColor
    } else if (check == "div") {
        myDiv.style.backgroundColor = hexColor
    }
}

// Function to convert HEX to RGB
function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}