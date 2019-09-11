var http = require('http');
var os = require('os');
var server = http.createServer(function(req,res){
res.write("<h3>Hii "+JSON.stringify(os.userInfo().username)+"You are using"+ os.platform() +"of "+os.arch()+ "Architecture");
res.end();

})
server.listen(1800);