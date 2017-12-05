var list = document.getElementById('list');

var add = document.getElementById('addElem');

var newId = document.getElementsByTagName('li');

add.addEventListener('click', function(e){
  
var element = document.createElement('li');  
    element.innerHTML = 'item ' + newId.length;
    list.appendChild(element);
})
