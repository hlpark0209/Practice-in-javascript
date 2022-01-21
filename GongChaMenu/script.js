'use strict';
let array =[];

//data.json 파일 호출
function loadItems(){
    return fetch('data/data.json')
    .then( response => response.json())
    .then( json => json.items);
        
}


// // 받아온 데이터를 update 한 후 html로 변환
function displayItems(items){
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.innerHTML = items.map( (item) => createHTML(item)).join('');
        
    function createHTML(e){
        return `
        <div class="menuThumb">
            <img src="${e.image}" class="menuImg">
            <p>${e.title}</p>
        </div>
        `;
    }
}

// click event 적용

function onclickBtn(e, items){
    const key = e.target.dataset.key;
    const value = e.target.dataset.value;

    if( key == null ){
        return;
    } else{
        displayItems(items.filter( item => item[key] === value));
    }
}




function filterItems(items){
    const btn = document.querySelector('.menuBtns');
    btn.addEventListener('click', e => onclickBtn (e, items));
    
}





loadItems()
.then( items => {
    displayItems(items);
    filterItems(items);
})
.catch(console.log);