// [8.5 continue 문]
// 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킴
// break 문처럼 반복문을 탈출하지 않음


// [08-23]
var string = 'Hello World.';
var search = 'l';
var count = 0;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있음
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동함
    if (string[i] !== search) continue;
    count++;        // continue 문이 실행되면 이 문은 실행되지 않음
}

console.log(count);     // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 함
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);   // 3


// [08-24]
for (var i = 0; i < string.length; i++) {
    // 'l' 이면 카운트를 증가시킴
    if (string[i] === search) count++;
}


// if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하고 가독성 좋음
// if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문을 사용하는 편이 가독성 좋음


// [08-25]
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 함
for (var i = 0; i < string.length; i++) {
    // 'l' 이면 카운트 증가
    if (string[i] === search) {
        count++;
        // code
        // code
        // code
    }
}

// contune 문을 사용하면 if 문 밖에 코드를 작성할 수 있음
for (var i = 0; i < string.length; i++) {
    // 'l' 이 아니면 카운트를 증가시키지 않음
    if (string[i] !== search) continue;
    
    count ++;
    // code
    // code
    // code
}