const today = new Date();

const deadline = new Date(today.getFullYear(), 10, 22, 12, 0, 0); 

const differenceDays = Math.floor((deadline.getTime() - today.getTime()) / 
(1000 * 60 * 60 * 24));

// Use this line to write the result to an HTML element with the id "deadline"
// document.getElementById("deadline").textContent = `Only ${differenceDays} more days until the end of the year!`;

// Use this line to write the result directly to the document
//document.write(`Only ${differenceDays} more days until the end of the year!`);


document.write("The quiz is ", differenceDays < 0 ? 
` was ${differenceDays} days ago!` : 
` is ${differenceDays} days from now!`)

//es5
/* 
var today = new Date();
var deadline = new Date(today.getFullYear(), 11, 31); // December 31st of current year

var differenceMs = deadline.getTime() - today.getTime(); // Difference in milliseconds
var differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

// Use this line to write the result to an HTML element with the id "deadline"
// document.getElementById("deadline").textContent = "Only " + differenceDays + " more days until the end of the year!"; 

// Use this line to write the result directly to the document
document.write("Only " + differenceDays + " more days until the end of the year!");
*/