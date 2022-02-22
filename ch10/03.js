// [10.3 프로퍼티]

// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성됨

// [10-03]
var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Kim'
    name: 'Kim',
    // 프로퍼티 키는 age, 프로퍼티 값은 29
    age: 29
};


// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값 : js에서 사용할 수 있는 모든 값


// [10-04]
// 프로퍼티 키는 식별자 네이밍 규칙을 따르지 않은 이름에는 반드시 따옴표를 사용해야 함
var person = {
    firstName: 'So-hee',        // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Kim'          // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person);


// [10-05]
var person = {
    firstName: 'So-hee',       
    //last-name: 'Kim'          // SyntaxError: Unexpected token -
};


// [10-06]
// 문자열, 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있음
// 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 함
var obj = {};
var key = 'hello';

// ES5 : 프로퍼티 키 동적 생성
obj[key] = 'world';

// ES6 : 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj);           // {hello: world}


// [10-07]
var foo = {
    '': ''      // 빈 문자열도 프로퍼티 키로 사용할 수 있음
};

console.log(foo);       // {'': ''}


// [10-08]
// 프로퍼티 키에 문자열이나 심벌 값 이외 값을 사용하면 암묵적 타입 변환을 통해 문자열이 됨
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo);       // {'0': 1, '1': 2, '2': 3}


// [10-09]
// var, function 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않으나
// 에러 발생 여지가 있으니 권장하지 않음
var foo = {
    var: '',
    function: ''
};

console.log(foo);       // {var: '', function: ''}


// [10-10]
// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선얺나 프로퍼티가 먼저 선언한 프로퍼티를 덮어씀
// 에러 발생 안함
var foo = {
    name: 'Kim',
    name: 'Lee'
};

console.log(foo);       // {name: 'Lee'}