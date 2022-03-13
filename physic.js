//--------------------------------physic-----------------------------------------------------
let unknownD, unknownB, unknownG, unknownZ;
let unknownInvD, unknownInvB, unknownInvG, unknownInvZ;
let fA, fB, fC, fD, fE, fF;
let fInvA, fInvB, fInvC, fInvD, fInvE, fInvF;

// --------------------------- horizontal collision -----------------------------
function lftOLftR() {
    unknownB = (-1) * unknownB;
    unknownD = (-1) * unknownD;
    speedRed_L = unknownD;
    speedOrange_L = unknownB;
    moveToLeft();
    moveToLeftOrange();
}

function rghtORghtR() {
    speedRed_R = unknownD;
    speedOrange_R = unknownB;
    moveToRight();
    moveToRightOrange();
}

function lftORghtR() {
    unknownB = (-1) * unknownB;
    speedRed_R = unknownD;
    speedOrange_L = unknownB;
    moveToRight();
    moveToLeftOrange();
}

function stpORghtR() {
    speedRed_R = unknownD;
    speedOrange_L = unknownB;
    speedOrange_R = unknownB;
    moveToRight();
    moveStopOrangeX();
}

function lftOStpR() {
    unknownB = (-1) * unknownB;
    speedRed_L = unknownD;
    speedRed_R = unknownD;
    speedOrange_L = unknownB;
    moveStopX();
    moveToLeftOrange();
}

function stpOStpR() {
    speedRed_L = unknownD;
    speedOrange_L = unknownB;
    speedRed_R = unknownD;
    speedOrange_R = unknownB;
    moveStopX();
    moveStopOrangeX();
}
// ---------------------------------------- vertical collision ----------------------------------------------
function upOupR() {
    unknownG = unknownG * (-1);
    unknownZ = unknownZ * (-1);
    speedRed_U = unknownZ;
    speedOrange_U = unknownG;
    moveToUp();
    moveToUpOrange();
}

function dwnOdwnR() {
    speedRed_D = unknownZ;
    speedOrange_D = unknownG;
    moveToDown();
    moveToDownOrange();
}

function dwnOupR() {
    unknownZ = unknownZ * (-1);
    speedRed_U = unknownZ;
    speedOrange_D = unknownG;
    moveToUp();
    moveToDownOrange();
}

function upOdwnR() {
    unknownG = unknownG * (-1);
    speedRed_D = unknownZ;
    speedOrange_U = unknownG;
    moveToDown();
    moveToUpOrange();
}

function stpOdwnR() {
    speedRed_U = unknownZ;
    speedOrange_U = unknownG;
    speedOrange_D = unknownG;
    moveToDown();
    moveStopOrangeY();
}

function upOstpR() {
    unknownG = unknownG * (-1);
    speedRed_U = unknownZ;
    speedRed_D = unknownZ;
    speedOrange_U = unknownG;
    moveStopY();
    moveToUpOrange();
}

function stpOstpRVert() {
    speedRed_U = unknownZ;
    speedRed_D = unknownZ;
    speedOrange_U = unknownG;
    peedOrange_D = unknownG;
    moveStopY();
    moveStopOrangeY();
}
//----------------------------------------------------------------------------------------------------------------------------------------

function collisingResultX() {
    console.log('collisingResultX!!!');
    if (unknownB < 0 && unknownD < 0) { // -------- <-o <-o ----------------------------	
        lftOLftR();
    } else if (unknownB > 0 && unknownD > 0) { // --------- o-> o-> ----------------------
        rghtORghtR();
    } else if (unknownB < 0 && unknownD > 0) { // ----------- <-o o-> -----------------------
        lftORghtR();
    } else if (unknownB === 0 && unknownD > 0) { // ----------- o o-> -----------------------
        stpORghtR();
    } else if (unknownB < 0 && unknownD === 0) { // ----------- <-o o -----------------------
        lftOStpR();
    } else if (unknownB === 0 && unknownD === 0) { // ----------- o o ------------------------
        stpOStpR();
    }
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}
 function collisingResultY() { 
    console.log('collisingResultY!!!');
     if (unknownG < 0 && unknownZ < 0) { // ----------- o(up/orange) o(up/red)  ---------
        upOupR();
    } else if (unknownG > 0 && unknownZ > 0) { // -----------o(down/orange) o(down/red)  ---------
        dwnOdwnR();
    } else if (unknownG < 0 && unknownZ > 0) { // -----------o(up/orange) o(down/red)  ---------
        upOdwnR();
    } else if (unknownG === 0 && unknownZ > 0) { // -----------o(stop/orange) o(down/red)  ---------
        stpOdwnR();
    } else if (unknownG < 0 && unknownZ === 0) { // -----------o(up/orange) o(stop/red)  ---------
        upOstpR();
    } else if (unknownG === 0 && unknownZ === 0) { // -----------o(stop/orange) o(stop/red)  ---------
        stpOstpRVert();
    } 
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}
//----------------------------------------inversion---------------------------------------

