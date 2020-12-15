var dog, dogImg, dogHappy;
var foodS = 20;
var database = firebase.database();

function preload() {
  dogImg = loadImage('images/dogImg.png');
  dogHappy = loadImage('images/dogImg1.png');
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(250, 250,  10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  getFoodCount();
}

function draw() {
  background(0, 0, 0);

  if(keyWentDown(UP_ARROW)) {
    dog.addImage(dogHappy);
    foodS -= 1;
    updateFood(foodS);
  }

  drawSprites();

  text("Press UP_ARROW to feed dogo", 170, 100);
}

function getFoodCount() {
  var foodRef = database.ref('food');
  foodRef.on("value", (data) => {
    food = data.val
  })
}

function updateFood(count) {
  database.ref('/').update({
    food: count
  })
}