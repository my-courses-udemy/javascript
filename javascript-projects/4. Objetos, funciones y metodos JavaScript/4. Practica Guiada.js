class Book{
    constructor(title,author,year,gender){
        this.title = title;
        this.author = author;
        this.year = year;
        this.gender = gender;
    }

    getAuthor(){
        return this.author;
    }

    bookInfo(){
        return `El titulo del libro es ${this.title}, su autor es ${this.author}, salio el año ${this.year}, y es del genero de ${this.gender}`;
    }

    getGender(){
        return this.gender;
    }
}

let books = [];

while (books.length<2){
    let title = prompt('Introduce el titulo del libro');
    let author = prompt('Introduce el autor del libro');
    let year = prompt('Introduce el año del libro');
    let gender = prompt('Introduce el genero del libro').toLowerCase();

    if (title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')){
        books.push(new Book(title,author,year,gender));
    } 
}

const showAllBooks = () => {
    console.log(books);
}
const showAuthor = () => {
    let author = []
    for (const book of books){
        author.push(book.getAuthor());
    }    
    console.log(author.sort());
}

const showGender = () => {
    const gender = prompt('introduce el genero a buscar');
    for (const book  of books){
        if (book.getGender() == gender){
            console.log(book.bookInfo());
        }
    }
}

// showAllBooks();
// showAuthor();
showGender();