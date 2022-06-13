const hexStrToDec = (str) => {
    const hex = {
        A:10, B:11, C:12,
        D:13, E:14, F:15
    }
    let output = 0;
    for (let i = 0; i < str.length; i++) {
        const hexChar = str[str.length-1-i];
        if(hex[hexChar]) output += hex[hexChar] * (16 ** i);
        else output += hexChar * (16 ** i);
    }
    return output;
}

const decToHexStr = (num) => {
    const hex = {
        10:"A", 11:"B", 12:"C",
        13:"D", 14:"E", 15:"F"
    }
    let output = ""
    while(num > 0){
        const remainder = num % 16;
        num -= remainder;
        num = num / 16;
        if(hex[remainder]) output = hex[remainder] + output;
        else output = remainder + output;
    }
    return output;
}

const clockAngles = (min) => {
    const hours = Math.floor(min/60);
    const minutesR = (min%60);

    const hourHandDeg = ((hours * 30)%360);
    const minHandDeg = (minutesR * 6);
    
    console.log(`\n${hours} hours and ${minutesR} minutes`)
    console.log(`Hour hand: ${hourHandDeg} deg`)
    console.log(`Minute hand: ${minHandDeg} deg`)

    return(Math.abs(hourHandDeg - minHandDeg));
}

const clockAngles = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const min = Math.floor(minutes % 60);

    const minAngle = min * 6
    const hourAngle = (hours * 30) + (min * 0.5)

    const angle = hourAngle - minAngle

    return (`${Math.abs(360-angle)} or ${Math.abs(angle)}`)
}

const clockAngles = ( minutes ) => {


    let hour = Math.floor(minutes / 60)
    let minute = Math.floor(minutes % 60);
    console.log( 'hour', hour, 'minute', minute );
  
    let hourAngle = ( hour * 30 ) + ( minute * 0.5 );
    let minuteAngle = minute * 6;
  
    console.log( 'hourAngle', hourAngle, 'minuteAngle', minuteAngle );
  
    // Get the angle of the hour hand counting the minutes passed
    let angle = Math.abs( hourAngle - minuteAngle );
    
    return `${angle} degrees`;
      
  }

  const clockAngles = (minutes) => {
    let hours = Math.trunc(minutes / 60);
    let exactMin = minutes - 60 * hours;
    let hourHandPos = hours * 30 + Math.round(exactMin / 2);
    let minuteHandPos = exactMin * 6;
    let angle = Math.abs(hourHandPos - minuteHandPos);
  
    return angle > 360 ? angle - 360 : angle;
  };

  const clockAngles = (minutes) => {
    //get number of hours
    var hours = Math.floor(minutes/60);

    //if it's more than equal to 12 hours, subtract 12 until it's less than 12 hours
    while (hours >= 12) {
        hours -= 12;
    }

    //get remainder minutes (there can only be 0-59 minutes to determine any given angle on a clock, so modulo 60)
    var remainderMinutes = minutes % 60

    // return(hours + " hours, " + remainderMinutes + " minutes");
    //determine angle of hour hand (from 360)
    //multiply by 360 degrees and divide by 12, because there are 12 hours
    var hourAngle = hours / 12 * 360 

    //determine angle of minute hand (from 360)
    //multiply by 360 degrees and divide by 60, because there are 60 minutes
    var minuteAngle = remainderMinutes / 60 * 360 

    //subtract larger angle from smaller angle to get the difference
    if (hourAngle >= minuteAngle) {
        return hourAngle - minuteAngle + " degrees";
    }
    return minuteAngle - hourAngle + " degrees";
}

const clockAngles = (input) => {
    // degrees per measure
    const degPerMin = 360 / 60;
    const degperHour = 360 / 12;
    const degHourPerMin = 360 / 12 / 60;
    console.log(degPerMin, degperHour, degHourPerMin);

    // useful mins and hours
    const minutes = input % 60;
    const hours = ((input - minutes) / 60) % 12;
    console.log(hours,minutes);

    // calc positions
    const minHand = minutes * degPerMin;
    const hourHand = (hours * degperHour) + minutes * degHourPerMin; 
    console.log(hourHand, minHand);
    
    return hourHand - minHand;
}

const clockAngles = (minute) => {
    let minuteangle = (360/60) * (minute%60)
    
    let hourangle = (360/12) * ((minute/60)%12)
    
    return Math.abs(minuteangle-hourangle)
}





