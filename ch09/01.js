// [9장 타입 변환과 단축 평가]

// [9.1 타입 변환이란?]
// 명시적 타입 변환(explicit coercion) / 타입 캐스팅(type casting) : 개발자가 의도적으로 값의 타입을 변환하는 것


// [09-01]
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅함
var str = x.toString();
console.log(typeof str, str);       // string 10

// x 변수의 값이 변경된 겂은 아님
console.log(typeof x, x);           // number 10


// 암묵적 타입 변환(implicit coercion) / 타입 강제 변환(type coercion) : 표현식을 평가하는 도중에 js 엔진에 의해 암묵적으로 타입이 자동 변환되는 것


// [09-02]
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열 생성
var str = x + '';
console.log(typeof str, str);       // string 10

// x 변수의 값이 변경된 것은 아님
console.log(typeof x, x);           // number 10


// 원시 값은 변경 불가능한 값(immutable value)이므로 변경할 수 없음
// 타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것