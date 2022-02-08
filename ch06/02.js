// [6.2 문자열 타입]
// 텍스트 데이터를 나타내는 데 사용함
// 문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합
// js의 문자열은 원시 타입이며, 변경 불가능한 값(immutable value)


// [06-06]
// 문자열 타입
var string;
string = '문자열';      // 작은따옴표
string = "문자열";      // 큰따옴표
string = `문자열`;      // 백틱(ES6)
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";


// [06-07]
// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello;     // ReferenceError: hello is not defined
