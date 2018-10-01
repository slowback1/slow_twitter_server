function countWords(string, omittedWords) {
    var resObj = {};
    var words = string.split(" ");
    words.map((word, index) => {
        if(omittedWords.includes(word.toLowerCase()) || word.startsWith("@")) {
            // do nothing
        }
       else if(word in resObj) {
           resObj[word] += 1;
       }  else {
           resObj[word] = 1;
       }
    });
    return resObj;
}

module.exports = countWords;