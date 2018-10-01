function combineTweets(arr) {
    let resStr = "";
    arr.map(tweet => {
        resStr = resStr.concat(' ', tweet);
    });
    return resStr;
}

module.exports = combineTweets;
