class Library {
  constructor(books) {
    this.books = books;
  }

  add(newBook) {
    this.books.push(newBook)
  }
  withdraw(removeBook) {
    this.books = this.books.filter(function(item) {
      if (item === removeBook) {
        return false;
      } else {
        return true;

      }
    })
  }
  checkOut(checkedOutBook) {
    this.books = this.books.forEach(function(item) {
      if (item === checkedOutBook) {
        checkedOutBook.availability = false;
      } 
    })
  }
}

module.exports = Library;

