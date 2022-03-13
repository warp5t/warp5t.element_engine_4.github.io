function wallsCollision(){
    // ------------------------------------walls collision---------------------------------------------
     
    if (red.x >= canvWidth - radRed) { // --------------- o-> | -------------------------------
       if(buttonRed === false){
       if(unknownD < 0){
           unknownD = unknownD*(-1);
       }
       else if(unknownInvB < 0){
           unknownInvB = unknownInvB*(-1);
       }
      
       if(inversionX === true){
           speedRed_L = unknownInvB;
       }
       else if(inversionX === false){
          speedRed_L = unknownD; 
       } 
       }

       else if(buttonRed === true) {
           speedRed_L = speedRed_R;
       }
      
       toLeftRed = true;
       toRightRed = false;
   } 
   else if (red.x < radRed) {// ----------------------------- | <-o ----------------------------------
       if(buttonRed === false){ 
           if(unknownD < 0){
           unknownD = unknownD*(-1);
       }
       else if(unknownInvB < 0){
           unknownInvB = unknownInvB*(-1);
       }

       if(inversionX === true){
           speedRed_R = unknownInvB;
       }
       else if(inversionX === false){
          speedRed_R = unknownD; 
       }
       }

       else if(buttonRed === true) {
           speedRed_R = speedRed_L;
       }

       toLeftRed = false;
       toRightRed = true;
   }
   if (red.y >= canvHeigth - radRed) {
       if(buttonRed === false){
           if(unknownZ < 0){
           unknownZ = unknownZ*(-1);
       }
       else if(unknownInvG < 0){
           unknownInvG = unknownInvG*(-1);
       }  
       if(inversionY === true){
           speedRed_U = unknownInvG;
       }
       else if(inversionY === false){
          speedRed_U = unknownZ; 
       }  
       }
          
        else if(buttonRed === true) {
           speedRed_U = speedRed_D;
       }

       toDownRed = false;
       toUpRed = true;
       
   } 
   else if (red.y < radRed) {
       if(buttonRed === false){
           if(unknownZ < 0){
           unknownZ = unknownZ*(-1);
       }
       else if(unknownInvG < 0){
           unknownInvG = unknownInvG*(-1);
       }  
       if(inversionY === true){
           speedRed_D = unknownInvG;
       }
       else if(inversionY === false){
          speedRed_D = unknownZ; 
       } 
       }

       else if(buttonRed === true) {
           speedRed_D = speedRed_U;
       }

       toDownRed = true;
       toUpRed = false;
   }

  
   if (orange.x >= canvWidth - radOrange) {    // --------------------------- o-> | ------------------------------
       
       if(buttonOrange === false){
       if (unknownB < 0) {
           unknownB = unknownB*(-1);
       }
       else if(unknownInvD < 0){
           unknownInvD = unknownInvD*(-1);
       }
       
       if(inversionX === true){
           speedOrange_L = unknownInvD;
       }
       else if(inversionX === false){
           speedOrange_L = unknownB; 
       }
       }

       else if(buttonOrange === true) {
           speedOrange_L = speedOrange_R;
       }


       toLeftOrange = true;
       toRightOrange = false;
   } 
   else if (orange.x < radOrange) {
       
       if(buttonOrange === false){ 
       if(unknownB < 0){
           unknownB = unknownB*(-1);
       }
       else if(unknownInvD < 0){
           unknownInvD = unknownInvD*(-1);
       }
      
       if(inversionX === true){
           speedOrange_R = unknownInvD;
       }
       else if(inversionX === false){
           speedOrange_R = unknownB;    
       }
       }
       
       else if(buttonOrange === true) {
           speedOrange_R = speedOrange_L;
       }

       toLeftOrange = false;
       toRightOrange = true;
   }
   if (orange.y >= canvHeigth - radOrange) {

       if(buttonOrange === false){ 
       if(unknownG < 0){
           unknownG = unknownG*(-1);
       }
       else if(unknownInvZ < 0){
           unknownInvZ = unknownInvZ*(-1);
       }  
       if(inversionY === true){
           speedOrange_U = unknownInvZ;
       }
       else if(inversionY === false){
           speedOrange_U = unknownG; 
       }   
       }
       
       else if(buttonOrange === true) {
           speedOrange_U = speedOrange_D;
       }

       toDownOrange = false;
       toUpOrange = true;
   }
    else if (orange.y < radOrange) {
       if(buttonOrange === false){ 
       if(unknownG < 0){
           unknownG = unknownG*(-1);
       }
       else if(unknownInvZ < 0){
           unknownInvZ = unknownInvZ*(-1);
       }  
       if(inversionY === true){
           speedOrange_D = unknownInvZ;
       }
       else if(inversionY === false){
           speedOrange_D = unknownG; 
       } 
       }

       else if(buttonOrange === true) {
           speedOrange_D = speedOrange_U;
       }
       
       toDownOrange = true;
       toUpOrange = false;
   }
}