// [8.3 반복문]


// [8.3.1 for문]
// 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행함


// [08-10]
for (var i = 0; i < 2; i++) {
    console.log(i);
}


// [08-11]
for (var i = 1; i >= 0; i--) {
    console.log(i);
}


// [08-12]
// 무한루프 : 코드 블록을 무한히 발복 실행하는 문
// for (;;) { ... }


// [08-13]
// 이중 중첩 for문
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}


// [8.3.2 while 문]
// for 문은 반복 횟수가 명활할 때 주로 사용하고 while 문은 반복 횟수가 불명확할 때 주로 사용함
// while 문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료함
// 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓을 구별함


// [08-14]
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행함
while (count < 3) {
    console.log(count);     // 0 1 2
    count++;
}


// [08-15]
// 무한루프
// while (true) { ... }


// [08-16]
var count = 0;

// 무한루프
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출함
    if (count === 3) break;
}   // 0 1 2


// [8.3.3 do ... while 문]
// 코드 블록을 먼저 실행하고 조건식을 평가함
// 코드 블록은 무조건 한 번 이상 실행됨


// [08-17]
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행함
do {
    console.log(count);     // 0 1 2
    count++;
} while (count < 3)