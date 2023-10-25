const booksGrid = document.getElementById('books-grid')
const form = document.getElementById("book-form");
const addBook = document.getElementById("add-book");
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => form.style.display = 'none');

addBook.addEventListener('click', () =>{
    newBook(); 
})




const myLibrary = []; 

function Book(title, author, pages, status){
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.status = status
    
   

    this.info = function(){
        return(this.title + ' by ' + this.author +  ',' + this.pages + " " + "pages" +  ',' + this.status )
    }

}

function addBooktoLibrary(Book){
    myLibrary.push(Book);
}

function appendBook(){
    booksGrid.innerHTML = "";
    myLibrary.forEach((Book) => {
        const bookCard = document.createElement('div')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const buttonGroup = document.createElement('div')
        const readBtn = document.createElement('button')
        const removeBtn = document.createElement('button')

        bookCard.classList.add('book-card')
        buttonGroup.classList.add('button-group')
        readBtn.classList.add('btn')
        removeBtn.classList.add('btn')
        //readBtn.onclick = toggleRead
        //removeBtn.onclick = removeBook

        
        title.textContent = `"${Book.title}"`
        author.textContent = Book.author
        pages.textContent = `${Book.pages} pages`
        removeBtn.textContent = 'Remove'

        if (Book.status) {
            readBtn.textContent = 'Read'
            readBtn.classList.add('btn-light-green')
          } else {
            readBtn.textContent = 'Not read'
            readBtn.classList.add('btn-light-red')
          }
        
          bookCard.appendChild(title)
          bookCard.appendChild(author)
          bookCard.appendChild(pages)
          buttonGroup.appendChild(readBtn)
          buttonGroup.appendChild(removeBtn)
          bookCard.appendChild(buttonGroup)
          booksGrid.appendChild(bookCard)
        
          
         readBtn.addEventListener('click', () => { 
            Book.status = !Book.status; 
            
            if(readBtn.textContent === "Read"){
                readBtn.textContent = "Not Read"
                readBtn.classList.remove('btn-light-green')
                readBtn.classList.add('btn-light-red')
            }

            else{
                readBtn.textContent = "Read"
                readBtn.classList.remove('btn-light-red')
                readBtn.classList.add('btn-light-green')
               
            }
            
        }); 

        removeBtn.addEventListener('click', () => {
            booksGrid.removeChild(bookCard);
            myLibrary.splice(myLibrary.indexOf(Book), 1);
        });

    });
}

    
        
         
         
        



function newBook() {
    form.style.display = "block";
    console.log("button pressed");
    // Move the event listener for form submission outside of this function
    // to avoid multiple event bindings.
}

// Add the form submission event listener outside the newBook function.
document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get your input value
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").checked;

    // Create a new book object and add it to the library
    let newBook = new Book(title, author, pages, status);
    addBooktoLibrary(newBook);
    appendBook();
    console.log(myLibrary);

    form.reset();
    form.style.display = "none";
});



// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false );
// const ex2 = new Book("erfsefs", "J.R.R Tolkien", 140, true );


// addBooktoLibrary(theHobbit);
// addBooktoLibrary(ex2);

// appendBook();

