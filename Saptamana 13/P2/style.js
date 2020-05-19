// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users"

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.catch(data => data.map(index => console.log(index.username, index.id)))
// function getData(response)
// for(let index of response) {
//   console.log(index.username, index.id)
// }

.then(myJson => myJson.filter(user => ({user: user.username, id: user.id})))
.then(myJson => myJson.filter(user => user.id > 5))
.then(response => console.log(response))




// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
url = 'https://www.googleapis.com/books/v1/volumes?q=horror';
fetch(url)
.then(respone => respone.json())
.then(data => console.log(data.item.map(book.volumeInfo)
.filter(book => book.pageCount > 230))
.filter(book => book.authors.length > 1 ))







//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem('width', '100px');
localStorage.setItem('height', '100px');
localStorage.setItem('background-color', 'green');

const loc1 = localStorage.getItem('width')
const loc2 = localStorage.getItem('height')
const loc3 = localStorage.getItem('background-color')

console.log(loc1)
console.log(loc2)
console.log(loc3)
