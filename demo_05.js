var fs=require('fs');

var file=fs.readFileSync('./test.txt','utf-8');
console.log('同步读文件',file);

fs.writeFileSync('hello.txt','hello----同步写文件');

fs.readFile('test.txt','utf-8',function (err,data) {
  console.log('异步读文件',data);
})

fs.writeFile('hello2.txt','hello---异步写文件',function (err) {
  if(err){
    console.log(err);
  }
});