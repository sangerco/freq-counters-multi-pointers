// add whatever parameters you deem necessary

const charMap = (str) => {
    const map = new Map();
    for (let char of str) {
        let charCount = map.get(char) || 0;
        map.set(char, charCount + 1);
    }
    return map;
}

function constructNote(str1, str2) {
    let charMap1 = charMap(str1);
    let charMap2 = charMap(str2);
    for (let char of charMap1.keys()) {
        if (!charMap2.has(char)) return false;
        if (charMap2.get(char) < charMap1.get(char)) return false;
    }
    return true;
}
