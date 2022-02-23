// [10.4 메서드]

// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부름
// 즉, 메서드는 객체에 묶여 있는 함수를 의미함


// [10-11]
var circle = {
    radius: 5,      // <- 프로퍼티

    // 원의 지름
    getDiameter: function() {       // <- 메서드
        return 2 * this.radius;     // this 는 circle을 가리킴
    }
};

console.log(circle.getDiameter());      // 10
