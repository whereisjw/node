const { dir } = require("console");

console.log("logging....");

//log level
console.log("log"); //개발
console.info("info"); //정보,사용법
console.warn("warn"); //경고
console.error("error"); // 에러
//console 은 개발하는 서버에서는 사용이 가능하지만 실제 배포가 되는 서버에서는 삭제해야함(사용자를 위한것이 아님)

console.clear(); //로그 삭제

//assert
console.assert(2 === 2, "동일함"); // 조건식이 true 이면 로그출력x
console.assert(2 === 3, "동일하지않음"); // false인 경우만 출력됨

//print object

const student = { name: "홍길동", age: 20, color: { default: "red" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, color: false, depth: 0 });

//time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

//trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("function 3!!");
  console.trace();
}
f1();
