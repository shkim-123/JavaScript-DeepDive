// [6.6 null 타입]
// 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미
// 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행할 것


// [06-18]
var foo = 'Lee';

// 이전 참조를 제거. foo 변수는 더 이상 'Lee'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;

