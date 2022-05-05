function checkSet(arrToBeSet, checkValue){

    // Only change code below this line
    if (arguments.length !== 2) throw Error('Exactly two arguments were expected');
    if (!Array.isArray(arrToBeSet)) throw Error('An Array was expected as first argument');
 
    let s = new Set(arrToBeSet);
    return [s.has(checkValue), s.size];
    // Only change code above this line
 
 }
