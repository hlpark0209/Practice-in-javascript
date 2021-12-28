'use strict';

const list = document.querySelector('.list');

const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
    }, {
    title: '쓰레기 분리수거',
    isClear: false,
    }, {
    title: '고양이 밥주기',
    isClear: true,
    }, {
    title: '독서하기',
    isClear: false,
    }, {
    title: '영어 공부하기',
    isClear: false,
    }
];

// 여기에 코드를 작성해 주세요.
// data.forEach(function(el, index) {
//     console.log( `${index}. ${el.title}` );
//     list.classList.add('item');

//     list.innerHTML =` <li>${index}. ${el.title}</il> `;

// });

data.forEach( (todo, index) => {
    //console.log(todo, index);
    const li = document.createElement('li'); // li 생성
    console.log(li);
    
    todo.isClear
    ?li.classList.add('item', 'done') // isClear가 있으면 item과 done class 추가
    : li.classList.add('item'); // isClear가 있으면 item class만 추가

    li.innerHTML =
    `${ index + 1 }. ${todo.title}`; // text 삽입
    list.append(li); // 요소 추가

    
});



