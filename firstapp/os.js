var os = require('os');
console.log('platform>>'+ os.platform())
console.log('Architecture>>'+ os.arch())
console.log('Hostname>>'+ os.hostname())
console.log('UserInfo>>'+ JSON.stringify(os.userInfo().username))


