// [6.10 동적 타이핑]
// [6.10.1 동적 타입 언어와 정적 타입 언어]


// [06.22]
// c 변수에는 1바이트 정수 타입의 값(-128 ~ 127)만 할당할 수 있음
// char c;

// num 변수에는 4바이트 정수 타입의 값(-2,124,483,648 ~ 2,124,483,647)만 할당할 수 있음
// int num;


// js의 변수는 정적 타입 언어와 같이 미리 선언한 데이터 타입의 값만 할당할 수 있는 것이 아님
// 어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있음


// [06-23]
// typeof 연산자는 변수에 할당된 값의 데이터 타입을 반환함
var foo;
console.log(typeof foo);    // undefined

foo = 3;
console.log(typeof foo);    // number

foo = 'Hello';
console.log(typeof foo);    // string

foo = true;
console.log(typeof foo);    // boolean

foo = null;
console.log(typeof foo);    // object

foo = Symbol();
console.log(typeof foo);    // symbol

foo = {};
console.log(typeof foo);    // object

foo = [];
console.log(typeof foo);    // object

foo = function() {};
console.log(typeof foo);    // function


// js의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론: type inference)
// 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있음
// => 동적 타이핑(dynamic typing), 동적 타입(dynamic/weak type) 언어

// 변수는 타입을 갖지 않지만, 값은 타입을 갖음


// [6.10.2 동적 타입 언어와 변수]
// 단점 
//      변수 값 추적 어려움, 변수는 값을 확인하기 전에 타입을 확실 할 수 없음
//      개발자의 의도와 상관없이 js 엔진에 의해 암묵적으로 타입이 자동으로 변환되기도 함
//      => 유연성 ↑, 신뢰성 ↓

// 주의 사항
//      변수는 꼭 필요한 경우에 한해 제한적으로 사용
//      변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용 억제
//      전역 변수는 최대한 사용 x
//      변수보다는 상수를 사용해 값의 변경 억제
//      변수 이름은 변수의 목적, 의미를 파악할 수 있도록 네이밍