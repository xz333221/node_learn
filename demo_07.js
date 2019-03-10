var fs=require('fs');
var data='';
var stream=fs.createReadStream('test.txt');
var wStream=fs.createWriteStream('test2.txt')
stream.on('data',function (res) {
  console.log(res);
  data+=res;
  // wStream.write(res);
});
stream.on('end',function () {
  console.log(data);
  // wStream.write(data);
});
stream.on('error',function (err) {
  console.log(err.stack);
});

stream.pipe(wStream);

