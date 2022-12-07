// import the TfIdf object from the natural library
var natural = require('natural');

const sw = require('stopword')
// create a function that will return the most important words from a given text
function getFeatures(text) {
    // create a TfIdf object
    var tfidf = new natural.TfIdf();

    // remove stop words
    text = sw.removeStopwords(text.split(' ')).join(' ')
    

    // add the text to the TfIdf object
    tfidf.addDocument(text);

    // get the most important words from the text that are not stop words
    var features = tfidf.listTerms(0); // 0 means not to include stop words

    // return the most important words
    return features;
}


// topic modelling with LDA
var lda = require('lda');


function getTopics(text) {
    var documents = text.match( /[^\.!\?]+[\.!\?]+/g );
    text = sw.removeStopwords(text.split(' ')).join(' ')
    var result = lda(documents, 6,1, ['en']);

    return result;
}

//import rake from 'rake-js'



function getRake(text){
    text = sw.removeStopwords(text.split(' ')).join(' ')
    const original = text;


    // split the text into an array of sequences of words 
    // the number of words in each sequences is random between 1 and 4
    var sequences = text.split(' ').reduce((acc, word) => {
        var last = acc[acc.length - 1];
        if (last.length < Math.floor(Math.random() * 3) + 1) {
            last.push(word);
        } else {
            acc.push([word]);
        }
        return acc;
    }, [[]]);

    var candidates = [];
    for(var i=0; i<sequences.length; i++){
        var candidate = sequences[i].join(' ');
        if(candidate.length > 3){
            candidates.push(candidate);
        }
    }


    var scores = [];
    for(var i=0; i<candidates.length; i++){
        // split the candidate into words
        var words = candidates[i].split(' ');
        var score = 0;
        for(var j=0; j<words.length; j++){
            // calculate the word frequency (freq(w)) in the original text
            var freq = original.split(' ').filter(w => w === words[j]).length;
            // calculate the word degree (deg(w)) 
            var deg = words.length - 1;
            // calculate the ratio of degree to frequency (deg(w)/freq(w)) (float)
            var ratio = parseFloat(deg / freq);
            
            // add the ratio to the score
            score += ratio;
        }
        // add the score to the scores together with the candidate
        scores.push({score: score, candidate: candidates[i]});

    }
    // sort the scores in descending order
    scores.sort((a, b) => b.score - a.score);
    
    
    return scores;

}


export { getFeatures, getTopics, getRake };