function lftRLftOInv() {
    unknownInvB = (-1) * unknownInvB;
    unknownInvD = (-1) * unknownInvD;
    speedRed_L = unknownInvB;
    speedOrange_L = unknownInvD;
    moveToLeft();
    moveToLeftOrange();
}

function rghtRRghtOInv() {
    speedRed_R = unknownInvB;
    speedOrange_R = unknownInvD;
    moveToRight();
    moveToRightOrange();
}

function lftRRghtOInv() {
    unknownInvB = (-1) * unknownInvB;
    speedRed_L = unknownInvB;
    speedOrange_R = unknownInvD;
    moveToLeft();
    moveToRightOrange();
}

function stpRRghtOInv() {
    speedRed_L = unknownInvB;
    speedRed_R = unknownInvB;
    speedOrange_R = unknownInvD;
    moveStopX();
    moveToRightOrange();
}

function lftRStpOInv() {
    unknownInvB = (-1) * unknownInvB;
    speedRed_L = unknownInvB;
    speedOrange_R = unknownInvD;
    speedOrange_L = unknownInvD;
    moveToLeft();
    moveStopOrangeX();
}

function stpRStpOInv() {
    speedRed_L = unknownInvB;
    speedOrange_L = unknownInvD;
    speedRed_R = unknownInvB;
    speedOrange_R = unknownInvD;
    moveStopX();
    moveStopOrangeX();
}

// ----------------------------------------------------------vertical INVERSION-------------------------------------------------------------

function upRupOInv() {
    unknownInvG = (-1) * unknownInvG; // - red
    unknownInvZ = (-1) * unknownInvZ; // - orange
    speedRed_U = unknownInvG;
    speedOrange_U = unknownInvZ;
    moveToUp();
    moveToUpOrange();
}

function downRdownOInv() {
    speedRed_D = unknownInvG;
    speedOrange_D = unknownInvZ;
    moveToDown();
    moveToDownOrange();
}

function upRdownOInv() {
    unknownInvG = (-1) * unknownInvG;
    speedRed_U = unknownInvG;
    speedOrange_D = unknownInvZ;
    moveToUp();
    moveToDownOrange();
}

function stpRdownOInv() {
    speedRed_U = unknownInvG;
    speedRed_D = unknownInvG;
    speedOrange_D = unknownInvZ;
    moveStopY();
    moveToDownOrange();
}

function upRStpOInv() {
    unknownInvG = (-1) * unknownInvG;
    speedRed_U = unknownInvG;
    speedOrange_D = unknownInvZ;
    speedOrange_U = unknownInvZ;
    moveToUp();
    moveStopOrangeY();
}

function stpRStpOInvVert() {
    speedRed_U = unknownInvG;
    speedOrange_U = unknownInvZ;
    speedRed_D = unknownInvG;
    speedOrange_D = unknownInvZ;
    moveStopY();
    moveStopOrangeY();
}

