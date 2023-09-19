const process = require("process");

console.log(process.execPath);

//setTimeout(콜백함수,3000); --> non-blocking
//3초후에 'setTimeout!!' 출력

setTimeout(() => {
  console.log("settimeout!!");
}, 3000);

//nextTick(콜백함수) --> non-blocking //비동기식 처리중에 가장 우선순위가 높음
process.nextTick(() => {
  console.log("nextTick!!");
});
