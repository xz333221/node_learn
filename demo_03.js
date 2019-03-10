var events=require('events');

var e=new events.EventEmitter();

e.on('event_name',function (e) {
  console.log('执行了'+e);
})

e.emit('event_name','hello')