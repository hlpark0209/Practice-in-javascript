'use strict';

//data.json의 파일을 동적으로 불러온 후 아이템 전달
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// 받아온 리스트의 아이템을 update
function displayItems(items){
    const container = document.querySelector('.clothes_list');
    container.innerHTML = items.map( item => createHMTLString(item)).join('');

}

function createHMTLString(item){
    return `
    <li>
        <div class="content_wrap">
            <img src="${item.image}">
            <span>${item.gender}, ${item.size}</span>
        </div>
    </li>
    `;
}




loadItems()
.then(items => {
    displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);