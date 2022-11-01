'use strict';

const events = require( './events.js' );
require( './manager.js' );
require( './pilot.js' );


events.on('new-flight',handleNewFlight);

function handleNewFlight(info){
    console.log(
        `Flight {
            event:'new-flight',
            time: ${new Date().toLocaleString()},
            Details: {
            airline:'${info.airline}',
            flightID:'${info.flightID}',
            pilot:'${info.pilot}',
            destination:'${info.destination}',
           }
         }`    );}


events.on('took-off',handleTookOff);

function handleTookOff(info){
    console.log(
        `Flight {
            event:'new-flight',
            time: ${new Date().toLocaleString()},
            Details: {
            airline:'${info.airline}',
            flightID:'${info.flightID}',
            pilot:'${info.pilot}',
            destination:'${info.destination}',
          }
        }`    );}


events.on( 'arrived',handleArrived);

function handleArrived(info){
    console.log(
        `Flight {
            event:'new-flight',
            time: ${new Date().toLocaleString()},
            Details: {
            airline:'${info.airline}',
            flightID:'${info.flightID}',
            pilot:'${info.pilot}',
            destination:'${info.destination}',
          }
        }`    );}