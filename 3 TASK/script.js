// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBYID /j/
let title=document.getElementById('header-title');
console.log(title);
title.textContent='good bye';
title.innerText='good bye';
title.style.color="red";

title.innerHTML='<h1>ITEM LISTENER</h1>'


let add=document.querySelector('#add')
add.style.color='green';
add.style.borderBottom='solid 3px black'