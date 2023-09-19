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

#### nexttick은 비동기 처리중에 가장 우선순위가 높으므로 nexttick이 settimeout과setimmediate보다 앞에 출력이 된다

```
const fs = require("fs");

// fs에서는 3가지 방식으로 제공
//promise : rename(old, new)
//callback : rename(old,new,callback)

//synchoronous : renameSync(old, new)
fs.renameSync("./test.txt", "./test-new.txt");
```

```
const fs = require("fs").promises;

fs.promises;

//test.txt 파일을 읽어 콘솔에 출력
fs.readFile("./test.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);

//test.txt 파일에 문자열 덮어쓰기
fs.writeFile("./test.txt", "hello~ javascript coders!!")
  .then(console.log("--write complete ---"))
  .catch(console.error);
```

프로미스라서 둘다 wep api에 던져지고 먼저실행 할 write 부터 task queue에서 실행
