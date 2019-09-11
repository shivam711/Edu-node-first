var event = require('events');
var myevents = new event.EventEmitter();
myevents.on('health', function(){
    console.log('server is healthy')

})
myevents.emit('health')