//RECURRING CHARACTER: find the first recurring character inside an array.

function firstRecurringCharacter1(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined
}

function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    return undefined;
}

firstRecurringCharacter1([1,5,5,1,3,4,6]) //return 1
firstRecurringCharacter2([1,5,5,1,3,4,6]) //return 5 // both results differ because of the loops implementation.