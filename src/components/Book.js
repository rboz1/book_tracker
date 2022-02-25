class Book {
    constructor(title, author, pages){
        this.id = Math.floor(Math.random()*10);
        this.title = title;
        this.author = author;
        this.pages = pages;

    }

    get id() {
        return this._id;
      }
    
    set id(value) {
      return this._id = value;
    }

    // get title(){
    //     return this.title;
    // }

    // set title(val){
    //     if(val === ''){
    //         return this.title = 'Unknown';
    //     }else{
    //         return val;
    //     }
    // }

    // get author(){
    //     return this.author;
    // }

    // set author(val){
    //     if(val === ''){
    //         return this.author = 'Unknown';
    //     }else{
    //         return val;
    //     }
    // }

    // get pages(){
    //     return this.pages;
    // }

    // set pages(val){
    //     if(val === ''){
    //         return this.pages = 'Unknown';
    //     }else if(isNaN(val) && val !== ''){
    //         return alert("Please enter a number.");
    //     }else{
    //         return val;
    //     }
    // }
    
}

export default Book;