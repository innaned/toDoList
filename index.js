const inputList = document.querySelector('.inputList');
const btn = document.querySelector('.btn');
const itemField = document.querySelector('.itemField');

btn.addEventListener('click', function(){
    const item = document.createElement('li');
    item.classList.add('itemAdding');
    item.innerText = inputList.value;
    itemField.appendChild(item);
    inputList.value = '';
    

    item.addEventListener ('click', function(){
        item.classList.add('itemNew')
    })

    
    item.addEventListener ('dblclick', function(){
        itemField.removeChild(item)
    })
})