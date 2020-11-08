//Import node events model via require
var events = require('events');

//Create an eventEmitter = new events.EventEmitter();
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection sucessful.');

    //data_received event
    eventEmitter.emit('data_receiver');
    
}

//Bind the connection event with handler
