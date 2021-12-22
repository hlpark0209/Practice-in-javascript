'use strict';

/* class Counter{
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if ( this.counter % 5 === 0){
            this.callback(this.counter);
        }
    }
}

const coolCounter = new Counter(printSomthing) // object 생성
function printSomthing(num){
    console.log(`wow! ${num}`);
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
//coolCounter함수를 쓰는사람은 control할 수 없음
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();





// 코딩애플 내용정리 

function 기계(구멍, 구멍2){ //function 사용 -> 옜날 문법
    this.q = 구멍;
    this.w = 구멍2; 
}

var nunu = new 기계('consume');
var garen = new 기계('strike');

//this : 기계로부터 생성되는 object들 (instance)

class Hero{
    constructor(구멍){
        this.q = 구멍;
        this.w = 구멍2; 
    }
}
new Hero(); // object 생성 */







// 12/21 : eventlistener 
// ID 입력하기 버튼을 누르면 BOX에 해당 텍스트 구현

const btn1 = document.querySelector('.btn1');

// function pushBtn(e){
//     console.log(e);
// };

btn1.addEventListener('click', function(){
    console.log('click');
});

