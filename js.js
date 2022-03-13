let canvWidth = 1100;
let canvHeigth = 600;

let toLeftRed;
let toRightRed;
let toUpRed;
let toDownRed;

let toLeftOrange;
let toRightOrange;
let toDownOrange;
let toUpOrange;

let radRed = 30;
let radOrange = 120;

let speedRed_L = 0;
let speedRed_R = 0;
let speedRed_D = 0;
let speedRed_U = 0;
let speedOrange_L = 0;
let speedOrange_R = 0;
let speedOrange_D = 0;
let speedOrange_U = 0;

let distance;
let inversionX,inversionY;

let circleSound;

let buttonRed;// for correct walls collisions
let buttonOrange;

let elemRED;
let elemORANGE;

let red = {
    x: 350,
    y: 300,
    color: 'red'
}

let orange = {
    x: 230,
    y: 200
}


// -------------------------------------------------- sound -----------------------------------------------
let switcher = 1;
function soudCircle(){  
    if (distance <= radOrange + radRed){
        if (switcher === 1) {
        document.getElementById('soundOne').play();
        document.getElementById('soundOne').currentTime = 0.0;
        switcher = 2;
        }
        else if (switcher === 2) {   
        document.getElementById('soundOne1').play();
        document.getElementById('soundOne1').currentTime = 0.0;
        switcher = 3;
        }
        else if (switcher === 3) {
        document.getElementById('soundOne2').play();
        document.getElementById('soundOne2').currentTime = 0.0;
        switcher = 1;
        }
        
        console.log('beep!!!');
    }
}
// ------------------------------------------------ update unput ---------------------------------------
(function(){
    elemRED = radRed;
    elemORANGE = radOrange;
    document.getElementById('RadRed').innerHTML= elemRED;
    document.getElementById('RadOrange').innerHTML= elemORANGE;

    document.getElementById('XRed').innerHTML= red.x;
    document.getElementById('YRed').innerHTML= red.y;
    //console.log(document.getElementById('RadRed').innerHTML);
}()); // immediate function


// ------------------------------------------------- change size ------------------------------------------
function plusRed(){
    elemRED++;
    document.getElementById('RadRed').innerHTML= elemRED;
}

function minusRed(){
    elemRED--;
    document.getElementById('RadRed').innerHTML= elemRED;
}
function plusOrange(){
    elemORANGE++;
    document.getElementById('RadOrange').innerHTML= elemORANGE;

}
function minusOrange(){
    elemORANGE--;
    document.getElementById('RadOrange').innerHTML= elemORANGE;

}

function size() {
    if(radRed > elemRED) {
        radRed--;
    }
    else if(radRed < elemRED) {
        radRed++;
    }

    if (radOrange > elemORANGE) {
        radOrange--;
    }
    else if(radOrange < elemORANGE) {
        radOrange++;
    }
}
// ------------------------------------------------- position control ---------------------------------------------
function plusRedX(){
    red.x++;
    document.getElementById('XRed').innerHTML= red.x;
}
function minusRedX(){
    red.x--;
    document.getElementById('XRed').innerHTML= red.x;
}

function plusRedY(){
    red.y++;
    document.getElementById('YRed').innerHTML= red.y;
}
function minusRedY(){
    red.y--;
    document.getElementById('YRed').innerHTML= red.y;
}
// ------------------------------------------------- for button -------------------------------------------
function rghtRed(rghtR){
    speedRed_R = rghtR;
    buttonRed = true;
    moveToRight();
}
function lftRed(lftR){
    speedRed_L = lftR;
    buttonRed = true;
    moveToLeft();
}
function uPRed(upR){
    speedRed_U = upR;
    buttonRed = true;
    moveToUp();
}
function dwnRed(dwnR){    
    speedRed_D = dwnR;
    buttonRed = true;
    moveToDown();
}

function rghtOrange(rghtO){
    speedOrange_R = rghtO;
    buttonOrange = true;
    moveToRightOrange();
}
function lftOrange(lftO){
    speedOrange_L = lftO;
    buttonOrange = true;
    moveToLeftOrange();
}
function uPOrange(upO){
    speedOrange_U = upO;
    buttonOrange = true;
    moveToUpOrange();
}
function dwnOrange(dwnO){
    speedOrange_D = dwnO;
    buttonOrange = true;
    moveToDownOrange();
}



//----------------------------------------------------------------------------------------

function leftRed() {
    red.x = red.x - speedRed_L;
}

function rightRed() {
    red.x = red.x + speedRed_R;
}

function upRed() {
    red.y = red.y - speedRed_U;
}

function downRed() {
    red.y = red.y + speedRed_D;
}


function leftOrange() {
    orange.x = orange.x - speedOrange_L;
}

function rightOrange() {
    orange.x = orange.x + speedOrange_R;
}

function upOrange() {
    orange.y = orange.y - speedOrange_U;
}

function downOrange() {
    orange.y = orange.y + speedOrange_D;
}
//--------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------------------
// just for button

function moveToRight() {
    toLeftRed = false;
    toRightRed = true;
}

function moveToLeft() {
    toLeftRed = true;
    toRightRed = false;
}

function moveToUp() {
    toUpRed = true;
    toDownRed = false;
}

function moveToDown() {
    toUpRed = false;
    toDownRed = true;
}

function moveStopX() {
    toLeftRed = false;
    toRightRed = false;
}

function moveStopY() {
    toUpRed = false;
    toDownRed = false;
}


