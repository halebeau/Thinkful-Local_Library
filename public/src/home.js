//Returns the number of books in the array
function getTotalBooksCount(books) {
  const totalBooks = books.map((book) => books); 
  return totalBooks.length
}

//Returns the number of accounts in the array
function getTotalAccountsCount(accounts) {
  const list = accounts.reduce((account) => {
  account = accounts.map((account) => account);
  return account.length;
  }, 0);
  return list; 
}

//Returns the number of borrowed books in the array
function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  return borrowedBooks.length;
}

//Helper function returns top five results
function _topFive(array) {
  let result = array.sort((countA, countB) => (countA.count < countB.count ? 1: -1
    )).slice(0, 5);
  return result;
}

//Returns the top five most common Genres
function getMostCommonGenres(books) {
  const commonGenres = [];
  for (let book of books) {
    const genre = commonGenres.find(
      (currentGenre) => currentGenre.name === book.genre);
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1})
  }
}
  return _topFive(commonGenres);
}

//Returns the top five most popular Books
function getMostPopularBooks(books) {
  const topBooks = [];
    for (let book of books) {
      const popular = book.borrows.length
      const bestBooks = topBooks.find(
        (popularBook) => popularBook.name === book
      );
      if (bestBooks) {
        bestBooks.count++;
      } else {
        topBooks.push({ name: book.title, count: popular});
      }
    }
  return _topFive(topBooks);
}         

//Returns the top five most popular Authors
function getMostPopularAuthors(books, authors) {
  const popAuthors = [];
    for (let author of authors) {
      const authorName = `${author.name.first} ${author.name.last}`;
      let count = 0;
      for (let book of books) {
        if (author.id === book.authorId) {
          count += book.borrows.length;
        }
      }
      const authorList = { name: authorName, count: count };
      popAuthors.push(authorList);
    }
  return _topFive(popAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
