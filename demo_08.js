//server.js
//web服务器相应html
var http=require('http')

var fs=require('fs')

function createServer() {
  var onRequest=function (request,response) {
    console.log('request received');
    response.writeHead(200,{'Content-Type':'text/html'})
    // var html=''
    // response.write()
    // response.end(html)
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8')
    myReadStream.pipe(response)
  }

  var server=http.createServer(onRequest)

  server.listen(3000)

  console.log('服务开启了');
}

exports.startServer=createServer;