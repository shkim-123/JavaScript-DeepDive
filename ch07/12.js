// [7.12 연산자 우선순위]


/*
    1   ()
    2   new(매개변수 존재), ., [](프로퍼티 접근), ()(함수 호출), ?.(옵셔널 체이닝 연산자)
    3   new(매개변수 미존재)
    4   x++, x--
    5   !x, +x, -x, ++x, --x, typeof, delete
    6   **(이항 연산자 중에서 우선순위가 가장 높음)
    7   *, /, %
    8   +, -
    9   <, <=, >, >=, in, instanceof
    10  ==, !=, ===, !==
    11  ??(null 병합 연산자)
    12  &&
    13  ||
    14  ? ... : ...
    15  할당 연산자(=, +=, -=, ...)
    16  ,
*/


// [07-41]
// 그룹 연산자를 사용하여 우선순위를 명시적으로 조절
10 * (2 + 3);       // -> 50