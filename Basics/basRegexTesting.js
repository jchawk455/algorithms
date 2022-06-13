// From CodeSignal Arcade Island of Knowledge
const regexTesting = () => {
    const string = 'my name is jo1hn and my age is 62';
    const regex = /name is [a-z]{1,4}/;
    const isExisting = regex.test(string);
    return isExisting;
}

console.log(regexTesting());