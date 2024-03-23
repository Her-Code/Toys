//conditions
function checkSpeed(){
    const speedInput =document.getElementById("speed").value;
    //coversion of input value to a number.
    let speed = parseInt(speedInput)
     //no speed when less than zero
    if(isNaN(speed) || speed < 0){
        document.getElementById("result").textContent = 0;
        return;
    }
    //calculate demeritPoints
    let demeritPoints = Math.floor((speed-70)/5);
    if (speed <= 70){
        document.getElementById("result").textContent = "Ok";
    }else if (demeritPoints >= 12){
        document.getElementById("result").textContent = "License suspended";
    }else{
        document.getElementById("result").textContent = "Points: " + demeritPoints ;
    }

}
