// From CodeSignal Arcade Island of Knowledge
const isIP4Address = (inputString) => {
    const regex = /(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|1[0-9][0-9]|[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|1[0-9][0-9]|[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|1[0-9][0-9]|[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|1[0-9][0-9]|[0-9][0-9]?)/;
    const isExisting = regex.test(inputString);
    return isExisting;
}

console.log(isIP4Address('260.34.34.34'));