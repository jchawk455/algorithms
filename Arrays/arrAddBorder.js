// from Codesignal Arcade Exploring the Waters
const addBorder = (picture) => {
    picLength = picture[0].length + 2;
    picHeight = picture.length + 1;
    picOutput = [];

    picOutput[0] = new Array(picLength + 1).join('*');
    for (let i = 0; i < picture.length; i++)
        picOutput[i + 1] = '*' + picture[i] + '*';

    picOutput[picHeight] = new Array(picLength + 1).join('*');

    return picOutput;
}

console.log(addBorder(["abc", "ded"]));