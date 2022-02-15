// [9.2 암묵적 타입 변환]

// [09-03]
// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2;       // -> '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10';       // -> 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0;     // -> true
if (1) {}


// [9.2.1 문자열 타입으로 변환]

// [09-04]
1 + '2';        // -> '12'


// + 연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작함
// 문자열 연결 연산자의 모든 피연산자는 코드의 문맥상 모두 문자열 타입이어야 함


// [09-05]
// 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환됨
`1 + 1 = ${1 + 1}`;     // -> '1 + 1 = 2'


// [09-06]
// 숫자 타입
0 + '';                 // -> '0'
-0 + '';                // -> '0'
1 + '';                 // -> '1'
-1 + '';                // -> '1'
NaN + '';               // -> 'NaN'
Infinity + '';          // -> 'Infinity'
-Infinity + '';         // -> '-Infinity'

// 불리언 타입
true + '';              // -> 'true'
false + '';             // -> 'false'

// null 타입
null + '';              // -> 'null'

// undefined 타입
undefined + '';         // -> 'undefiend'

// 심벌 타입
// (Symbol()) + '';        // -> TypeError: Connot convert a Symbol value to a string

// 객체 타입
({}) + '';              // -> '[object Object]'
Math + '';              // -> '[object Math]'
[] + '';                // ->  ''
[10, 20] + '';          // -> '10,20'
(function(){}) + '';    // -> 'function(){}'
Array + '';             // -> 'function Array() {[native code]}'


// [9.2.2 숫자 타입으로 변환]

// [09-07]
1 - '1';            // -> 0
1 * '10';           // -> 10
1 / 'one';          // -> NaN


// 산술 연산자의 역할은 숫자 값을 만드는 것
// 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 함
// 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN


// [09-08]
'1' > 0;            // -> true


// 비교 연산자의 역할은 불리언 값을 만드는 것
// > 비교 연산자는 피연산자의 크기를 비교하므로 모든 피연산자는 코드의 문맥상 모두 숫자 타입이어야 함
// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행함


// [09-09]
// 문자열 타입
+'';                // -> 0
+'0';               // -> 0
+'1';               // -> 1
+'string';          // -> NaN

// 불리언 타입
+true;              // -> 1
+false;             // -> 0

// null 타입
+null;              // -> 0

// undefined 타입
+undefined;         // -> NaN

// 심벌 타입
//+Symbol();          // -> TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{};                // -> NaN
+[];                // -> 0
+[10, 20];          // -> NaN
+(function(){});    // -> NaN


// [9.2.3 불리언 타입으로 변환]

// [09-10]
if ('') console.log(x);


// js 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환됨


// [09-11]
if ('')     console.log('1');
if (true)   console.log('2');
if (0)      console.log('3');
if ('str')  console.log('4');
if (null)   console.log('5');

// 2 4


// js 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값) 으로 구분함
// false로 평가되는 Falsy 값 : false, undefined, null, 0, -0, NaN, ''(빈 문자열)


// [09-12]
// 아래의 조건문은 모두 코드 불록을 실행함
if (!false)     console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null)      console.log(null + ' is falsy value');
if (!0)         console.log(0 + ' is falsy value');
if (!NaN)       console.log(NaN + ' is falsy value');
if (!'')        console.log('' + ' is falsy value');


// Falsy 값 외의 모든 값은 모두 true로 평가되는 Truthy 값


// [09-13]
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환함
function isFalsy(v) {
    return !v;
}

// 전달받은 인수가 Truty 값이면 true, Falsy 값이면 false를 반환함
function isTruthy(v) {
    return !!v;
}

// 모두 true를 반환함
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true를 반환함
isTruthy(true);
isTruthy('0');      // 빈 문자열이 아닌 문자열은 Truthy 값임


// 함수 : 어떤 작업을 수행하는 데 필요한 문들의 집합을 정의한 코드 블록