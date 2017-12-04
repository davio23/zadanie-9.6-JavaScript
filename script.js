var list = document.getElementById('list');
var add = document.getElementById('addElem');
var x = 1;
add.addEventListener('click', function(e) {
    var element = document.createElement('li');  
    element.innerHTML = 'item ' + x;
    list.appendChild(element);
    x = x+1;
})
