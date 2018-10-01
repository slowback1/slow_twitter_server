function parseTweets(tweetsArr) {
    let resArr = [];
    let count = 0
    for(var i = 0; i < tweetsArr.length; i++) {
        if (!tweetsArr[i].text.startsWith("RT")) {
            if (tweetsArr[i].text.indexOf("https://") >= 0) {
                resArr[count] = tweetsArr[i].text.slice(0, tweetsArr[i].text.indexOf("https://"));
                count += 1;
            } else {
                resArr[count] = tweetsArr[i].text;
                count += 1;
            }
        } else {
            //do nothing
        }
    }
    return resArr;
}

module.exports = parseTweets;