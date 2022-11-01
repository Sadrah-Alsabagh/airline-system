'use strict';
const events = require( './events.js' );
require( './system.js' );
require( './manager.js' );


events.on('new-flight',handleNewFlight);

function handleNewFlight(info){
    setInterval(()=> {
    console.log(`Pilot: flight with ID'${info.flightID}' took-off`);
    events.emit('took-off',info);},4000);
    setInterval(() => {
    console.log(`Pilot: flight with ID'${info.flightID}' arrived`);
    events.emit('arrived',info);
    },7000 );}






