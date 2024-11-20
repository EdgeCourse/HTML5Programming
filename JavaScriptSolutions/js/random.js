function generate() {
	// Store interesting facts about JavaScript history in an array

	const facts = [
	  `JavaScript was initially called LiveScript when its debuted in Netscape Navigator 2.0 in September 1995.`,
	  `In December 1995, LiveScript was renamed JavaScript with the release of Netscape Navigator 2.0.`,
	  `The name JavaScript was chosen to capitalize on the popularity of Java, leading to confusion about their relationship.`,
	  `Netscape used the name JavaScript as a marketing tactic to associate it with the then-popular Java programming language.`,
	  `Since the mid-2000s, server-side JavaScript implementations like Node.js (2009) have emerged.`
	];
  
	// Select a random fact from the array
	const randomFact = facts[Math.floor(Math.random() * facts.length)];
  
	// Display the fact on the page with a citation
	document.write(`${randomFact} <em>(paraphrased from Wikipedia)</em>`);
  }
  
  // Call the function to generate and display a fact
  generate();

  //es5
  /* 
  function generate() {
  // Store interesting facts about JavaScript history in an array
  var facts = [
    "JavaScript was initially called LiveScript when it debuted in Netscape Navigator 2.0 in September 1995.",
    "In December 1995, LiveScript was renamed JavaScript with the release of Netscape Navigator 2.0.",
    "The name JavaScript was chosen to capitalize on the popularity of Java, leading to confusion about their relationship.",
    "Netscape used the name JavaScript as a marketing tactic to associate it with the then-popular Java programming language.",
    "Since the mid-2000s, server-side JavaScript implementations like Node.js (2009) have emerged."
  ];

  // Select a random fact from the array
  var randomFact = facts[Math.floor(Math.random() * facts.length)];

  // Display the fact on the page with a citation
  document.write(randomFact + " <em>(paraphrased from Wikipedia)</em>");
}

// Call the function to generate and display a fact
generate();
  */