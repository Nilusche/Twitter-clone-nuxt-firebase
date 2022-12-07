<template>
    <div class="mt-5 bg-twgrey-150 w-96 rounded-2xl">
        <div class="flex p-3">
            <span class="text-xl font-extrabold">Trends for you</span>
            <span class="flex">
                <div class="w-44"></div>
                <button class="rounded-full justify-end btn-hover">
                    <svg class="h-6 w-6 p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>
                </button>
            </span>
            
        </div>
        <!--Trend-->
        <div class="hover:bg-twgrey-200 p-3 transition ease-in-out cursor-pointer" v-for="trend in topFeatures" :key="trend.content" @click="handleSearch(trend.term)">
            <div class="relative">
                <span class="text-twgrey-400 text-xs">Trending in Twitterclone</span>
                <span class="font-bold block text-sm">{{trend.term}}</span>
                <span  class="text-twgrey-400 text-xs">{{trend.termCount}} Tweets</span>
                <div class="absolute top-0 right-0">
                    <button class="rounded-full hover:bg-twgrey-300">
                        <svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import the natural library
import {getFeatures, getTopics, getRake} from '../Machine Learning/featureExtraction.js'
import {projectFirestore} from '../firebase/config.js'
export default{
    data(){
        return{
            topFeatures : [],
        }
    },
    async mounted(){
        // fetch the tweets from the database

        // set the top features as the past top features
        // fetch the trends from the database and sort by date
        const trends = await projectFirestore.collection('trends').orderBy('date', 'desc').get()

        // get the first document
        /*
        if(trends.docs.length>0){
            
            const trend = trends.docs[0].data()
            // check if the trend's date is today and if it is then set the top features as the trend's top features and return
            
            if(new Date(trend.date).getDate() === new Date().getDate()){
                if(trend.topFeatures.length > 6){
                    trend.topFeatures = trend.topFeatures.slice(0,6)
                }
                
                this.topFeatures = trend.topFeatures
                return
            }
        }
        */
        
      


        // update the trends collection by taking the top features 

        const tweets = await projectFirestore.collection('tweets').get()

        if(tweets.docs.length === 0){
            return
        }

        // tweets contains an attribute called content which is a string
        // concatenate all the tweets into one string
        let tweetString = ''
        tweets.forEach(tweet => {
            tweetString += tweet.data().content + ' '
        })

        //remove the chracter "<br>" from the string
        tweetString = tweetString.replaceAll('<br>', ' ')


        
        
        // get the features from the tweet string
        const features = getFeatures(tweetString)
        // sort the features by their tfidf score in ascending order
        features.sort((a,b) => b.tfidf - a.tfidf)
        
        
        
        
    

        // get all tweets that contain a hashtag
        const tweetsWithHashtags = tweets.docs.filter(tweet => tweet.data().content.match(/#[a-zA-Z0-9]+/g))

        // get all the hashtags from the tweets
        const hashtags = tweetsWithHashtags.map(tweet => tweet.data().content.match(/#[a-zA-Z0-9]+/g))

        // count the number of times a hashtag appears
        const hashtagCount = {}
        hashtags.forEach(tweetHashtags => {
            tweetHashtags.forEach(hashtag => {
                if(hashtagCount[hashtag]){
                    hashtagCount[hashtag] += 1
                }else{
                    hashtagCount[hashtag] = 1
                }
            })
        })

        // sort the hashtags by their count in descending order
        const sortedHashtags = Object.keys(hashtagCount).sort((a,b) => hashtagCount[b] - hashtagCount[a])

        // delete duplicates (lowercase and uppercase)
        for(let i=0; i<sortedHashtags.length; i++){
            for(let j=i+1; j<sortedHashtags.length; j++){
                if(sortedHashtags[i].toLowerCase() === sortedHashtags[j].toLowerCase()){
                    sortedHashtags.splice(j,1)
                    j--
                }
            }
        }


        // get the top 3 hashtags
        const topHashtags = sortedHashtags.slice(0,3)
        
        // get the top 5 features that do not include the top hashtag terms or a substring of the top hashtag terms
        let topFeatures = []
        for(let i=0; i<features.length; i++){
            let feature = features[i].term
            let isSubstring = false
            for(let j=0; j<topHashtags.length; j++){
                let hashtag = topHashtags[j]
                if(feature.includes(hashtag.slice(1))){
                    isSubstring = true
                    break
                }
            }

            if(!isSubstring){
                topFeatures.push(features[i])
            }

            if(topFeatures.length === 5){
                break
            }
        }
        // mix the top features and top hashtags
        const mixedFeatures = topFeatures.concat(topHashtags.map(hashtag => {
            return {
                term : hashtag,
                tfidf : 0
            }
        }))
        
        
        // randomly shuffle the mixed features
        for(let i=0; i<mixedFeatures.length; i++){
            let randomIndex = Math.floor(Math.random() * mixedFeatures.length)
            let temp = mixedFeatures[i]
            mixedFeatures[i] = mixedFeatures[randomIndex]
            mixedFeatures[randomIndex] = temp
        }

        this.topFeatures = mixedFeatures

        for(var i =0; i<mixedFeatures.length; i++){
            const term = mixedFeatures[i].term
            // how often does the term appear in the tweets (lowercase and uppercase)
            let termCount = 0
            for(let j=0; j<tweets.docs.length; j++){
                const tweet = tweets.docs[j].data().content
                if(tweet.toLowerCase().includes(term.toLowerCase())){
                    termCount++
                }
            }
            
            mixedFeatures[i]['termCount'] = termCount
        }




        // save the top features to the database with the date
        const date = new Date()
        const dateString = date.toDateString()
        projectFirestore.collection('trends').add({
            mixedFeatures,
            date : dateString
        })


        

        
    },
    methods:{
        handleSearch(term){
            this.$router.push("/explore/" + term)
        }
    }
    
}




</script>