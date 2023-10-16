

let ul = document.getElementById('items');
let form = document.getElementById('addForm');
let filter = document.getElementById('filter');


filter.addEventListener('keyup', filterItem);
form.addEventListener('submit', addItem);
ul.addEventListener('dblclick', removeItem);


let listItems = document.querySelectorAll('.list-group-item');

for (let i = 0; i < listItems.length; i++) {
  let editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right';
  editBtn.appendChild(document.createTextNode('EDIT'));
  listItems[i].appendChild(editBtn);
}



function addItem(e) {
    e.preventDefault();
    let itemText = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    let text = document.createTextNode(itemText);
    li.appendChild(text);
  
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right'; 
    let editText = document.createTextNode('EDIT');
    editBtn.appendChild(editText);
  
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    let deleteText = document.createTextNode('X');
    deleteBtn.appendChild(deleteText);
  
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
   
    ul.appendChild(li);
  }
  


function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
}


function filterItem(e) {
  let text = e.target.value.toLowerCase();

  let items = ul.querySelectorAll('li'); 

  items.forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

