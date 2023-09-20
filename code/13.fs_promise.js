const fs = require("fs").promises;

fs.promises;

//test.txt 파일을 읽어 콘솔에 출력
fs.readFile("./test.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);
// test.txt 파일에 문자열 덮어쓰기
fs.writeFile("./test.txt", "hello~ javascript coders!!")
  .then(console.log("--write complete ---"))
  .catch(console.error);
// 프로미스라서 둘다 wep api에 던져지고 먼저실행 할 write 부터 task queue에서 실행
//test.txt 파일에 데이터 추가하기
fs.appendFile("./test.txt", "hello~ javascript coders!!" + os.EOL)
  .then(console.log("--write complete ---"))
  .catch(console.error);
//test.txt 파일을 복사하기
fs.copyFile("./test.txt", "./test-copy.txt").catch(console.error);
// sub-folder 생성
fs.mkdir("sub-folder").then(console.log("???")).catch(console.error);
