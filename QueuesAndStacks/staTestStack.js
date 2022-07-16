const staTestStack = () => {

    let s = [];

    s.push(15);
    s.push(20);
    s.push(35);
    console.log(s[s.length - 1]);
    s.pop();
    console.log(s[s.length - 1]);
    console.log(s.length);
    s.push(5);
    console.log(s[s.length - 1]);
    s.pop();
    s.pop();
    console.log(s);
    s.pop();
    console.log(s.length < 1 ? true : false);
}

staTestStack();