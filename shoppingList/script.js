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

// 받아온 item들을 HTML태그로 생성
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


// 버튼클릭시 각 버튼의 정보에 맞는 아이템들을 filtering
// items를 displayItems에 호출
function onBtnClick(e, items){
    const key = e.target.dataset.key;
    const value = e.target.dataset.value;

    if( key == null && value == null){
        return;
    }else{

        displayItems(items.filter(item => item[key] === value));
        console.log(value);
    }
}


// 로고와 버튼 클릭 이벤트
function setEventListeners(items){
    const logo = document.querySelector('#logo');
    const buttons = document.querySelector('#filter_btn');

    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", e => onBtnClick(e, items));

}



//함수호출
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);