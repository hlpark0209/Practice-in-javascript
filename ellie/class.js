'use strict';

//  class 개념

class Counter {
    constructor (runEvery5Times){
        //0부터 시작
        this.counter = 0;
        this.callback = runEvery5Times;
    }   

    increase() {

        this.counter ++;
        console.log(this.counter);

        if(this.counter % 5 === 0 ) {

            // 'callback' 함수가 있다면 함수를 실행
            //this.callback(this.counter);
            if(this.callback){
                this.callback(this.counter);
            }
        }
        
    }
}

// 장점 : print 함수에서 내용 변경이 가능
function print (num){
    console.log(`${num} yo!`);
}
function alert (num){
    alert('hi');
}

//Counter 생성
const printCounter = new Counter(print);
const alertCounter = new Counter(alert);

printCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();


