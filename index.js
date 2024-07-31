// 2. Basics    

//  Variables Declaration and Initialization
//  Logging to the Console
//  Objects
//  Document Write
//  Arrays
//  Functions
//  Operators


// Variables declaration
var name = 'tamil';
let age = '26';
const gender = 'Male';

// Logging variables to document
document.write(`<h2>Variables</h2>`);
document.write(`${name} ${age} ${gender}<br><br>`);

// Education details as an object
let educationDetails = {
    'sslc': {
        'schoolName': 'ghss',
        'schoolCity': 'cuddalore',
        'passedOut': 2011,
        'principalName': undefined 
    },
    'hsc': {
        'schoolName': 'vghss',
        'schoolCity': 'vadalur',
        'passedOut': 2011,
        'principalName': null 
    },
    'degree': {
        'collegeName': 'rec',
        'collegeCity': 'coimbatore',
        'passedOut': 2017,
        'deanName': undefined, 
        'courseCompleted': null 
    }
};

// Writing and logging education details
document.write(`<h2>Education Details</h2>`);
document.write(`${JSON.stringify(educationDetails)}<br><br>`);

// Accessing properties using dot and bracket notation
document.write(`<h2>Accessing Properties</h2>`);
document.write(`${educationDetails.sslc.schoolName}<br>`); // dot notation 
document.write(`${educationDetails['hsc']['schoolName']}<br>`); // bracket notation 

// Using a variable to access properties
let passedOutYear = 'passedOut';
document.write(`${educationDetails['sslc'][passedOutYear]}<br><br>`); 

// Skills array
let skills = ['html-5', 'css-3', 'js', 'ts', 'angular'];
document.write(`<h2>Skills</h2>`);
document.write(`${skills.join(', ')}<br><br>`);

// Adding an element to the skills array
skills[7] = 1;
document.write(`skills: ${skills.join(', ')} skillsLength: ${skills.length}<br><br>`);

// Function to log employee details
document.write(`<h2>Employee Details</h2>`);
function employeeDetails(name, age) {
    document.write(`empName is: ${name} empAge: ${age}<br>`);
}

// Calling the employeeDetails function
employeeDetails('karthi', 28);
employeeDetails('jhon', 26);
document.write(`<br>`);

// Function to calculate the square of a number
document.write(`<h2>Square Function</h2>`);
function square(num1) {
    let num2 = 25;
    document.write(`${num2}<br>`);
    return num1 * num2;
}

// Calling the square function
let res = square(10);
document.write(`${res}<br><br>`); 

// Operators
document.write(`<h2>Operators</h2>`);

let x = 50, y = 7; 

// Arithmetic operators
document.write(`arthamaticOperators values x=10 y=2: +${x + y} -${x - y} *${x * y} /${x / y} %${x % y} **${x ** y}<br><br>`);

// Increment and decrement operators
document.write(`${x++} ${x--} ${++y} ${--y}<br><br>`);

// Assignment operators
document.write(`${x += 10} ${x *= 10} ${x -= 10} ${x *= 10} ${x /= 10} ${x **= 2} ${x %= 10}<br><br>`); 
