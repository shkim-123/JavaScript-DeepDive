// [7.9 지수 연산자]
// ES7 에서 도입됨, 좌항의 피연산자를 밑(base)으로, 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값 반환함


// [07-34]
2 ** 2;         // -> 4
2 ** 2.5;       // -> 5.65685424949238
2 ** 0;         // -> 1
2 ** -2;        // -> 0.25


// 지수 연산자 도입 이전에는 Math.pow 메서드를 사용함


// [07-35]
Math.pow(2, 2);     // -> 4
Math.pow(2, 2.5);   // -> 5.65685424949238
Math.pow(2, 0);     // -> 1
Math.pow(2, -2);    // -> 0.25


// [07-36]
2 ** 2 ** 2;        // -> 16
Math.pow(Math.pow(2, 2), 2);        // -> 16


// [07-37]
// -5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 괄호로 묶어야 함
(-5) ** 2;      // -> 25


// [07-38]
var num = 5;
num **= 2;      // -> 25


// [07-39]
2 * 5 ** 2;     // -> 50