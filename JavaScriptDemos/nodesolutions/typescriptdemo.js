// Create a function that takes a book object as an argument and prints its details
function displayBookInfo(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Year: ".concat(book.year));
    console.log("ISBN: ".concat(book.isbn));
}
// Create a book object
var myBook = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
};
// Call the function to display the book information
displayBookInfo(myBook);
