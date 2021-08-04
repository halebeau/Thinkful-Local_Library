//returns an array of authors with the given ID
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id );
}

//returns an array of the books with the given ID
function findBookById(books, id) {
  return books.find((book) => book.id.includes(id));
}

//returns an array of two arrays: 
//- an array of the available books
//- an array of the books currently borrowed
function partitionBooksByBorrowedStatus(books) {
  const availableList = books.filter((book) => book.borrows[0].returned === true);
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return [borrowedList, availableList];
}

//returns an array of all of the transactions within a books borrows array
//result includes the account objects information
function getBorrowersForBook(book, accounts) {
  const result = [];
  for (let account of accounts) {
    for (let i = 0; i < book.borrows.length; i++) {
      if(account.id === book.borrows[i].id) {
        const returned = book.borrows[i].returned
        result.push({...account, returned })
      }
    }
  }
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
