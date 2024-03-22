//conditions
function checkSpeed(){
    const speedInput =document.getElementById("speed").value;
    //coversion of input value to a number.
    let speed = parseInt(speedInput)

    if(isNaN(speed) || speed < 0){
        document.getElementById("result").textContent = 0;
        return;
    }
    let demeritPoints = Math.floor((speed-70)/5);
    if (speed <= 70){
        document.getElementById("result").textContent = "Ok";
    }else if (demeritPoints >= 12){
        document.getElementById("result").textContent = "License suspended";
    }else{
        document.getElementById("result").textContent = "Points: " + demeritPoints ;
    }

}
