
//GETELEMENTBYCLASSNAME
let items=document.getElementsByClassName('list-group-item')
items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}

//GETELEMENTBYCLASSTAGNAME
let li=document.getElementsByTagName('li')
li[1].style.backgroundColor='red';

li[4].style.fontSize='40px'