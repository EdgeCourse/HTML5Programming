/* 
This code covers the topics: 

1. String manipulation:

Converting strings to lowercase using toLowerCase().
Splitting strings into individual words using split().
Accessing specific characters in a string using charAt().
Extracting substrings using slice().
Concatenating strings using the + operator.
Joining an array of strings back into a single string using join().

2. Functions:

Defining a function named capitalize that takes two arguments (sentence and lowercaseArticles).
Using arrow functions (=>) for a concise way to define the function body (ES6 syntax).
Using conditional statements (if) to control the logic within the function.

3. Arrays:

Declaring an array named articles to store a list of common articles.
Using the map method to iterate over each word in the split sentence and apply the capitalization logic.

4. DOM manipulation (optional):

The commented-out section demonstrates using querySelector to select an element (h1) from the HTML document.
It then calls the capitalize function on the element's text content (textContent).

5. Default arguments (optional):

The ES5 version shows how to set a default value for the lowercaseArticles argument using a conditional expression.

6. Conditions
*/

function capitalize(sentence, lowercaseArticles = true) {
 
	const words = sentence.toLowerCase().split(" ");
  
	const articles = ["the", "is", "a", "an", "and", "but", "or", "for", "nor", "so", "yet", "as", "at", "by", "for", "in", "of", "off", "on", "per", "to", "up", "via"]; 
  
	const capitalizedWords = words.map((word, index) => {
  
    // Capitalize the first word 
 
      if (index === 0 ) {
   
		return word.charAt(0).toUpperCase() + word.slice(1);
	   
  }

	  // If lowercaseArticles is true, keep articles lowercase
	  if (lowercaseArticles && articles.includes(word)) { 
		return word; 
	  }
    console.log(word)
    /* section where we deal with specail cases JavaScript and HTML5 */
    //this test first since it also includes the second test
    if(word.toLowerCase().includes("javascript?")){
      return "JavaScript?";
    }
    else if(word.toLowerCase().includes("javascript")){
      return "JavaScript";
    }
    if(word.toLowerCase().includes("html5?")){
      return "HTML5?";
    }
    else if(word.toLowerCase().includes("html5")){
      return "HTML5";
    }
    //end special cases
	  // Otherwise, capitalize the word
	  return word.charAt(0).toUpperCase() + word.slice(1); 
    
	});
	return capitalizedWords.join(" ");
  }
  
  const h1Element = document.querySelector("h2");
  
  // To lowercase articles in the middle of the sentence:
  h1Element.textContent = capitalize(h1Element.textContent, true); 
  
  // To capitalize all words except the first word:
  // h1Element.textContent = capitalize(h1Element.textContent, false);

  //es5
  /*
function capitalize(sentence, lowercaseArticles) {
  var words = sentence.toLowerCase().split(" ");
  var articles = ["the", "a", "an", "and", "but", "or", "for", "nor", "so", "yet", "as", "at", "by", "for", "in", "of", "off", "on", "per", "to", "up", "via"]; 
  lowercaseArticles = typeof lowercaseArticles !== 'undefined' ? lowercaseArticles : true; // Default value for lowercaseArticles

  var capitalizedWords = words.map(function(word, index) {
    // Capitalize the first word 
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } 
    // If lowercaseArticles is true, keep articles lowercase
    if (lowercaseArticles && articles.indexOf(word) !== -1) { 
      return word; 
    }
    // Otherwise, capitalize the word
    return word.charAt(0).toUpperCase() + word.slice(1); 
  });
  return capitalizedWords.join(" ");
}

var h1Element = document.querySelector("h1");

// To lowercase articles in the middle of the sentence:
h1Element.textContent = capitalize(h1Element.textContent, true); 

// To capitalize all words except the first word:
// h1Element.textContent = capitalize(h1Element.textContent, false);
  */