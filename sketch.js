var canvas;
var backgroundImage, jet1_img, jet2_img, sky;
var fuelImage, powerCoinImage, lifeImage, track ;
var database, gameState;
var form, player, playerCount;
var allPlayers, jet1, jet2, fuels, powerCoins;
var jets = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  jet1_img = loadImage("assets/Jet1.png");
  jet2_img = loadImage("assets/Jet2.png");
  sky = loadImage("../assets/background.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  track = loadImage("./assets/sky.jpeg");
  track.scale = 0.6;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





