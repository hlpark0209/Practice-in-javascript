   'use strict';

    const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
    const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

    function printArguments(...args) {
        for (const arg of args) {
            console.log(arg);
        }
    }

// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사
    const mySnacks = [...snacks];
    const myDrinks = [...drinks];

    console.log(mySnacks);
    console.log(myDrinks);

    mySnacks.splice(2, 3); // index2번부터 3개 요소를 제거 
    myDrinks.splice(1);  // index1번 포함해서 이후의 모든 요소 제거



// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당
    const myChoice = [...mySnacks, ...myDrinks];
    console.log(myChoice);


// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달
    printArguments(...myChoice);







    console.log('---------------------');






// 객체 생성 연습
// 1. object literal
var myObj = {
    name: 'hylee',
    age : 26,
    buy (item){
    console.log(`${this.name} buys ${item.name}`);
  },    
};

const item = {
    name: 'skirt',
    price : 10000,
}

console.log(myObj);
myObj.buy(item);


// 2. Factory funtion

function create ( name, age ){
var myObj = {
    name: name,
    age : age,

    buy (item2){
        console.log(`${this.name} buys ${item2.name}`)
        },
    };
    return myObj;
}

const item2 = {
    name: 'skirt',
    price : 10000,
}


const user1 = create( 'sungbum', 31);
console.log(user1);
user1.buy(item2);




// 3. consturctor function
function Uer ( name, age ){
this.name = name;
this.age = age;
this.intro = function (){
    console.log( `${this.name} is ${this.age} years old. `);
    };
}

const user2 = new Uer( 'minhuck', 23 );
const user3 = new Uer( 'hyeryun', 29 );

console.log(user2.name);
user2.intro();
console.log(user3);
user3.intro();


// 4. class 
// constructor 안에 property정의, method는 밖에 정의
class List {
    constructor( name, type, price ){
        this.name = name;
        this.type = type;
        this.price = price;
    }
    contents (){
        console.log( ` ${this.name} is ${this.type} type and price is ${this.price} ` );
    }
}

const list1 = new List ('Book', 'A', 30000); 

list1.contents();



// 추상화 개념

class BankAccount {
    // 계좌 이름과 돈 프로퍼티 생성
    constructor(name, money) {
        this.holder = name;
        this.balance = money;
    }
    // 예금 메소드 : 잔금에 돈을 추가
    deposit(money) {
        this.balance += money;
    }

    // 인출 메소드
    withdraw(money) {
        // 잔금에서 뺴려고하는 돈의 금액이 적다면 Insufficient balance 출력
        if (this.balance - money < 0) {
        console.log('Insufficient balance');
        // 그렇지 않다면 잔돈에서 돈을 뺌
        } else {
        this.balance -= money;
        }
    }

    //계좌 이체 메소드
    transfer(money, anotherAccount) {
        //상대 계좌를 account로 정의
        const account = anotherAccount;
        // 만약 잔금이 없다면 Insufficient balance 출력
        if (this.balance - money < 0) {
        console.log('Insufficient balance');
        // 그렇지 않다면 잔금에서 돈을 뺴고, 상대 계좌에 추가금액을 이체
        } else {
        this.balance -= money;
        account.balance += money;
        }
    }
}