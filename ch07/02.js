// [7.2 할당 연산자]
// 할당 연산자(assignment aperator)는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당함


// [07-09]
var x;

x = 10;
console.log(x);     // 10

x += 5;     // x = x + 5
console.log(x);     // 15

x -= 5;     // x = x - 5
console.log(x);     // 10

x *= 5;     // x = x * 5
console.log(x);     // 50

x /= 5;     // x = x / 5
console.log(x);     // 10

x %= 5;     // x = x % 5
console.log(x);     // 0

var str = 'My name is ';

// 문자열 연결 연산자
str += 'Kim';       // str = str + 'Kim'
console.log(str);   // My name is Kim


// [07-10]
var x;

// 할당문은 표현식인 문임
console.log(x = 10);     // 10


// 할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가됨


// [07-11]
var a, b, c;

// 연쇄 할당, 오른쪽에서 왼쪽으로 진행
// 1. c = 0 : 0 으로 평가됨
// 2. d = 0 : 0 으로 평가됨
// 3. a = 0 : 0 으로 평가됨
a = b = c = 0;

console.log(a, b, c);       // 0 0 0