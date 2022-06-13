// From CodeSignal Arcade Island of Knowledge
const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    let yourStrong = yourLeft >= yourRight ? yourLeft : yourRight;
    let friendsStrong = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    let yourWeak = yourLeft <= yourRight ? yourLeft : yourRight;
    let friendsWeak = friendsLeft <= friendsRight ? friendsLeft : friendsRight;

    return(yourStrong == friendsStrong && yourWeak == friendsWeak);
}

console.log(areEquallyStrong(15, 10, 15, 9));