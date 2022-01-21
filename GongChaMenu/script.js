'use strict';
let array =[];

//data.json 파일 호출
function loadItems(){
    return fetch('data/data.json')
    .then( response => response.json())
    .then( item => { 
        array = item;
        console.log(array);
    });
    
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