function collisingResultInvX() {
        console.log('collisingResultInvX!!!');
        if (unknownInvB < 0 && unknownInvD < 0) { // -------- <-o <-o ----------------------------	
            lftRLftOInv();
        } else if (unknownInvB > 0 && unknownInvD > 0) { // --------- o-> o-> ----------------------
            rghtRRghtOInv();
        } else if (unknownInvB < 0 && unknownInvD > 0) { // ----------- <-o o-> -----------------------
            lftRRghtOInv();
        } else if (unknownInvB === 0 && unknownInvD > 0) { // ----------- o o-> -----------------------
            stpRRghtOInv();
        } else if (unknownInvB < 0 && unknownInvD === 0) { // ----------- <-o o -----------------------
            lftRStpOInv();
        } else if (unknownInvB === 0 && unknownInvD === 0) { // ----------- o o ------------------------
            stpRStpOInv();
        }
        console.log(`-------------------------------------------
        toLeftRed: ${toLeftRed},
        toRightRed: ${toRightRed},
        toUpRed: ${toUpRed},
        toDownRed: ${toDownRed}`);
        console.log(`-------------------------------------------
        toLeftOrange: ${toLeftOrange},
        toRightOrange: ${toRightOrange},
        toDownOrange: ${toDownOrange},
        toUpOrange: ${toUpOrange}`);
        console.log(`-------------------------------------------
        speedRed_L: ${speedRed_L},
        speedRed_R: ${speedRed_R},
        speedRed_D: ${speedRed_D},
        speedRed_U: ${speedRed_U},
        speedOrange_L: ${speedOrange_L},
        speedOrange_R : ${speedOrange_R},
        speedOrange_D: ${speedOrange_D},
        speedOrange_U : ${speedOrange_U},`);
}  

   function collisingResultInvY() { 
    console.log('collisingResultInvY!!!');
        if (unknownInvG < 0 && unknownInvZ < 0) { // unknownInvG - red   unknownInvZ - orange
            upRupOInv();
        } else if (unknownInvG > 0 && unknownInvZ > 0) { 
            downRdownOInv();
        } else if (unknownInvG < 0 && unknownInvZ > 0) { 
            upRdownOInv();
        } else if (unknownInvG === 0 && unknownInvZ > 0) { 
            stpRdownOInv();
        } else if (unknownInvG < 0 && unknownInvZ === 0) {
            upRStpOInv();
        } else if (unknownInvG === 0 && unknownInvZ === 0) { 
            stpRStpOInvVert();
        } 
        console.log(`-------------------------------------------
        toLeftRed: ${toLeftRed},
        toRightRed: ${toRightRed},
        toUpRed: ${toUpRed},
        toDownRed: ${toDownRed}`);
        console.log(`-------------------------------------------
        toLeftOrange: ${toLeftOrange},
        toRightOrange: ${toRightOrange},
        toDownOrange: ${toDownOrange},
        toUpOrange: ${toUpOrange}`);
        console.log(`-------------------------------------------
        speedRed_L: ${speedRed_L},
        speedRed_R: ${speedRed_R},
        speedRed_D: ${speedRed_D},
        speedRed_U: ${speedRed_U},
        speedOrange_L: ${speedOrange_L},
        speedOrange_R : ${speedOrange_R},
        speedOrange_D: ${speedOrange_D},
        speedOrange_U : ${speedOrange_U},`);
}


//--------------------------------------------- o->  <-o ----------------------- mv - mv

function speedBfrA() {
    fA = -speedRed_L - speedOrange_R;
    console.log('fA: ', fA);
}

function impulseBeforeA() {
    eA = radOrange * speedOrange_R - radRed * speedRed_L;
    console.log('eA: ', eA);
}

function doubleEquationA() {
    unknownD = (eA - (radOrange * fA)) / (radOrange + radRed);
    unknownB = unknownD + fA;
    console.log('doubleEquationA  o->  <-o ');
    console.log('unknownD: ', unknownD);
    console.log('unknownB: ', unknownB);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}
// ---------------------------------- inversion o->  <-o ----------------------------------
function speedBfrInvA() {
    fInvA = -speedOrange_L - speedRed_R;
    console.log('fInvA: ', fInvA);
    // console.log('speedOrange_R: ',speedOrange_R, ' speedOrange_L: ',speedOrange_L);
    // console.log('speedRed_R: ',speedRed_R, ' speedRed_L: ',speedRed_L );
}

function impulseBeforeInvA() {
    eInvA = radRed * speedRed_R - radOrange * speedOrange_L;
    console.log('eInvA: ', eInvA);
    // console.log(`${eInvA} = ${radRed} * ${speedRed_R} - ${radOrange} * ${speedOrange_L}`);
}

