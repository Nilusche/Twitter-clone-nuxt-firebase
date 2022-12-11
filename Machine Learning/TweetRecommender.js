
var natural = require('natural');





function getRecommendations(tweet, tweets){
    var TfIdf = natural.TfIdf;
    var tfidf = new TfIdf();

    for (var i=0; i<tweets.length; i++) {
        tfidf.addDocument(tweets[i]);
    }


    var similarityScores = [];
    tfidf.addDocument(tweet);
    var numDocuments = tfidf.documents.length;

    for (var i=0; i<numDocuments-1; i++) {
        var similarityScore = tfidf.tfidf(tweet, i);
        similarityScores.push(similarityScore);
    }

    var topSimilarityIndices = getTopSimilarityIndices(similarityScores);
    var recommendations = getRecommendationsFromIndices(topSimilarityIndices,tweets);
    return recommendations;
}

function getTopSimilarityIndices(similarityScores) {
    var topSimilarityIndices = [];
    for (var i=0; i<5; i++) {
        var topSimilarityIndex = similarityScores.indexOf(Math.max(...similarityScores));
        topSimilarityIndices.push(topSimilarityIndex);
        similarityScores[topSimilarityIndex] = -1;
    }
    return topSimilarityIndices;
}

function getRecommendationsFromIndices(topSimilarityIndices, tweets) {
    var recommendations = [];
    for (var i=0; i<topSimilarityIndices.length; i++) {
        var recommendation = tweets[topSimilarityIndices[i]];
        recommendations.push(recommendation);
    }
    return recommendations;
}

export{
    getRecommendations
};