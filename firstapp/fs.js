var fs= require('fs');
/*fs.writeFile('testFs.txt','Welcome to my File',function(err){
    if(err) throw err;
    console.log('File created and having data')
}
)*/
/*fs.appendFile('myappend.txt','Welcome to my File>>>>\n',function(err){
    if(err) throw err;
    console.log('File created and having data')
}
)*/
/*fs.readFile('myappend.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
}
)*/
fs.unlink('testFs.txt',function(err){
    if(err) throw err;
    console.log('File Deleted')
}
)