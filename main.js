var Cleverbot = require('./lib/cleverbot');
var htmlStr = require('html-strings');
var escape = htmlStr.escape;
var unescape = htmlStr.unescape;

var cleverBotA = new Cleverbot();
var cleverBotB = new Cleverbot();

function cleverA(msg){
  Cleverbot.prepare(function(){
    cleverBotA.write(msg, function (response) {
         console.log( "Clever A: "+unescape(response.message));
         cleverB(response.message);
    });
  });
}

function cleverB(msg){
  Cleverbot.prepare(function(){
    cleverBotB.write(msg, function (response) {
         console.log( "Clever B: "+unescape(response.message) );
         cleverA(response.message);
    });
  });
}


var fraseinicial = "Fala alguma coisa";
cleverA(fraseinicial);
