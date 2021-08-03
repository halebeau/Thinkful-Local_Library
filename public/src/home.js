function getTotalBooksCount(books) {
  const totalBooks = books.map((book) => books); 
  return totalBooks.length
}

function getTotalAccountsCount(accounts) {
  const list = accounts.reduce((account) => {
  account = accounts.map((account) => account);
  return account.length;
  }, 0);
  return list; 
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
