const btnAdd = document.querySelector(".btn-add");
const dialog = document.querySelector("#dialog");
const btnSubmit = document.querySelector(".btn-submit");
const booksGrid = document.querySelector(".books-grid");
const btnDelete = document.querySelector(".delete");
// book card selectors
const title = document.querySelector("#book-title");
const author = document.querySelector("#book-author");
const page = document.querySelector("#book-page");
// form selectors
const bookForm = document.querySelector("#book-form");
const bookName = bookForm.querySelector("#book-name");
const bookAuthor = bookForm.querySelector("#author");
const bookPage = bookForm.querySelector("#page");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const createBookCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  pages.classList.add("book-page");
  buttonGroup.classList.add("card-btns");
  editBtn.classList.add("card-btn");
  editBtn.classList.add("edit");
  deleteBtn.classList.add("card-btn");
  deleteBtn.classList.add("delete");

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(deleteBtn);
  bookCard.appendChild(buttonGroup);
  booksGrid.appendChild(bookCard);

  deleteBtn.addEventListener("click", () => {
    const index = Array.from(bookCard.parentElement.children).indexOf(bookCard);
    deleteBook(index);
    updateBooks();
  });
};

const addBookToLibrary = () => {
  let title = bookName.value;
  let author = bookAuthor.value;
  let pages = bookPage.value;
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
};

const updateBooks = () => {
  booksGrid.innerHTML = "";
  for (const book of myLibrary) {
    createBookCard(book);
  }
};

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  updateBooks;
};

// event listeners

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  updateBooks();
  dialog.close();
});

btnAdd.addEventListener("click", () => {
  dialog.showModal();
});