function doubleEquationInvA() {
    unknownInvD = (eInvA - (radRed * fInvA)) / (radRed + radOrange);
    unknownInvB = unknownInvD + fInvA;
     console.log('doubleEquationInvA  o->  <-o ');
     console.log('unknownInvD: ', unknownInvD);
     console.log('unknownInvB: ', unknownInvB);
     console.log(`-------------------------------------------
     toLeftRed: ${toLeftRed},
     toRightRed: ${toRightRed},
     toUpRed: ${toUpRed},
     toDownRed: ${toDownRed}`);
     console.log(`-------------------------------------------
     toLeftOrange: ${toLeftOrange},
     toRightOrange: ${toRightOrange},
     toDownOrange: ${toDownOrange},
     toUpOrange: ${toUpOrange}`);
     console.log(`-------------------------------------------
     speedRed_L: ${speedRed_L},
     speedRed_R: ${speedRed_R},
     speedRed_D: ${speedRed_D},
     speedRed_U: ${speedRed_U},
     speedOrange_L: ${speedOrange_L},
     speedOrange_R : ${speedOrange_R},
     speedOrange_D: ${speedOrange_D},
     speedOrange_U : ${speedOrange_U},`);
}

//--------------------------------------------- o->  o-> ----------------------- mv + mv
function speedBfrB() {
    fB = speedRed_R - speedOrange_R;
    console.log('fB: ', fB);
}

function impulseBeforeB() {
    eB = radOrange * speedOrange_R + radRed * speedRed_R;
    console.log('eB: ', eB);
}

function doubleEquationB() {
    unknownD = (eB - (radOrange * fB)) / (radOrange + radRed);
    unknownB = unknownD + fB;
    console.log('doubleEquationB  o->  o-> ');
    console.log('unknownD: ', unknownD);
    console.log('unknownB: ', unknownB);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}

// ---------------------------------- inversion o->  o-> ----------------------------------

function speedBfrInvB() {
    fInvB = speedOrange_R - speedRed_R;
    console.log('fInvB: ', fInvB);
}

function impulseBeforeInvB() {
    eInvB = radRed * speedRed_R + radOrange * speedOrange_R;
    console.log('eInvB: ', eInvB);
}

function doubleEquationInvB() {
    unknownInvD = (eInvB - (radRed * fInvB)) / (radRed + radOrange);
    unknownInvB = unknownInvD + fInvB;
      console.log('doubleEquationInvB  o->  o-> ');
     console.log('unknownInvD - orange : ', unknownInvD);
      console.log('unknownInvB - red: ', unknownInvB);
      console.log(`-------------------------------------------
      toLeftRed: ${toLeftRed},
      toRightRed: ${toRightRed},
      toUpRed: ${toUpRed},
      toDownRed: ${toDownRed}`);
      console.log(`-------------------------------------------
      toLeftOrange: ${toLeftOrange},
      toRightOrange: ${toRightOrange},
      toDownOrange: ${toDownOrange},
      toUpOrange: ${toUpOrange}`);
      console.log(`-------------------------------------------
      speedRed_L: ${speedRed_L},
      speedRed_R: ${speedRed_R},
      speedRed_D: ${speedRed_D},
      speedRed_U: ${speedRed_U},
      speedOrange_L: ${speedOrange_L},
      speedOrange_R : ${speedOrange_R},
      speedOrange_D: ${speedOrange_D},
      speedOrange_U : ${speedOrange_U},`);
}


//--------------------------------------------- <-o  <-o ----------------------- -mv - mv
function speedBfrC() {
    fC = -speedRed_L + speedOrange_L;
    console.log('fС: ', fC);
}

function impulseBeforeC() {
    eC = ((-1) * (radOrange * speedOrange_L)) - radRed * speedRed_L;
     console.log('eC: ', eC);
}

