// [7.5 논리 연산자]
// 논리 연산자(logical operator)는 우항과 좌항의 피연산자(부정 논리 연산자의 경우 우항의 피연산자)를 논리 연산자라 함


// [07-25]
// 논리합(||) 연산자
true || true;       // -> true
true || false;      // -> true
false || true;      // -> true
false || false;     // -> false

// 논리곱(&&) 연산자
true && true;       // -> true
true && false;      // -> false
false && true;      // -> false
false && false;     // -> false


// 논리 부정(!) 연산자
!true;      // -> fasle
!false;     // -> true


// [07-26]
// 암묵적 타입 변환
!0;         // -> true
!'Hello';   // -> false


// 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가됨


// [07-27]
// 단축 평가
'Cat' && 'Dog';     // -> 'Dog'


// [07-28]
// 드 모르간의 법칙
!(x || y) === (!x && !y);
!(x && y) === (!x || !y);