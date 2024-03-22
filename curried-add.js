/* function curriedAdd(total) {
    if (total === undefined) return 0;
    let accumulatedSum = total;
    return function addWithClosure(num) {
        if(num === undefined) return accumulatedSum;
        accumulatedSum += num;
        return addWithClosure;
    };
}
  
module.exports = { curriedAdd }; */

function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(num) {
      if (num === undefined) return total;
      total += num;
      return addNext;
    };
}
  
module.exports = { curriedAdd };
