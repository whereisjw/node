```
console.log("code 1");
setTimeout(() => {
  console.log("settimeout");
}, 0);
console.log("code 2");
setImmediate(() => {
  console.log("setImmediate!");
});
console.log("code 3");
process.nextTick(() => {
  console.log("nexttick");
});
```

nexttick은 비동기 처리중에 가장 우선순위가 높으므로 nexttick이 settimeout과setimmediate보다 앞에 출력이 된다

```
const fs = require("fs");

// fs에서는 3가지 방식으로 제공
//promise : rename(old, new)
//callback : rename(old,new,callback)

//synchoronous : renameSync(old, new)
fs.renameSync("./test.txt", "./test-new.txt");
```
