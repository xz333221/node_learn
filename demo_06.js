var fs=require('fs');
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');
fs.unlink('hello.txt',function () {
  console.log('删除完成');
})