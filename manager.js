'use strict';

const events = require( './events.js' );
require( './system.js' );
require( './pilot.js' );
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
 
setInterval(()=>{
    const info={
    airline:'Jordan Royal Airlines',
    flightID:uuidv4(),
    pilot:faker.name.fullName(),
    destination:`${faker.address.cityName(), faker.address.country()}`,
    };
    console.log(`Manager: new flight with ID '${info.flightID}'have been scheduled`);
    events.emit('new-flight',info);},10000);

events.on('arrived',(info)=>{console.log( `Manager: we\’re greatly thankful for the amazing flight, ${info.pilot}`)});