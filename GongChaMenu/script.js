'use strict';

//data.json 파일 호출
function loadItems(){
    return fetch('data/data.json')
    .then( response => console.log(response));
    // .then( json => json.items);
}

// // 받아온 데이터를 update
// function displayItems(items){
//     const menuContainer = document.querySelector(".menuContainer");
//     // menuContainer.innerHTML = items;
    
//     const value = items.map( item => createHMTLString(item)).join('');
    
// }
// function createHMTLString(item){

// }















loadItems()
.then( items => {
//     displayItems(items);
})
.catch(console.log('warning!'));