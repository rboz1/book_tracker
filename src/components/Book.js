class Book {
    constructor(title, author, pages){
      this.id = this.generateId();
      this.title = title;
      this.author = author;
      this.pages = pages;
    }

    get bookId() {
        return this.id;
      }
    
    set bookId(value) {
      return this.id = value;
    }

    //generates unique id for each instance of Book
    generateId = () => {
      return Math.floor(Math.random() * 1000);
    }
}

export default Book;