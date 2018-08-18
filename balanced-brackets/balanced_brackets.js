function isOpen(bracket) {
    let openbrackets = ["(", "{", "["];
    if (openbrackets.includes(bracket)) {
        return [true, bracket];
    } else {
        return [false, bracket];
    }
}

function mapBrackets(arrayOfBrackets, pushAndPop, isOpenFunc) {
    return arrayOfBrackets.map(
        brackets => pushAndPop(brackets, isOpenFunc));
}

function pushAndPop(brackets, isOpenFunc) {
    let stack = [];
    for (let i = 0; i < brackets.length; ++i) {
        if (isOpenFunc(brackets[i])[0]) {
            stack.push(isOpenFunc(brackets[i])[1]);
        } else if (!isMatch(stack[stack.length - 1] + isOpenFunc(brackets[i])[1])) {
            // stack.push(isOpenFunc(brackets[i])[1]);
            return "NO";
        } else {
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

function isMatch(pair) {
    let matches = ["[]", "{}", "()"];
    if (matches.includes(pair)) {
        return true;
    } else {
        return false;
    }
}

function areBalanced(mapBracketsFunc, arrayOfBrackets, isOpenFunc) {
    let bracketsInfo = mapBracketsFunc(arrayOfBrackets, pushAndPop, isOpenFunc);
        return bracketsInfo;
}

console.log(areBalanced(mapBrackets, ["[]", "()", "{}", "()()", "[[]]", "{{}}", "(())", "{()}", "[(])", "]["], isOpen));
// console.log(areBalanced(mapBrackets, ["[(])()()()()()()()()()()()()()()()()()()()()()()()()()"], isOpen));
