//parentnode
// let itemlist=document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='red';
// console.log(itemlist.parentNode.parentNode);

//parentelement
// let itemlist=document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='green';
// console.log(itemlist.parentElement.parentElement);

//childNode
// let itemlist=document.querySelector('#items');
// console.log(itemlist.childNodes);

//children
// let itemlist=document.querySelector('#items');
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='red'; 

//firstchild&lastchild
// let itemlist=document.querySelector('#items');
// console.log(itemlist.firstChild);
// console.log(itemlist.lastChild);

//firstElement & lastElemntchild
// let itemlist=document.querySelector('#items');
// console.log(itemlist.firstElementChild);
//  console.log(itemlist.lastElementChild);
//  itemlist.firstElementChild.style.backgroundColor='yellow';
//  itemlist.lastElementChild.style.backgroundColor='red';


//nextsilbing
// let itemlist=document.querySelector('#items');
// console.log(itemlist.nextSibling);

//nextelementsilbing
// let itemlist=document.querySelector('#items');
// console.log(itemlist.nextElementSibling);


//previoussilbing
// let itemlist=document.querySelector('#items');
// console.log(itemlist.previousSibling);

//nextelementsilbing
// let itemlist=document.querySelector('#items');
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.backgroundColor='red' 


let newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1'
newdiv.setAttribute('title','hello div');
let text=document.createTextNode('my div');
newdiv.appendChild(text);

let ca=document.querySelector('.container');
let h=document.querySelector('#header-title');
ca.insertBefore(newdiv,h)


















