function isEven (num) {
    if (num < 0) {
        num *= -1;
    }
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));




function countBs(stringText) {
    let count = 0;
    for (let i = 0; i < stringText.length; i++) {
        if (stringText[i] === "B") {
            count += 1;
        }
    }
    return count;
}

function countChar(stringText, char) {
    let count = 0;
    for (let i = 0; i < stringText.length; i++) {
        if (stringText[i] === char) {
            count += 1;
        }
    }
    return count;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4