function moveToRightOrange() {
    toLeftOrange = false;
    toRightOrange = true;
}

function moveToLeftOrange() {
    toLeftOrange = true;
    toRightOrange = false;
}

function moveToUpOrange() {
    toUpOrange = true;
    toDownOrange = false;
}

function moveToDownOrange() {
    toUpOrange = false;
    toDownOrange = true;
}

function moveStopOrangeX() {
    toLeftOrange = false;
    toRightOrange = false;
}

function moveStopOrangeY() {
    toUpOrange = false;
    toDownOrange = false;
}


//-----------------------------drawing canvas-------------------------------------------------------------
function circle() {
    var canvas = document.getElementById('circle');
    var obCanvas = canvas.getContext('2d');
    obCanvas.canvas.width = canvWidth;
    obCanvas.canvas.height = canvHeigth;

    obCanvas.beginPath();
    obCanvas.arc(red.x, red.y, radRed, 0 * Math.PI, 2 * Math.PI, false);
    obCanvas.fillStyle = 'red';
    obCanvas.fill();
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = 'blue';
    obCanvas.stroke();

    obCanvas.beginPath();
    obCanvas.arc(orange.x, orange.y, radOrange, 0 * Math.PI, 2 * Math.PI, false);
    obCanvas.fillStyle = 'orange';
    obCanvas.fill();
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = 'brown';
    obCanvas.stroke();

    obCanvas.beginPath();
    obCanvas.strokeStyle = "purple";
    obCanvas.moveTo(orange.x, orange.y);
    obCanvas.lineTo(red.x, red.y);
    obCanvas.stroke(); // Нарисуем его

    obCanvas.font = "15px Tahoma";
    obCanvas.fillStyle = "blue";

    obCanvas.fillText(`RadRED: ${elemRED}`, 50, 30);

    obCanvas.fillText(`distance: ${Math.floor(distance)}`, 50, 50);
    obCanvas.fillText(`red: x = ${red.x} y = ${red.y}`, 50, 80);
    obCanvas.fillText(`orange: x = ${orange.x} y = ${orange.y}`, 50, 110);
    
    obCanvas.fillText(`speedOrange_D: ${speedOrange_D} , speedOrange_U: ${speedOrange_U}`, 50, 170);
    obCanvas.fillText(`speedOrange_L: ${speedOrange_L} , speedOrange_R: ${speedOrange_R}`, 50, 190);

    obCanvas.fillText(`speedRed_D: ${speedRed_D} , speedRed_U: ${speedRed_U}`, 50, 230);
    obCanvas.fillText(`speedRed_L: ${speedRed_L} , speedRed_R: ${speedRed_R}`, 50, 250);

     obCanvas.fillText(`unknownInvB - red: ${unknownInvB}`, 50, 290);
     obCanvas.fillText(`unknownInvD - orange: ${unknownInvD}`, 50, 310);
     obCanvas.fillText(`unknownD - red: ${unknownD}`, 50, 330);
     obCanvas.fillText(`unknownInvG - red: ${unknownInvG}`, 50, 350);
     obCanvas.fillText(`unknownInvZ - orange: ${unknownInvZ}`, 50, 370);
     obCanvas.fillText(`unknownZ - red: ${unknownZ}`, 50, 390);
     obCanvas.fillText(`unknownG - orange: ${unknownG} `, 50, 410);

     obCanvas.fillText(`toLeftRed : ${toLeftRed}, toRightRed : ${toRightRed}`, 5, 430);
     obCanvas.fillText(`toUpRed ${toUpRed}, toDownRed ${toDownRed}`, 5 , 450);
     obCanvas.fillText(`toLeftOrange : ${toLeftOrange}, toRightOrange : ${toRightOrange}`, 5 , 470);
     obCanvas.fillText(`toUpOrange : ${toUpOrange}, toDownOrange : ${toDownOrange}`, 5 , 490);
}
//----------------------------------------------------------------------------------------

// ------------------------------- main engine ------------------------------------------
let mainCicle = setInterval(engine, 32);

function engine(){
    wallsCollision();
    moving();
    circle();
    soudCircle();
    size();
    
}


// const radius = e =>{
//     elem = e.value;
// }

function radiusRED(e) {
    elemRED = e.value;
}

//let frameSpeed;

//let mainCicle2 =  setInterval(moving, 10);
let start = false;


function a() {
    clearTimeout(mainCicle);
  // frameSpeed = 10;
  // mainCicle  =  setInterval(moving, 32);
   console.log('ONE');
}
function b(){
  // frameSpeed = 32;
  // mainCicle  =  setInterval(moving, 12);

  toLeftRed = true;
 //toRightRed = true;
  toUpRed = true;
  //toDownRed = true;

 toLeftOrange = true; 
 // toRightOrange = true;
 //toDownOrange = true;
 //toUpOrange = true;

//speedOrange_D = 1;
//speedOrange_U = 9;
 speedOrange_L = 2;
  //speedOrange_R = 6;

  //speedRed_D = 10;
 speedRed_U = 2;
//speedRed_R = 2;
  speedRed_L = 6;
   console.log('TWO');
}
// function d() {
//     clearTimeout(null);
//     console.log("THREE");
// }
document.querySelector("#ONE").addEventListener('click', a);
document.querySelector("#TWO").addEventListener('click', b);
//document.querySelector("#THREE").addEventListener('click', d);

// function a() {
//     console.log('distance: ', distance);
// }
// document.querySelector("#B").addEventListener('click', a);