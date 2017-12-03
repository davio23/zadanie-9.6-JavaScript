var list = document.getElementById('list')
var add = document.getElementById('addElem')
button.addEventListener('click', function(e){
    var element = document.createElement('li');  
    element.innerHTML = 'item';
    list.appendChild(element);
})
