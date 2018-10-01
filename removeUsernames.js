function removeUsernames(arr) {
    let resArr = [];
    arr.map ((x) => {
        if(x.charAt("@") > -1) {
            //do nothing
        } else {
            resArr.push(x);
        }
    });
    return resArr;
}

module.exports = removeUsernames;