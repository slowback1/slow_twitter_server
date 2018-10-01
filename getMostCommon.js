function getMostCommon(wordObj, amount) {
    var resArr = [];
    var sort = []
    for ( var key in wordObj) {
  //      console.log(key);
//        console.log(wordObj[key]);
        sort.push([key, wordObj[key]]);
        sort.sort(function(a, b) {
            return a[1] - b[1];
        });
    }
    for(var i = sort.length - 1; i > sort.length - amount; i--) {
            resArr.push(sort[i]);
    }
    return resArr;
}

module.exports = getMostCommon;