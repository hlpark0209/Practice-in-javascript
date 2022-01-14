'use strict';

const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const list = document.querySelector('.list');

//2. li 요소가 append
function appendList(){
    const value = input.value;
    const listLi = document.createElement('li');
    if( value === "") {
        alert(" Write you task !");
    } else{
    listLi.innerHTML = `
        <div class="text">
            <div class="todo">${value}</div>
            <button class="delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="line"></div>
        `
    list.appendChild(listLi);
    input.value = "";
    }
}

//1. 추가 or enter 버튼 눌렀을때 
addBtn.addEventListener('click', appendList);
document.addEventListener('keydown', () => {
    if(window.event.keyCode === 13){
        appendList();
    }
});


//3. 삭제기능
