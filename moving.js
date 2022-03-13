


function moving() {
  
        if (toLeftRed == true) {
            leftRed();
        } else if (toRightRed == true) {
            rightRed();
        }
        if (toDownRed == true) {
            downRed();
        } else if (toUpRed == true) {
            upRed();
        }
    
    
        if (toLeftOrange == true) {
            leftOrange();
        } else if (toRightOrange == true) {
            rightOrange();
        }
        if (toDownOrange == true) {
            downOrange();
        } else if (toUpOrange == true) {
            upOrange();
        }
    
        distance = Math.sqrt(Math.pow(red.x - orange.x, 2) + Math.pow(red.y - orange.y, 2));

        if(distance <= radRed + radOrange) {
            buttonRed = false;
            buttonOrange = false;
        }
       
        // -------------------------------------- two dimension -----------------------------------------------
    
        if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '438 subterm');
            }
            collisingResultY();
            console.log('438');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toLeftRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '450 subterm');
            }
            collisingResultY();
            console.log('450');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '462 subterm');
            }
            collisingResultY();
            console.log('462');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '474 subterm');
            }
            collisingResultY();
            console.log('474');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true && toLeftRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '486 subterm');
            }
            collisingResultY();
            console.log('486');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '498 subterm');
            }
            collisingResultY();
            console.log('498');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '510 subterm');
            }
            collisingResultY();
            console.log('510');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toLeftRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '522 subterm');
            }
            collisingResultY();
            console.log('522');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '534 subterm');
            }
            collisingResultY();
            console.log('534');
        }   else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toDownOrange === true && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0 ) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '546 subterm');
            }
            collisingResultY();
            console.log('546');
        }  else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toLeftRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '558 subterm');
            }
            collisingResultY();
            console.log('558');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpOrange === true && speedRed_U === 0 && speedRed_D === 0 && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            speedOrange_D = speedOrange_U;
            speedOrange_U = 0;
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1411 subterm');
            }
            collisingResultY();
            console.log('code 1411');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toLeftRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1424 subterm');
            }
            collisingResultY();
            console.log('code 1424');
        } else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toRightOrange === true && toUpOrange === true && speedRed_R === 0 && speedRed_L === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            toDownOrange = false;
            toUpOrange = true;
            toUpRed = false;
            toDownRed = true;
            console.log('code 1011');
        }  else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightOrange === true && toDownOrange === true && speedRed_R === 0 && speedRed_L === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1016 subterm');
            }
            collisingResultY();
            console.log('code 1016');
        }  else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightOrange === true && toUpOrange === true && speedRed_R === 0 && speedRed_L === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1021 subterm');
            }
            collisingResultY();
            console.log('code 1021');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toDownOrange === true && speedOrange_R === 0 && speedOrange_L === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1512 subterm');
            }
            collisingResultY();
            console.log('code 1512');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toUpOrange === true && speedOrange_R === 0 && speedOrange_L === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            toDownOrange = false;
            toUpOrange = true;
            toUpRed = false;
            toDownRed = true;
            console.log('code 1515');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toUpOrange === true && speedOrange_R === 0 && speedOrange_L === 0) {
            inversionX = false;
            speedRed_L = speedRed_R;
            speedRed_R = 0;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1519 subterm');
            }
            collisingResultY();
            console.log('code 1519');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1115 subterm');
            }
            collisingResultY();
            console.log('code 1115');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toLeftOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            toRightRed = true;
            toLeftRed = false;
            toRightOrange = false;
            toLeftOrange = true;
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1102 subterm');
            }
            collisingResultY();
            console.log('code 1102');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1119 subterm');
            }
            collisingResultY();
            console.log('code 1119');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1109 subterm');
            }
            collisingResultY();
            console.log('code 1109');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1111 subterm');
            }
            collisingResultY();
            console.log('code 1111');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1120 subterm');
            }
            collisingResultY();
            console.log('code 1120');
        } 
        else if (red.x > orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_D === 0 && speedOrange_U === 0) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1127 subterm');
            }
            collisingResultY();
            console.log('code 1127');
        } 
    
        else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightRed === true && toRightOrange === true) {//////////////
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '571 subterm');
            }
            collisingResultInvY(); 
            console.log('571');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toLeftRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '583 subterm');   
             }
            collisingResultInvY(); 
            console.log('583');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '595 subterm');
            }
            collisingResultInvY(); 
            console.log('595');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '607 subterm');
            }
            collisingResultInvY(); 
            console.log('607');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toLeftRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '619 subterm');
            }
            collisingResultInvY(); 
            console.log('619');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '631 subterm');
            }
            collisingResultInvY(); 
            console.log('631');
        }  else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '643 subterm');
            }
            collisingResultInvY(); 
            console.log('643');
        }  else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toLeftRed === true && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '665 subterm');
            }
            collisingResultInvY(); 
            console.log('655');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '667 subterm');
            }
            collisingResultInvY(); 
            console.log('667');
        }  else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toUpOrange === true && speedRed_L === 0 && speedRed_R === 0 && toRightOrange === true) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '679 subterm');
            }
            collisingResultInvY(); 
            console.log('679');
    
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toLeftRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '692 subterm');
            }
            collisingResultInvY(); 
            console.log('692');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownOrange === true && speedRed_U === 0 && speedRed_D === 0 && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedOrange_U = speedOrange_D;
            speedOrange_D = 0;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1412 subterm');
            }
            collisingResultInvY();
            console.log('code 1412');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toLeftRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1423 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1423');
        }  
        else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1010 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1010');
        } 
        else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            toDownOrange = true;
            toUpOrange = false;
            toUpRed = true;
            toDownRed = false;
            console.log('code 1017');
        } else if (red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0) {
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1018 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1018');
        } else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toDownOrange === true && speedOrange_L === 0 && speedOrange_R === 0){
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            toDownOrange = true;
            toUpOrange = false;
            toUpRed = true;
            toDownRed = false;
            console.log('code 1513');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toUpOrange === true && speedOrange_L === 0 && speedOrange_R === 0){
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1514 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1514');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toUpOrange === true && speedOrange_L === 0 && speedOrange_R === 0){
            inversionX = false;
            speedRed_L = speedRed_R;
            speedRed_R = 0;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1520 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1520');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1101 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1101');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1124 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1124');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1105 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1105');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1125 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1125');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toLeftOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            toRightRed = true;
            toLeftRed = false;
            toRightOrange = false;
            toLeftOrange = true;
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1113 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1113');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1107 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1107');
        }
        else if(red.x > orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toRightOrange === true && speedOrange_D === 0 && speedOrange_U === 0){
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1126 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1126');
        }
        
    
        
       else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '705 subterm');
            }
            collisingResultY();
            console.log('705');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '717 subterm');
            }
            collisingResultY();
            console.log('717');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '729 subterm');
            }
            collisingResultY();
            console.log('729');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true && toRightRed === true && toRightOrange === true) {//////
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '741 subterm');
            }
            collisingResultY();
            console.log('741');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toDownOrange === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '753 subterm');
            }
            collisingResultY();
            console.log('753');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '765 subterm');
            }
            collisingResultY();
            console.log('765');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '777 subterm');
            }
            collisingResultY();
            console.log('777');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toRightRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {// corect working in collisingResultY  unknownG < 0 && unknownZ > 0
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '789 subterm');
            }
            collisingResultY();
            console.log('789');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '801 subterm');
            }
            collisingResultY();
            console.log('801');
        }  else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toRightRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '813 subterm');
            }
            collisingResultY();
            console.log('813');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toDownOrange === true && speedRed_L === 0 && speedRed_R === 0  && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС(); 
            collisingResultInvX();
            inversionY = false;
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '825 subterm');
            }
            collisingResultY();
            console.log('825');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toUpOrange === true && speedRed_L === 0 && speedRed_R === 0 && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedOrange_D = speedOrange_U;
            speedOrange_U = 0;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1413 subterm');
            }
            collisingResultY();
            console.log('code 1413' );
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toRightRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1422 subterm');
            }
            collisingResultY();
            console.log('code 1422');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && speedRed_L === 0 && speedRed_R === 0 && toUpOrange === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            toDownOrange = false;
            toUpOrange = true;
            toUpRed = false;
            toDownRed = true;
            console.log('code 1013');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && speedRed_L === 0 && speedRed_R === 0 && toDownOrange === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1014 subterm');
            }
            collisingResultY();
            console.log('code 1014');
        } else if (red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && speedRed_L === 0 && speedRed_R === 0 && toUpOrange === true && toRightOrange === true) {
            inversionX = true;
            speedOrange_L = speedOrange_R;
            speedOrange_R = 0;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1020 subterm');
            }
            collisingResultY();
            console.log('code 1020');
        } 
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toDownOrange === true && speedOrange_R === 0 && speedOrange_L === 0){
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1510 subterm');
            }
            collisingResultY();
            console.log('code 1510');
        }
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toUpOrange === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            toUpOrange = true;
            toDownOrange = false;
            toDownRed = true;
            toUpRed = false;
            console.log('code 1517');
        }
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toUpOrange === true && speedOrange_R === 0 && speedOrange_L === 0) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1518 subterm');
            }
            collisingResultY();
            console.log('code 1518');
        } 
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            collisingResultInvX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1108 subterm');
            }
            collisingResultY();
            console.log('code 1108');
        }
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            collisingResultInvX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1112 subterm');
            }
            collisingResultY();
            console.log('code 1112');
        }
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toRightOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            toLeftOrange = false;
            toRightOrange = true;
            toLeftRed = true;
            toRightRed= false;
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1106 subterm');
            }
            collisingResultY();
            console.log('code 1106');
        }
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toRightOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = false;
            speedRed_U = speedRed_D;
            speedRed_D = 0;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1114 subterm');
            }
            collisingResultY();
            console.log('code 1114');
        } 
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1116 subterm');
            }
            collisingResultY();
            console.log('code 1116');
        }
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1117 subterm');
            }
            collisingResultY();
            console.log('code 1117');
        }  
        else if(red.x < orange.x && red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toRightOrange === true && speedOrange_U === 0 && speedOrange_D === 0) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            if (unknownG > 0 && unknownZ < 0) {
                let a = unknownG;
                let b = unknownZ;
                unknownG = b;
                unknownZ = a;
                console.log( '1118 subterm');
            }
            collisingResultY();
            console.log('code 1118');
        }


    
       else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '10 subterm');
            }
            collisingResultInvY(); 
            console.log('code 10');
        }  else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toRightRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '9 subterm');
            }
            collisingResultInvY(); 
            console.log('code 9');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '8 subterm');
            }
            collisingResultInvY(); 
            console.log('code 8');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '7 subterm');
            }
            collisingResultInvY(); 
            console.log('code 7');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toRightRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '6 subterm');
            }
            collisingResultInvY(); 
            console.log('code 6');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '5 subterm');
            }
            collisingResultInvY(); 
            console.log('code 5');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toRightRed === true && toRightOrange === true) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '4 subterm');
            }
            collisingResultInvY(); 
            console.log('code 4');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toRightRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '3 subterm');
            }
            collisingResultInvY(); 
            console.log('code 3');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true && toLeftRed === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '2 subterm');
            }
            collisingResultInvY(); 
            console.log('code 2');
        }  else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toRightRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1');
            
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toUpOrange === true && speedRed_L === 0 && speedRed_R === 0 && toLeftOrange === true ) {
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1313 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1313');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toDownOrange === true && speedRed_L === 0 && speedRed_R === 0 && toLeftOrange === true ) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedOrange_U = speedOrange_D;
            speedOrange_D = 0;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1414 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1414');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && speedOrange_U === 0 && speedOrange_D === 0 && toRightRed === true && speedOrange_L === 0 && speedOrange_R === 0) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            collisingResultInvY(); 
            console.log('code 1421');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && speedRed_L === 0 && speedRed_R === 0 && toUpOrange === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1012 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1012');
        } else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && speedRed_L === 0 && speedRed_R === 0 && toDownOrange === true && toLeftOrange === true) {
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            toDownOrange = true;
            toUpOrange = false;
            toUpRed = true;
            toDownRed = false;
            console.log('code 1015');
        }  else if (red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && speedRed_L === 0 && speedRed_R === 0 && toUpOrange === true && toRightOrange === true) {          
            inversionX = true;
            speedOrange_L = speedOrange_R;
            speedOrange_R = 0;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1019 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1019');
        }  
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toDownOrange === true && speedOrange_R === 0 && speedOrange_L === 0){
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            toDownOrange = true;
            toUpOrange = false;
            toUpRed = true;
            toDownRed = false;
            console.log('code 1511');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toUpOrange === true && speedOrange_R === 0 && speedOrange_L === 0){
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1516 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1516');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toUpOrange === true && speedOrange_R === 0 && speedOrange_L === 0){
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1521 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1521');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1100 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1100');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1121 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1121');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toRightRed === true && toRightOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1103 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1103');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toLeftRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            inversionY = true;
            speedRed_D = speedRed_U;
            speedRed_U = 0;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1104 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1104');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toLeftOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1122 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1122');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toLeftRed === true && toRightOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
           toRightRed = false;
           toLeftRed = true;
           toRightOrange = true;
           toLeftOrange = false;
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1110 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1110');
        }
        else if(red.x < orange.x && red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toRightRed === true && toRightOrange === true && speedOrange_U === 0 && speedOrange_D === 0){
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            if (unknownInvG > 0 && unknownInvZ < 0) {
                let a = unknownInvG;
                let b = unknownInvZ;
                unknownInvG = b;
                unknownInvZ = a;
                console.log( '1123 subterm');
            }
            collisingResultInvY(); 
            console.log('code 1123');
        }

    
    //-------------------------------------- one dimension ---------------------------------------------------
    
      else  if (red.x > orange.x && distance <= radRed + radOrange && toRightOrange === true && toLeftRed === true) { //---------- o-> <-o ----------
            inversionX = false;
            speedBfrA();
            impulseBeforeA();
            doubleEquationA();
            collisingResultX();
            console.log('111');
        }
    
       else if (red.x > orange.x && distance <= radRed + radOrange && toLeftOrange === true && toLeftRed === true) { //-------------- <-o <-o --------
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            console.log('112');
        }
    
       else if (red.x > orange.x && distance <= radRed + radOrange && toRightOrange === true && toRightRed === true  ) {// ----------- o-> o-> -----------
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
           console.log('113');
        }
    
        else if(red.x > orange.x && distance <= radRed + radOrange && toRightOrange === true && speedRed_L === 0 && speedRed_R === 0 ) { //--------------- o-> o ------------
            inversionX = false;
            speedBfrB();
            impulseBeforeB();
            doubleEquationB();
            collisingResultX();
            console.log('o-> o  Y');
        }
    
        else if(red.x > orange.x && distance <= radRed + radOrange && toLeftRed === true &&  speedOrange_L === 0 && speedOrange_R === 0 ) { //-------------- o <-o ------------
            inversionX = false;
            speedBfrC();
            impulseBeforeC();
            doubleEquationС();
            collisingResultX();
            console.log('o <-o  Y');
        }
    
        // ---------------------------------------------------------------INVERSION-----------------------------------------------------------------
    
       else if (red.x < orange.x && distance <= radRed + radOrange && toLeftOrange === true && toRightRed === true ) {//---------- inversion o-> <-o ----------
            inversionX = true;
            speedBfrInvA();
            impulseBeforeInvA();
            doubleEquationInvA();
            collisingResultInvX();
            console.log('221');   
        }
    
          else if (red.x < orange.x && distance <= radRed + radOrange && toLeftOrange === true && toLeftRed === true) {//---------- inversion <-o <-o ----------
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            console.log('223');
        }
    
         else if (red.x < orange.x && distance <= radRed + radOrange && toRightOrange === true && toRightRed === true) {//---------- inversion o-> o-> ----------
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            console.log('222');
        }
    
       else if (red.x < orange.x && distance <= radRed + radOrange && toLeftOrange === true && toUpOrange !== true && speedRed_L === 0 && speedRed_R === 0) { //---------- inversion o <-o ----------
            inversionX = true;
            speedBfrInvC();
            impulseBeforeInvC();
            doubleEquationInvС();
            collisingResultInvX();
            console.log('inversion o <-o  X');
            console.log('speedRed_D: ',speedRed_D, 'speedRed_U: ', speedRed_U);
        }
        else if (red.x < orange.x && distance <= radRed + radOrange && toRightRed === true && speedOrange_L === 0 && speedOrange_R === 0){ //---------- inversion o-> o ----------
            inversionX = true;
            speedBfrInvB();
            impulseBeforeInvB();
            doubleEquationInvB();
            collisingResultInvX();
            console.log('inversion o-> o  X');
        }
     
        // -----------------------------------------------------------VERTICAL Y--------------------------------------------
     
       else if (red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toDownOrange === true ) {// ---------------- o(up/red) o(down/orange) -------------
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            collisingResultY();
            console.log('333');
        } else if (red.y > orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true ) {// ---------------- o(down/red) o(down/orange) -------------
            inversionY = false;
            console.log('444');
            speedBfrE();
            impulseBeforeE();
            doubleEquationE();
            collisingResultY();
            
        } else if (red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true ) {// ---------------- o(up/red) o(up/orange) -------------
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            collisingResultY();
            console.log('555');
        } else if (red.y > orange.y && distance <= radRed + radOrange && toUpRed === true && speedOrange_D === 0 && speedOrange_U === 0 ) {// ---------------- o(up/red) o(stop/orange) -------------
            inversionY = false;
            speedBfrF();
            impulseBeforeF();
            doubleEquationF();
            collisingResultY();
            console.log('556');
        } else if (red.y > orange.y && distance <= radRed + radOrange && speedRed_D === 0 && speedRed_U === 0 && toDownOrange === true ) {// ---------------- o(stop/red) o(down/orange) -------------
            inversionY = false;
            speedBfrD();
            impulseBeforeD();
            doubleEquationD();
            collisingResultY();
            console.log('337');
        }
    
        // ---------------------------------------------------------------INVERSION Y-----------------------------------------------------------------
      else if (red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toUpOrange === true ) {
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            collisingResultInvY(); 
            console.log('343');
        } else if (red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && toDownOrange === true ) {
            inversionY = true;
            speedBfrInvE();
            impulseBeforeInvE();
            doubleEquationInvE();
            collisingResultInvY(); 
            console.log('353');
        } else if (red.y < orange.y && distance <= radRed + radOrange && toUpRed === true && toUpOrange === true ) {
            inversionY = true;
            speedBfrInvF();
            impulseBeforeInvF();
            doubleEquationInvF();
            collisingResultInvY(); 
            console.log('363');
        } else if (red.y < orange.y && distance <= radRed + radOrange && speedRed_U === 0 && speedRed_D === 0 && toUpOrange === true ) {
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            collisingResultInvY();  
            console.log('373');
        } else if (red.y < orange.y && distance <= radRed + radOrange && toDownRed === true && speedOrange_U === 0 && speedOrange_D === 0 ) {
            inversionY = true;
            speedBfrInvD();
            impulseBeforeInvD();
            doubleEquationInvD();
            collisingResultInvY(); 
            console.log('383');
        }
    
    }
    