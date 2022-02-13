// [7.4 삼항 조건 연산자]
// 조건식 ? 조건식이 true 일 때 반환할 값 : 조건식이 false 일 때 반환할 값


// [07-21]
var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환됨
var result = x % 2 ? '홀수' : '짝수';

console.log(result);


// [07-22]
var x = 2, result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환됨
if (x % 2) result = '홀수';
else result = '짝수';

console.log(result);    // 짝수


// 삼항 연산자와 if ... else 문은 값처럼 사용할 수 있는지


// [07-23]
var x = 10;

// if ... else 문은 표현식이 아닌 문으로, 값처럼 사용할 수 없음
// var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; }
// SyntaxError: Unexpected token 'if'


// [07-24]
var x = 10;
// 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문으로, 값처럼 사용할 수 있음
var result = x % 2 ? '홀수' : '짝수';
console.log(result);        // 짝수