function doubleEquationС() {
    unknownD = (eC + (radOrange * (-fC))) / (radOrange + radRed);
    unknownB = unknownD - (-fC);
     console.log('doubleEquationС <-o  <-o ');
      console.log('unknownD: ', unknownD);
     console.log('unknownB: ', unknownB);
     console.log(`-------------------------------------------
     toLeftRed: ${toLeftRed},
     toRightRed: ${toRightRed},
     toUpRed: ${toUpRed},
     toDownRed: ${toDownRed}`);
     console.log(`-------------------------------------------
     toLeftOrange: ${toLeftOrange},
     toRightOrange: ${toRightOrange},
     toDownOrange: ${toDownOrange},
     toUpOrange: ${toUpOrange}`);
     console.log(`-------------------------------------------
     speedRed_L: ${speedRed_L},
     speedRed_R: ${speedRed_R},
     speedRed_D: ${speedRed_D},
     speedRed_U: ${speedRed_U},
     speedOrange_L: ${speedOrange_L},
     speedOrange_R : ${speedOrange_R},
     speedOrange_D: ${speedOrange_D},
     speedOrange_U : ${speedOrange_U},`);
}

// ---------------------------------- inversion  <-o  <-o  ----------------------------------
function speedBfrInvC() {
    fInvC = -speedOrange_L + speedRed_L;
    console.log('fInvC: ', fInvC);
}

function impulseBeforeInvC() {
    eInvC = ((-1) * (radRed * speedRed_L)) - radOrange * speedOrange_L;
    console.log('eInvC: ', eInvC);
}
         
function doubleEquationInvС() {
    unknownInvD = (eInvC + (radRed * (-fInvC))) / (radRed + radOrange);
    unknownInvB = unknownInvD - (-fInvC);
     console.log('doubleEquationInvС <-o  <-o ');
     console.log('unknownInvD - orange: ', unknownInvD);
      console.log('unknownInvB - red: ', unknownInvB);
      console.log(`-------------------------------------------
      toLeftRed: ${toLeftRed},
      toRightRed: ${toRightRed},
      toUpRed: ${toUpRed},
      toDownRed: ${toDownRed}`);
      console.log(`-------------------------------------------
      toLeftOrange: ${toLeftOrange},
      toRightOrange: ${toRightOrange},
      toDownOrange: ${toDownOrange},
      toUpOrange: ${toUpOrange}`);
      console.log(`-------------------------------------------
      speedRed_L: ${speedRed_L},
      speedRed_R: ${speedRed_R},
      speedRed_D: ${speedRed_D},
      speedRed_U: ${speedRed_U},
      speedOrange_L: ${speedOrange_L},
      speedOrange_R : ${speedOrange_R},
      speedOrange_D: ${speedOrange_D},
      speedOrange_U : ${speedOrange_U},`);
}


// --------------------------------------------------------VERTICAL----------------------------
// ---------------------------------------- o->  <-o ----------------------------

function speedBfrD() {
    fD = -speedRed_U - speedOrange_D;
   console.log('fD: ', fD);
}

function impulseBeforeD() {
    eD = radOrange * speedOrange_D - radRed * speedRed_U;
    console.log('eD: ', eD);
}

function doubleEquationD() {
    unknownZ = (eD - (radOrange * fD)) / (radOrange + radRed); // unknownG === orange, unknownZ === red
    unknownG = unknownZ + fD;
    console.log('doubleEquationD  o(up) o(down) ');
    console.log('unknownG - orange: ', unknownG);
    console.log('unknownZ - red: ', unknownZ);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}

// -----------------------------------------------INVERSION o->  <-o ----------------------------

function speedBfrInvD() {
    fInvD = -speedOrange_U - speedRed_D ;
    console.log('fInvD: ', fInvD);
}

function impulseBeforeInvD() {
    eInvD = radRed * speedRed_D - radOrange * speedOrange_U;
   console.log('eInvD: ', eInvD);
}

function doubleEquationInvD() {
    unknownInvZ = (eInvD - (radRed * fInvD)) / (radRed + radOrange); 
    unknownInvG = unknownInvZ + fInvD;
    console.log('doubleEquationInvD  o(down) o(up) ');
    console.log('unknownInvZ - orange: ', unknownInvZ);
    console.log('unknownInvG - red: ', unknownInvG);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}

// ---------------------------------- o->  o->  ----------------------------

function speedBfrE() {
    fE = speedRed_D - speedOrange_D;
    console.log('fE: ', fE);
}

function impulseBeforeE() {
    eE = radOrange * speedOrange_D + radRed * speedRed_D;
    console.log('eE: ', eE);
}

