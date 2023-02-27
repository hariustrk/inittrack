const express = require('express')
const path = require("path");
var bodyParser = require('body-parser');
const app = express()
const port = 3000
const filedata = require('./fileio')();

app.set('Init Tracker', 'Init Tracker')
app.use(bodyParser.json()); // support json encoded bodies

/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */
app.use("/",express.static('public'));

app.use("/initiative",(req,res)=>{ 
  var result = getInitiative(req);
  console.log(result);
  res.setHeader('Content-Type', 'application/json');
  res.json({list:result});
  res.end();

});

app.use('/addplayer',(req,res)=> {
  addPlayer(req);
  res.setHeader('Content-Type', 'application/json');
  res.json(true);
  res.end();
});

app.use('/remove',(req,res)=> {
  if (req.query.all=="true") {
    clearPlayers();
  } else {
    removePlayer(req);
  }  
  res.status(200);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//----------------------------------------------------------------------
//Functions
function addPlayer(req) {
  var playerName = req.query.name;
  var playerInit = req.query.init;
  players = get(req);
  console.log(players);
  if (players===null) {
    players =[];
  }
  var idx = players.findIndex(p=>p.name.toLowerCase()==playerName.toLowerCase());
  if (idx>-1) {
    players.splice(idx,1);
  }

  players.push({name:playerName, init: playerInit});
  save(players);
  console.log("Add player " + playerName + " with initiative " + playerInit);
}

function removePlayer(req) {
  var playerName = req.query.name;
  
  players = get(req);
  console.log(players);
  if (players===null) {
    players =[];
  }
  var idx = players.findIndex(p=>p.name.toLowerCase()==playerName.toLowerCase());
  if (idx>-1) {
    players.splice(idx,1);
  }
  console.log("Delete player " + playerName);
  save(players);
  
}

function clearPlayers(req) {
  players = [];
  save(players);
  console.log("Clear Players list");
}

function getInitiative(req) {
  console.log("Get ")
  var result = get();
  return result;
}