// From CodeSignal Arcade Island of Knowledge
const isIP4Address = (inputString) => {
    let ipArray = inputString.split('.');
    const regex = /^[0-9]+$/;
    console.log(ipArray);

    if(ipArray.length != 4) {
        return false;
    }
    for(let i = 0; i < ipArray.length; i++) {
        if(ipArray[i] < 0 || ipArray[i] > 255) 
            return false;
        
        if(!regex.test(ipArray[i]))
            return false;

        if(ipArray[i].charAt(0) == 0 && ipArray[i].length > 1)
            return false;
    }
    return true;
    
}

console.log(isIP4Address('250.34.01.5'));

