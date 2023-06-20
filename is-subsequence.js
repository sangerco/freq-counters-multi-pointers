// add whatever parameters you deem necessary
const makeCharMap = (str) => {
    let map = new Map();
    let count = 1;

    for (let char of str) {
        let mapChar = map.get(char) || 1;
        map.set(char, count);
        count++;
    }
    return map;
}

function isSubsequence(str1, str2) {
    let mapChar1 = makeCharMap(str1);
    let mapChar2 = makeCharMap(str2);

    for (let key of mapChar1.keys()) {
        if (!mapChar2.has(key)) return false;
        if (mapChar2.get(key) < mapChar1.get(key) || mapChar2.get(key) < mapChar1.get(key)) return false;
    }

    return true;
}
