// [8.4 break 문]
// 레이블 문, 반복문(for, for...in, for...of, while, do...while) 또는 switch 문의 코드 블록을 탈출함
// 그 외 break 문을 사용하면 SyntaxError(문법 에러) 발생함


// [08-18]
/*
if (true) {
    break;      // Uncaught SyntaxError: Illegal break statement
}
*/


// 레이블 문(label statement) 이란 식별자가 붙은 문을 말함
// switch 문의 case 문과 default 문도 레이블 문


// [08-19]
// foo 라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');


// [08-20]
// foo 라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo;  // foo 레이블 블록문을 탈출함
    console.log(2);
}

console.log('Done!');


// [08-21]
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        // i + j === 3 이면 outer 라는 식별자가 붙은 레이블 for 문을 탈출함
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');


// 레이블 문은 중첩된 for 문을 외부로 탈출할 때 유용하지만 그 외의 경우에는 일반적으로 권장하지 않음
// 가독성 x, 오류 발생 가능성 ↑


// [08-22]
var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있음
for (var i = 0; i < string.length; i++) {
    // 문자열의 개별 문자가 'l' dlaus
    if (string[i] === search) {
        index = i;
        break;          // 반복문을 탈출함
    }
}

console.log(index);     // 2

// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 함
console.log(string.indexOf(search));    // 2