// [9.4 단축 평가]

// [9.4.1 논리 연산자를 사용한 단축 평가]

// [9.17]
'Cat' && 'Dog';     // -> 'Dog'


// 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true 로 평가될 때 true 를 반환함
// 논리곱 연산자는 좌항에서 우항으로 평가가 진행됨
// 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환함


// [09-18]
'Cat' || 'Dog';     // -> 'Dog'


// 논리합(||) 연산자는 두 개의 피연산자 중 하나만 true 로 평가되어도 true 를 반환함
// 논리합 연산자도 좌항에서 우항으로 평가가 진행됨
// 논리 연산의 결과를 결정한 첫 번째 연산자, 즉 문자열 'Cat'을 그대로 반환함

// 단축 평가(short-circuit evaluation) : 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환함
// 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말함


// [09-19]
// 논리합(||) 연산자
'Cat' || 'Dog';     // -> 'Cat'
false || 'Dog';     // -> 'Dog'
'Cat' || false;     // -> 'Cat'

// 논리곱(&&) 연산자
'Cat' && 'Dog';     // -> 'Dog'
false && 'Dog';     // -> false
'Cat' && false;     // -> false


// [09-20]
var done = true;
var message = '';

// 주어진 조건이 true 일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능함
// done 이 true 라면 message에 '완료'를 할당
message = done && '완료';
console.log(message);       // 완료


// [09-21]
var done = false;
var message = '';

// 주어진 조건이 false 일 때
if (!done) message = '미완료';

// if 문은 단축 평가로 대체 가능함
// done 이 false 라면 message 에 '미완료'를 할당
message = done || '미완료';
console.log(message);       // 미완료


// [09-22]
var done = true;
var message = '';

// if...else 문
if (done) message = '완료';
else      message = '미완료';
console.log(message);       // 완료

// if...else 문은 삼항 조건 연산자로 대체 가능함
message = done ? '완료' : '미완료';
console.log(message);       // 완료


// [09-23]
// 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined 인 경우 객체의 프로퍼티를 참조하면 타입 에러 발생
var elem = null;
// var value = elem.value;         // TypeError: Cannot read property 'value' of null


// [09-24]
var elem = null;
// elem이 null이나 undefined 와 같은 Falsy 값이면 elem 으로 평가되고
// elem 이 Truthy 값이면 elem.value 로 평가됨
var value = elem && elem.value;     // -> null


// [09-25]
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();          // -> 0
getStringLength('hi');      // -> 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength();          // -> 0
getStringLength('hi');      // -> 2


// [9.4.2 옵셔널 체이닝 연산자]
// ES11에서 도입된 옵셔널 체이닝(optional chaining) 연산자 ?.는 
// 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어감


// [09-26]
var elem = null;

// elem 이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어감
var value = elem?.value;
console.log(value);     // undefined


// [09-27]
var elem = null;

// elem 이 Falsy 값이면 elem으로 평가되고, elem이 Truthy 값이면 elem.value 로 평가됨
var value = elem && elem.value;
console.log(value);         // null


// [09-28]
var str = '';

// 문자열의 길이(length)를 참조함
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못함
console.log(length);        // ''


// [09-29]
var str = '';

// 문자열의 길이(length)를 참조함. 이때 좌항 피연산자가 false 로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어감
var length = str?.length;
console.log(length);        // 0


// [9.4.3 null 병합 연산자]
// ES11에서 도입된 null 병합(nullish coalescing) 연산자 ?? 는
// 좌항의 피연산자가 null 또는 undefined 인 경우 우항의 피연한자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환함


// [09-30]
// 좌항의 피연산자가 null 또는 undefined 이면 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환함
var foo = null ?? 'default string';
console.log(foo);       // 'default string'


// [09-31]
// Falsy 값인 0 이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있음
var foo = '' || 'default string';
console.log(foo);       // 'default string'


// [09-32]
// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined 가 아니면 좌항의 피연산자를 반환함
var foo = '' ?? 'default string';
console.log(foo);       // ''