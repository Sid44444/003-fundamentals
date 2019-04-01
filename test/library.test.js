const Library = require("../app/library");
const Book = require("../app/Book");

const book1= new Book ('Don\'t Make Me Think','Steve Krug',123)
const book2= new Book ('Site Reliability Engineering','Niall Richard Murphy',456)
const book3= new Book ('Fantastic Mr Fox','Roald Dahl',789)
const book4= new Book ('Growth Mindset','Carol Dweck',992)

test("Check that a library can be instantiated with some books", () => {
  const library = new Library([book1,book2,book3

  ]);
  expect(library.books).toEqual([book1,book2,book3
    // How should the books look?
  ]);
});

test("Check that a book can be added to the library", () => {
  const library = new Library([book1,book2,book3]);
  library.add(book4);
  expect(library.books).toEqual([book1,book2,book3,book4]);
});

test("Check that a specific book can be withdrawn", () => {
  const library = new Library([book1,book2,book3]);
  library.withdraw(book2);
  expect(library.books).toEqual([book1,book3]);
});

test("Check if library allows people to check out books", () => {
  const library = new Library([book1,book2,book3]);
  library.checkOut(book2);
  expect(book2.availability).toEqual(false);
});

test("Check if library allow people to check books back into the library", () => {
    const library = new Library([book1,book2,book3]);
    library.checkInn(book2);
    expect(book2.availability).toEqual(true);
  });

