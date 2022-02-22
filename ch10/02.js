// [10.2 객체 리터럴에 의한 객체 생성]

// js 는 프로포타입 기반 객체지향 언어
// 객체 생성 방법 : 객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create 메서드, 클래스(ES6)

// 리터럴(literal) : 사람이 이해할 수 있는 문자, 약속된 기호를 사용하여 값을 생성하는 표기법
// 객체 리터럴 : 객체를 생성하기 위한 표기법, 중괄호({...}) 내에 0개 이상의 프로퍼티 정의
// 변수에 할당되는 시점에 js 엔진은 객체 리터럴을 해석해 객체 생성

// [10-01]
var person = {
    name: 'Kim',
    sayHello: function () {
        console.log(`Hello My name is ${this.name}.`);
    }
};

console.log(typeof person);
console.log(person);


// [10-02]
var empty = {};     // 빈 객체
console.log(typeof empty);  // object


// 주의! 객체 리터럴의 중괄호는 코드 블록을 의미하지 않음
// 객체 리터럴은 값으로 평가되는 표현식으로 닫는 중괄호 뒤에는 세미콜론을 붙임