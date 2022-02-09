// [6.5 undefined 타입]
// var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화됨
// 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값


// [06-17]
var foo;
console.log(foo);       // undefined


// 자바스크립트 엔진이 변수를 초기화하는 데 사용하는 undefined 를 개발자가 의도적으로 변수에 할당한다면 
// undefined 의 본래 취지와 어긋나며, 혼란을 줄 수 있으므로 권장하지 않음