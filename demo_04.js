var eat=function () {
  console.log('eat........');
}

//声明一个类
var Person=function (name) {
  this.name=name;
}

//类继承事件
var util=require('util')
var events=require('events')

util.inherits(Person,events.EventEmitter)

var XiaoMing=new Person('XiaoMing')

XiaoMing.on('event_eat',eat)
XiaoMing.emit('event_eat')