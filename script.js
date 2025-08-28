// Part 1: Variables and data types
let userName = "";
let userAge = 0;
const currentYear = 2025;

// Part 1: Function with conditionals and operators
function processInput() {
    userName = document.getElementById('nameInput').value;
    userAge = parseInt(document.getElementById('ageInput').value);
    
    // Input validation with conditionals
    if (!userName || isNaN(userAge)) {
        document.getElementById('result1').innerHTML = "Please enter both name and age!";
        return;
    }
    
    // Arithmetic operators and ternary operator
    let birthYear = currentYear - userAge;
    let status = userAge >= 18 ? "adult" : "minor";
    
    document.getElementById('result1').innerHTML = 
        `Hello ${userName}! You are ${userAge} years old (born in ${birthYear}). You are an ${status}.`;
    
    console.log("User processed:", userName, userAge, status);
}

// Part 2: Function 1 - Calculator with parameters
function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result2').innerHTML = "Please enter valid numbers!";
        return;
    }
    
    let result = addNumbers(num1, num2);
    document.getElementById('result2').innerHTML = `${num1} + ${num2} = ${result}`;
    
    console.log("Calculation:", num1, "+", num2, "=", result);
}

// Helper function with return value
function addNumbers(a, b) {
    return a + b;
}

// Part 2: Function 2 - Text formatter
function formatText() {
    let text = document.getElementById('textInput').value;
    
    if (!text) {
        document.getElementById('result3').innerHTML = "Please enter some text!";
        return;
    }
    
    let formatted = formatString(text);
    document.getElementById('result3').innerHTML = 
        `Original: ${text}<br>Uppercase: ${formatted.upper}<br>Lowercase: ${formatted.lower}`;
    
    console.log("Text formatted:", formatted);
}

// Helper function returning object
function formatString(str) {
    return {
        upper: str.toUpperCase(),
        lower: str.toLowerCase(),
        length: str.length
    };
}

// Part 3: For loop example
function showNumbers() {
    let numbers = [];
    
    // For loop to generate array
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 2);
    }
    
    document.getElementById('result4').innerHTML = 
        `Numbers generated: ${numbers.join(', ')}`;
    
    console.log("For loop result:", numbers);
}

// Part 3: forEach loop example
function showFruits() {
    let fruits = ['Apple', 'Banana', 'Orange'];
    let output = "";
    
    // forEach loop to process array
    fruits.forEach(function(fruit, index) {
        output += `${index + 1}. ${fruit}<br>`;
    });
    
    document.getElementById('result5').innerHTML = output;
    
    console.log("forEach loop processed fruits:", fruits);
}

// Part 4: DOM manipulation - toggle visibility
function toggleContent() {
    let hiddenDiv = document.getElementById('hiddenDiv');
    
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
    
    console.log("Content toggled");
}

// Part 4: DOM manipulation - change styles
function changeStyle() {
    let styleDiv = document.getElementById('styleDiv');
    
    // Toggle CSS class and update content
    if (styleDiv.classList.contains('changed')) {
        styleDiv.classList.remove('changed');
        styleDiv.innerHTML = '<p>Click to change my style</p>';
    } else {
        styleDiv.classList.add('changed');
        styleDiv.innerHTML = '<p>Style changed!</p>';
    }
    
    console.log("Style changed");
}

// Counter for dynamic items
let itemCounter = 2;

// Part 4: DOM manipulation - create elements
function addItem() {
    let list = document.getElementById('itemList');
    let newItem = document.createElement('li');
    
    // Add content and append to list
    newItem.textContent = `Item ${itemCounter}`;
    list.appendChild(newItem);
    
    itemCounter++;
    
    console.log("New item added:", newItem.textContent);
}