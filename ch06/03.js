// [6.3 템플릿 리터럴]
// ES6부터 도입, 런타임에 일반 문자열로 변환되어 처리됨
// ``(백틱)을 사용해 표현


// [06-08]
var template = `Template literal`;
console.log(template);      // Template literal


// [6.3.1 멀티라인 문자열]
// 일반 문자열 내에서는 줄바꿈(개행) 허용 X 
// => 백슬래시(\)로 시작하는 이스케이프 시퀀스(escape sequence)를 사용해야 함


// [06-09]
// var str = 'Hello
// world.';
// SyntaxError: Invalid or unexpected token


// [06-10]
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);


// [06-11]
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template);


// [6.3.2 표현식 삽입]
// 문자열은 문자열 연산자 +를 사용해 연결할 수 있음
// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작함
// 그 외의 경우는 덧셈 연산자로 작동


// [06-12]
var first = 'sohee';
var last = 'kim';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');  // My name is sohee kim.


// [06-13]
// ES6: 표현식 삽입, ${}으로 표현식을 감싸는 형태.
console.log(`My name is ${first} ${last}.`);     // My name is sohee kim.


// [06-14]
// 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입됨
console.log(`1 + 2 = ${1 + 2}`);        // 1 + 2 = 3


// [06-15]
// 표현식 삽입은 반드시 템플릿 리터럴 내에서 사용, 아닌 경우 문자열로 취급됨
console.log('1 + 2 = ${1 + 2}');        // 1 + 2 = ${1 + 2}