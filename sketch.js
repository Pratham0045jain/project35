var database;
var voterCount;
var appState;

var app;
var form;
var voter;


function setup() {
  database = firebase.database();
  createCanvas(500,500);

  app = new App();
  app.getState();
  app.start();

  console.log("hello");
  
}

function draw() {
 background("white");
 console.log("hello");
}