function doubleEquationE() {
    unknownZ = (eE - (radOrange * fE)) / (radOrange + radRed);
    unknownG = unknownZ + fE;
    console.log('doubleEquationE  o->  o-> ');
    console.log('unknownZ - red: ', unknownZ);
    console.log('unknownG - orange: ', unknownG);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}

// -----------------------------------------------INVERSION o->  o->  ----------------------------

function speedBfrInvE() {
    fInvE = speedOrange_D - speedRed_D;
     console.log('fInvE: ', fInvE);
}

function impulseBeforeInvE() {
    eInvE = radOrange * speedOrange_D + radRed * speedRed_D;
    console.log('eInvE: ', eInvE);
}

function doubleEquationInvE() {
    unknownInvZ = (eInvE - (radRed * fInvE)) / (radOrange + radRed);
    unknownInvG = unknownInvZ + fInvE;
    console.log('doubleEquationInvE  o->  o-> ');
    console.log('unknownInvZ - orange: ', unknownInvZ);
    console.log('unknownInvG - red: ', unknownInvG);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}

// ------------------------------------------- <-o  <-o  ----------------------------

function speedBfrF() {
    fF = -speedRed_U + speedOrange_U;
    console.log('fF: ', fF);
}

function impulseBeforeF() {
    eF = ((-1) * (radOrange * speedOrange_U)) - radRed * speedRed_U;
     console.log('eF: ', eF);
}

function doubleEquationF() {
    unknownZ = (eF + (radOrange * (-fF))) / (radOrange + radRed);
    unknownG = unknownZ - (-fF);
    console.log('doubleEquationF <-o  <-o ');
   console.log('unknownZ - red: ', unknownZ);
    console.log('unknownG - orange: ', unknownG);
    console.log(`-------------------------------------------
    toLeftRed: ${toLeftRed},
    toRightRed: ${toRightRed},
    toUpRed: ${toUpRed},
    toDownRed: ${toDownRed}`);
    console.log(`-------------------------------------------
    toLeftOrange: ${toLeftOrange},
    toRightOrange: ${toRightOrange},
    toDownOrange: ${toDownOrange},
    toUpOrange: ${toUpOrange}`);
    console.log(`-------------------------------------------
    speedRed_L: ${speedRed_L},
    speedRed_R: ${speedRed_R},
    speedRed_D: ${speedRed_D},
    speedRed_U: ${speedRed_U},
    speedOrange_L: ${speedOrange_L},
    speedOrange_R : ${speedOrange_R},
    speedOrange_D: ${speedOrange_D},
    speedOrange_U : ${speedOrange_U},`);
}

// ----------------------------------------------- INVERSION <-o  <-o ----------------------------

function speedBfrInvF() {
    fInvF = - speedOrange_U + speedRed_U;
    console.log('fInvF: ', fInvF);
}

function impulseBeforeInvF() {
    eInvF = ((-1) * (radOrange * speedOrange_U)) - radRed * speedRed_U;
     console.log('eInvF: ', eInvF);
}

function doubleEquationInvF() {
    unknownInvZ = (eInvF + (radRed * (-fInvF))) / (radOrange + radRed);
    unknownInvG = unknownInvZ - (-fInvF);
     console.log('doubleEquationInvF <-o  <-o ');
     console.log('unknownInvZ - orange: ', unknownInvZ);
     console.log('unknownInvG - red: ', unknownInvG);
     console.log(`-------------------------------------------
     toLeftRed: ${toLeftRed},
     toRightRed: ${toRightRed},
     toUpRed: ${toUpRed},
     toDownRed: ${toDownRed}`);
     console.log(`-------------------------------------------
     toLeftOrange: ${toLeftOrange},
     toRightOrange: ${toRightOrange},
     toDownOrange: ${toDownOrange},
     toUpOrange: ${toUpOrange}`);
     console.log(`-------------------------------------------
     speedRed_L: ${speedRed_L},
     speedRed_R: ${speedRed_R},
     speedRed_D: ${speedRed_D},
     speedRed_U: ${speedRed_U},
     speedOrange_L: ${speedOrange_L},
     speedOrange_R : ${speedOrange_R},
     speedOrange_D: ${speedOrange_D},
     speedOrange_U : ${speedOrange_U},`);
}

