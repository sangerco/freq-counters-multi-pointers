// add whatever parameters you deem necessary

const numCountMap = (num) => {
    const numMap = new Map();
    let numString = num.toString();
    for (let char of numString) {
        let numCount = numMap.get(char) || 0;
        numMap.set(char, numCount + 1);
    }
    return numMap;
}

function sameFrequency(num1, num2) {
    let num1Map = numCountMap(num1);
    let num2Map = numCountMap(num2);
    if(num1Map.size !== num2Map.size) return false;
    for(let key of num1Map.keys()) {
        if(!num2Map.has(key)) return false;
        if(num2Map.get(key) !== num1Map.get(key)) return false;
    }
    return true;
}
