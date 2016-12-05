var ypos = 20;
var xpos = 20;
var width = 80;
var height = 80;
var playerX
var playerY
var foodX
var foodY
var foodX2
var foodY2
var food = document.getElementById("food");
var food2 = document.getElementById("food2");
var player = document.getElementById("player")
var foodEaten = 0;
var timeStart = Date.now()

function randomNumber(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener("keydown", function(e) {

  playerX = Number(player.getAttribute("x"))
  playerY = Number(player.getAttribute("y"))

  foodX = Number(food.getAttribute("x"))
  foodY = Number(food.getAttribute("y"))

  foodX2 = Number(food2.getAttribute("x"))
  foodY2 = Number(food2.getAttribute("y"))

  if (playerX > foodX2 && playerX < foodX2 + width && playerY > foodY2 && playerY < foodY2 + width) {
     food2.setAttribute("opacity", "0")
     var randx = randomNumber(0,800)
     document.getElementById("food2").setAttribute("x", randx)
     food2.setAttribute("opacity", "1")
   }

  if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + width) {
     food.setAttribute("opacity", "0")
     var randx = randomNumber(0,800)
     document.getElementById("food").setAttribute("x", randx)
     food.setAttribute("opacity", "1")
   }
 //up
 if (e.keyCode == 38) {
   document.getElementById("player").setAttribute("y", ypos-15)
   ypos = ypos-15
 }
 //left
 if (e.keyCode == 37) {
   document.getElementById("player").setAttribute("x", xpos-15)
   xpos = xpos-15
 }
 //down
 if (e.keyCode == 40) {
   document.getElementById("player").setAttribute("y", ypos+15)
   ypos = ypos+15
 }
 //right
 if (e.keyCode == 39) {
   document.getElementById("player").setAttribute("x", xpos+15)
   xpos = xpos+15
 }

 if(playerX > foodX2 && playerX < foodX2 + width && playerY > foodY2 && playerY < foodY2 + width){
   foodEaten = foodEaten + 1
   document.getElementById("score").textContent = foodEaten
 }
 if(playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + width){
   foodEaten = foodEaten + 1
   document.getElementById("score").textContent = foodEaten
 }

 if (e.keyCode == 80) {
   document.getElementById("screen").pauseAnimations()
 }

 if (e.keyCode == 79) {
   document.getElementById("screen").playAnimations()
 }

 if(foodEaten == 2){
   document.getElementById("screen").pauseAnimations()
   var timeStop = Date.now()
   var totalTime = timeStop - timeStart
   var seconds = totalTime/1000
   document.getElementById("totalTime").textContent = seconds

 }
})
