module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response
	.say( 'Willkommen zu deinem ersten eigenen Skill.' )
	.reprompt( 'Welche Nummer darf ich für dich sagen?' )
	.shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
{
	"slots":{"number":"NUMBER"}
	,"utterances":[ 
	"sag die Nummer {1-100|number}"]
},
function(request,response) {
	console.log('Request: ', request)
	console.log('Response: ', response)

	var number = request.slot('number');
	response.say("Du hast nach der Nummer " + number + " gefragt.");
}
);

app.intent('anotherNumber',
{
	"slots":{"numberA":"NUMBER", "numberB":"NUMBER"}
	,"utterances":[ 
	"nummer aus {1-100|numberA} und {1-100|numberB}"]
},
function(request,response) {
	console.log('hey yo')
	var numberA = request.slot('numberA');
	var numberB = request.slot('numberB');
	response.say("Die glorreiche Nummer ist " + numberA + "" + numberB + " heute.");
}
);

module.exports = app;