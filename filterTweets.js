function parseTweets(tweetsArr) {
    let resArr = [];
    let count = 0
    for(var i = 0; i < tweetsArr.length; i++) {
        if (!tweetsArr[i].text.startsWith("RT")) {
            resArr[count] = tweetsArr[i].text;
            count += 1;
        } else {
            //do nothing
        }
    }
    return resArr;
}

module.exports = parseTweets;