console.log("this is project2");
function Book(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}
//display constructor
function Display()
 {

 }
 Display.prototype.add = function(book){
        console.log("adding to UI");
   let tableBody=document.getElementById("tableBody");
    let uiString=`
                     <tr>
                     <td> ${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                     </tr>
    `;
    tableBody.innerHTML+=uiString;
}
Display.prototype.clear = function()
{

    let libraryform=document.getElementById('libraryform');
    libraryform.reset();

}
Display.prototype.validate = function(book)
{

    if(book.name.length<2||book.author.length<2)
        return false;
    else
        return true;

}
Display.prototype.show = function(type,showMessage)
{

    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                       <strong>message:</strong> ${showMessage}
                       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                       </div>`;
        setTimeout(function(){ message.innerHTML=""},2000);//after 2000 seconds it will disappear
}
let libraryform=document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e)
{
    console.log("you have submitted library form");
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    let type;
    if(fiction.checked)
    {
        type = fiction.value;
    }
    else if(programming.checked)
    {
        type = programming.value;
    }
    else if(cooking.checked)
    {
        type = cooking.value;
    }
    let book = new Book(name,author,type);
    console.log(book);
    let display = new Display();
    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success','Your Book has been successfully added ');
    }
    else
    {
        display.show('danger','sorry you can not add this book');
    }
    
    e.preventDefault();
}