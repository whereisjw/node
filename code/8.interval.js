//1초에 정수를 하나씩 증가하여 출력하는 함수 생성
let n = 1;
const interval = setInterval(() => {
  console.log(n++);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("----timeout---");
}, 6000);
