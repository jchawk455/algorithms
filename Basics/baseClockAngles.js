//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5
//you can assume the minute hand moves perfectly from one minute
//to the next.
//BONUS: the parameter accepts the number of SECONDS after midnight

const clockAngles = (minutes) => {
    // convert minutes into hours and minutes ( modulus of 60)
    // calculate the percentage of minutes to one hour
    // 

    var mins = minutes % 60;

    // console.log(mins);
    var hrs = Math.floor(minutes / 60);
    // console.log(hrs);
    var minpct = mins / 60;
    var hrpct = hrs / 12;
    // console.log(minpct);
    // console.log(hrpct);
    
    var angle1 = hrpct * 360;
    // console.log(angle1);
    var angle2 = minpct * 360;
    // console.log(angle2);

    return angle1;

}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));
