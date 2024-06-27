//Variables
var pre = "", pID, ppID = 0, turn = 0, t = "transform", flip =
"rotateY(180deg)", flipBack = "rotateY(0deg)", time, moves = 0, min = 0, sec =
0; n_items = 8;
window.onload = function () {
$("#on_load").html(`<center>
<div class = "instructions">
<h3 id = "welcome"> WELCOME <br></h3>
<button id = "start"
onclick="start()">START</button><br><br><br>
<span id ="rules"> * Rules to be followed *</span>
<br><br>
<img
src="https://i.pinimg.com/originals/b0/ee/48/b0ee488b065e6868e2106db01aeb2428.
gif" alt="Look Down GIF" width="30px" height="60px">
<ul>
<li>No more than two unmatched squares can be
turned over at any time</li>
<li>Matched squares cannot be turned over</li>
<li>Every click on a question mark that results in
a square being turned over must be counted as a "turn"</li>
<li>The game is over when all the squares are
matched and therefore visible on the board</li>
</ul>
</div>
</center>`);
}
function start() {
//hides first page components under id "on_load"
$("#on_load").fadeOut(500);
$("body").css("background-image",
"url('https://media.istockphoto.com/id/1263746475/vector/retro-style-landscape-with-blue-grid-background.jpg?s=612x612&w=0&k=20&c=dWtdXrHYClBEiThH6VkEqryN-qcsR5uUVzJbcQL45Kk=')");
$("body").css("background-size", "cover");
$("body").css("background-repeat", "no-repeat");
$("body").css("height", "100vh");
//$("body").css("margin", "0"); // Remove any default margins
$("#page2").html(`<center>
<br>
<div class="category">
<button id="choice"
onclick="Alph()">Alphabets</button><br>
<button id="choice"
onclick="Nums()">Numbers</button><br>
<button id="choice"
onclick="Fruits()">Fruits</button><br>
<button id="choice"
onclick="Vege()">Vegetables</button><br>
<button id="choice"
onclick="Emoji()">Emojis</button><br>
</div>
</center>`);
}
function getRandomInt(mini, maxi) {
return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}
function Alph() {
var em = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const index = []; // Array to store the selected numbers
while (index.length < 8) { // Repeat until 6 unique numbers are selected
const randomNum = getRandomInt(0, 25); // Get a random number between 0 and 25 (inclusive)
if (!index.includes(randomNum)) { // Check if the number is not already in the array
index.push(randomNum); // Add the number to the array if it's unique
}
}
//console.log(em);
Game(em, index);
}
function Nums() {
    var em = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const index = []; // Array to store the selected numbers
    while (index.length < 8) { // Repeat until 6 unique numbers are selected
    const randomNum = getRandomInt(0, 9); // Get a random number between 0 and 25 (inclusive)
    if (!index.includes(randomNum)) { // Check if the number is not already in the array
    index.push(randomNum); // Add the number to the array if it's unique
    }
    }
    //console.log(em);
    Game(em, index);
}
function Fruits() {
    var em = ["🍇", "🍎", "🍉", "🍊", "🍏", "🍒", "🥝", "🍌", "🍐", "🫐", "🍑", "🍍", "🥭", "🍓", "🍈"];
    const index = []; // Array to store the selected numbers
    while (index.length < 8) { // Repeat until 6 unique numbers are selected
    const randomNum = getRandomInt(0, 14); // Get a random number between 0 and 25 (inclusive)
    if (!index.includes(randomNum)) { // Check if the number is not already in the array
    index.push(randomNum); // Add the number to the array if it's unique
    }
    }
    //console.log(em);
    Game(em, index);
}
function Vege() {
    var em = ["🍅", "🍆", "🥕", "🧄", "🧅", "🥔", "🍄", "🍠", "🥑", "🥦", "🫛", "🥒", "🌶️"];
    const index = []; // Array to store the selected numbers
    while (index.length < 8) { // Repeat until 6 unique numbers are selected
    const randomNum = getRandomInt(0, 12); // Get a random number between 0 and 25 (inclusive)
    if (!index.includes(randomNum)) { // Check if the number is not already in the array
    index.push(randomNum); // Add the number to the array if it's unique
    }
    }
    //console.log(em);
    Game(em, index);
}
function Emoji() {
    var em = ["😀", "😄", "😁", "🥹", "😅", "😂", "🤣", "🥲", "😊", "😇", "🙂", "😍", "🙃",
    "😉", "😌", "🥰", "😝", "😋", "🤪", "🤓", "🥳", "😱", "🥺", "🤗", "🤭", "😨", "😈", "🥴", "😏", "😭", "😤", "😴", "🤔"];
    const index = []; // Array to store the selected numbers
    while (index.length < 8) { // Repeat until 6 unique numbers are selected
    const randomNum = getRandomInt(0, 32); // Get a random number between 0 and 25 (inclusive)
    if (!index.includes(randomNum)) { // Check if the number is not already in the array
    index.push(randomNum); // Add the number to the array if it's unique
    }
    }
    //console.log(em);
    Game(em, index);
}
function Game(em, index) {
$("#time").html("⌛Time: 00:00");
$("#moves").html(" Moves: 0");
time = setInterval(function () {
sec++;
if (sec == 60) {
min++;
sec = 0;
}
if (sec < 10)
$("#time").html("Time: 0" + min + ":0" + sec);
else
$("#time").html("Time: 0" + min + ":" + sec);
}, 1000);
var i = 0;
var items = [];
//Generating item array and shuffling it
while (i < 8) {
items.push(em[index[i]]);
i++;
}
var j = 0;
while (j < 8) {
items.push(em[index[j]]);
j++;
}
for (let i = 0; i < items.length; i++) {
const j = Math.floor(Math.random() * (i + 1));
[items[i], items[j]] = [items[j], items[i]];
}
//Creating table
$("table").html("");
var n = 1;
for (i = 1; i <= 4; i++) {
$("table").append("<tr>");
for (var j = 1; j <= 4; j++) {
$("table").append(`<td id='${n}' onclick="change(${n})">
<div class='inner'>
<div class='front'></div>
<div class='back'>
<p>${items[n - 1]}</p>
</div>
</div>
</td>`);
n++;
}
$("table").append("</tr>");
}
$("#page2").fadeOut(500);
}
//Function for flipping blocks
function change(x) {
//Variables
let i = "#" + x + " .inner";
let f = "#" + x + " .inner .front";
let b = "#" + x + " .inner .back";
//Dont flip for these conditions
if (turn == 2 || $(i).attr("flip") == "block" || ppID == x) { }
//Flip
else {
$(i).css(t, flip);
if (turn == 1) {
//This value will prevent spam clicking
turn = 2;
//If both flipped blocks are not same
if (pre != $(b).text()) {
setTimeout(function () {
$(pID).css(t, flipBack);
$(i).css(t, flipBack);
ppID = 0;
}, 1000);
}
//If blocks flipped are same
else {
n_items--;
$(i).attr("flip", "block");
$(pID).attr("flip", "block");
}
setTimeout(function () {
turn = 0;
//Increase moves
moves++;
$("#moves").html("Moves: " + moves);
}, 1150);
}
else {
pre = $(b).text();
ppID = x;
pID = "#" + x + " .inner";
turn = 1;
}
//If all pairs are matched
if (n_items == 0) {
clearInterval(time);
if (min == 0) {
time = `${sec} seconds`;
} else {
time = `${min} minute(s) and ${sec} second(s)`;
}
var completionMessage = `<center>
<div id="end">
<h2>Awesome!</h2>
<p style="font-size:35px;font-weight:bold;">You completed the game with ${moves} moves in ${time}.</p>
<p style="font-size:30px;font-weight: bold;">Score: 100<br/></p><br>
</div>
</center>`;
$("#end").html(completionMessage).fadeIn(750);
}
}
}