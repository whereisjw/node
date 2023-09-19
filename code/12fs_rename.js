const fs = require("fs");

// fs에서는 3가지 방식으로 제공
//promise : rename(old, new)
//callback : rename(old,new,callback)

//synchoronous : renameSync(old, new)
/* try {
  fs.renameSync("./test.txt", "./test-new.txt");
  console.log("-- rename 성공-----");
} catch (error) {
  console.log("--error--");
  console.log(error);
}

console.log("---test---");
 */
//callback : rename(old,new,callback)

/* fs.rename("", "", () => {}); */

/* 
fs.rename("./test.txt", "./test-new.txt", (err) => {
  console.log(err);
});
 */

// promise : rename(old,new)
fs.promises
  .rename("./test.txt", "./test-new.txt")
  .then(() => console.log("----rename------"))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("-terminate-");
  });
