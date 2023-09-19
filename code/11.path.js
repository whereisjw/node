const path = require("path");

//윈도우 : c:\dev\node\code\test.js

/* path.dirname + "/image";(X) */
console.log(__dirname); //global에  있는 디렉토리
console.log(__filename); //global에있는파일

console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//dirname
console.log(path.dirname(__dirname));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename); // 오브젝트 형태로 출력
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed); //string형태로 변환
console.log(str);

//normalize
console.log(path.normalize("./folder/////sub"));

// join
console.log(__dirname + "/" + "image"); //기존 +기호써서 사용하는것은 권장하지 않음
console.log(__dirname + path.sep + "image");
console.log(__diranme + path.join + "image");
console.log(__dirname, "image", "test");
