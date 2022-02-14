// [8.2 조건문]
// 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정함
// 조건식은 불리언 값으로 평가될 수 있는 표현식임


// [8.2.1 if ... else 문]


// [08-02]
var num = 2;
var kind;

// if 문
if (num > 0) {
    kind = '양수';      // 음수를 구별할 수 없음
}
console.log(kind);      // 양수

// if ... else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';      // 0은 음수가 아니다.
}
console.log(kind);      // 양수

// if ... else 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind);      // 양수


// [08-03]
var num = 2;
var kind;

if (num > 0)        kind = '양수';
else if (num < 0)   kind = '음수';
else                kind = '영';

console.log(kind);      // 양수


// [08-04]
// x 가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당함
var x = 2;
var result;

if (x % 2) {            // 2 % 2는 0, 0 은 false 로 암묵적 강제 변환됨
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result);    // 짝수


// [08-05]
var x = 2;

// 0은 false 로 취급됨
var result = x % 2 ? '홀수' : '짝수';
console.log(result);        // 짝수


// [08-06]
var num = 2;

// 0은 false로 취급됨
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);          // 양수


// [8.2.2 switch 문]


// [08-07]
// 월을 영어로 변환함 (11 -> 'November')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}

console.log(monthName);     // Invalid month


// 폴스루(fall through) : switch 문을 탈출하지 않고 switch 문이 끝날 때까지 이후의 모든 case 문과 default 문을 실행하는 것


// [08-08]
// 월을 영어로 변환함 (11 -> 'November')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';     break;
    case 2: monthName = 'February';    break;
    case 3: monthName = 'March';       break;
    case 4: monthName = 'April';       break;
    case 5: monthName = 'May';         break;
    case 6: monthName = 'June';        break;
    case 7: monthName = 'July';        break;
    case 8: monthName = 'August';      break;
    case 9: monthName = 'September';   break;
    case 10: monthName = 'October';    break;
    case 11: monthName = 'November';   break;
    case 12: monthName = 'December';   break;
    default: monthName = 'Invalid month';
}

console.log(monthName);     // November


// [08-09]
var year = 2000;        // 2000년은 윤년으로 2월이 29일임
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어 떨어지는 해 (2000, 2004, 2008, 2012, 2016, 2020 ...) -> 윤년
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200, ...) -> 평년
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800) -> 윤년
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}
console.log(days);      // 29