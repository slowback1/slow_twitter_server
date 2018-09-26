var wordPOS = require('wordpos');

 async function parseTweets(tweetsArr) {
    
    var wordparse = new wordPOS;
    var resultObj = {
        nouns: [],
        verbs: [],
        adjectives: [],
        adverbs: [],
        other: [],
        allwords: []
    }
    for(var i = 0; i < tweetsArr.length; i++) {
        newWords = wordparse.getPOS(tweetsArr[i]).then(result => {
            resultObj.nouns = resultObj.nouns.concat(result.nouns);
            resultObj.verbs = resultObj.verbs.concat(result.verbs);
            resultObj.adjectives = resultObj.adjectives.concat(result.adjectives);
            resultObj.adverbs = resultObj.adverbs.concat(result.adverbs);
            resultObj.other = resultObj.other.concat(result.rest);
            resultObj.allwords = resultObj.allwords.concat(result.nouns);
            resultObj.allwords = resultObj.allwords.concat(result.verbs);
            resultObj.allwords = resultObj.allwords.concat(result.adjectives);
            resultObj.allwords = resultObj.allwords.concat(result.adverbs);
            resultObj.allwords = resultObj.allwords.concat(result.rest);

            return result;
        });

    }
    let res = await newWords;
    console.log(res);
    return res;

}



module.exports = parseTweets;