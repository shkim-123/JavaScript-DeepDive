// [7.8 typeof 연산자]
// 피연산자의 데이터 타입을 문자열로 반환함
// null 을 반환하는 경우는 없으며, 함수의 경우 function 을 반환
// 7개의 데이터 타입과 정확히 일치하지 않음


// [07-31]
typeof '';              // -> string
typeof 1;               // -> number
typeof NaN;             // -> number
typeof true;            // -> boolean
typeof undefined;       // -> undefined
typeof Symbol();        // -> symbol
typeof null;            // -> object
typeof [];              // -> object
typeof {};              // -> object
typeof new Date();      // -> object
typeof /test/gi;        // -> object
typeof function() {};   // -> function


// typeof 연산자로 null 값 연산 시 object 반환하는데 주의 필요
// 값이 null 타입인지 확인할 때는 typeof 연산자가 아닌 일치 연산자(===) 사용하자


// [07-32]
var foo = null;

typeof foo === null;    // -> false
foo === null;           // -> true


// 선언하지 않은 식별자를 typeof 연산자로 연산하면 ReferenceError 가 발생하지 않고 undefined 를 반환함


// [07-33]
// undeclared 식별자를 선언한 적 없음
typeof undeclared;      // -> undefined