// Define an interface for a book object
interface Book {
    title: string;
    author: string;
    year: number;
    isbn: string;
  }
  
  // Create a function that takes a book object as an argument and prints its details
  function displayBookInfo(book: Book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year: ${book.year}`);
    console.log(`ISBN: ${book.isbn}`);
  }
  
  // Create a book object
  const myBook: Book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    isbn: "978-0-618-00221-3",
  };
  
  // Call the function to display the book information
  displayBookInfo(myBook);