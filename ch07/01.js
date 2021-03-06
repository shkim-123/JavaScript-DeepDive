// [7장 연산자]


// [07-01]
// 산술 연산자
5 * 4 // -> 20

// 문자열 연결 연산자
'My name is ' + 'Kim' // -> 'My name is Kim'

// 할당 연산자
color = 'red'   // -> 'red'

// 비교 연산자
3 > 5       // -> false

// 논리 연산자
true && false   // -> false

// 타입 연산자
typeof 'Hi'     // -> string 


// [7.1 산술 연산자]
// 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만듦
// 산술 연산이 불가능한 경우, NaN 을 반환함


// [7.1.1 이항 연산자]
// 이항(binary) 산술 연산자는 2개의 피연산자를 산술 연산하여 숫자 값을 만듦
// 어떤 산술 연산을 해도 피연산자의 값이 바뀌는 경우는 없고 언제나 새로운 값을 만듦


// [07-02]
5 + 2;  // -> 7
5 - 2;  // -> 3
5 * 2;  // -> 10
5 / 2;  // -> 2.5
5 % 2;  // -> 1


// [7.1.2 단항 산술 연산자]
// 단항(unary) 산술 연산자는 1개의 피연산자를 산술 연산하여 숫자 값을 만듦
// 증가/감소(++/--) 연산자는 피연산자의 값을 변경하는 부수 효과가 있음


// [07-03]
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄짐
x++;        // x = x + 1
console.log(x);     // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄짐
x--;        // x = x - 1
console.log(x);     // 1


// 피연산자 앞에 위치한 전위 증가/감소 연산자(prefix increment/decrement operator)는 먼저 피연산자의 값을 증가/감소시킨 후, 다른 연산 수행함
// 피연산자 뒤에 위치한 후위 증가/감소 연산자(postfix increment/decrement operator)는 먼저 다른 연산을 수행한 후, 피연산자의 값을 증가/감소 시킴


// [07-04]
var x = 5, result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x);     // 5 6

// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x);     // 7 7

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x);     // 7 6

// 선감소 후할당(prefix decrement operator)
result = --x;
console.log(result, x);     // 5 5


// [07-05]
// 아무런 효과가 없다
+10;            // -> 10
+(-10);         // -> -10


// 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환함
// 피연산자를 변경하는 것이 아닌 숫자 타입으로 변환한 값을 생성해서 반환함


// [07-06]
var x = '1';

// 문자열을 숫자로 타입 변환함
console.log(+x);    // 1
// 부수 효과가 없음
console.log(x);     // "1"

// 불리언 값을 숫자로 타입 변환함
x = true;
console.log(+x);    // 1
// 부수 효과는 없음
console.log(x);     // true

x = false;
console.log(+x);    // 0
console.log(x);     // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN으로 반환함
x = 'Hello';
console.log(+x);    // NaN
// 부수 효과는 없음
console.log(x);     // "Hallo"


// - 단한 연산자는 피연산자의 부호를 반전한 값을 반환함
// 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환함
// 피연산자를 변경하는 것이 아닌 부호를 반전한 값을 생성해 반환함


// [07-07]
// 부호 반전
-(-10);     // -> 10

// 문자열을 숫자로 타입 변환함
-'10';      // -> -10

// 불리언 값을 숫자로 타입 변환함
-true;      // -> -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN 으로 반환함
-'Hello';   // -> NaN


// [7.1.3 문자열 연결 연산자]
// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작함


// [07-08]
// 문자열 연결 연산자
'1' + 2;        // -> '12'
1 + '2';        // -> '12'

// 산술 연산자
1 + 2;          // -> 3

// true는 1로 타입 변환함
1 + true;       // -> 2

// false는 0 으로 타입 변환함
1 + false;      // -> 1

// null은 0으로 타입 변환함
1 + null;       // -> 1

// undefined는 숫자로 타입 변환되지 않음
+undefined;     // -> NaN
1 + undefined;      // -> NaN


// 1 + true 연산 시 js 엔진은 암묵적으로 불리언 타입의 값인 ture를 숫자 타입인 1로 타입을 강제로 변환한 후 연산을 수행함
// 암묵적 타입 변환(Implicit coercion), 타입 강제 변환(type coercion)