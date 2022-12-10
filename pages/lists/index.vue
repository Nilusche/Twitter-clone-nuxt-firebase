<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-8 grid-rows-1 border-r  gap-4">
        <Navbar/>
         <div class="bg-white border-r border-l lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto">
              <div v-for="tweet in tweets" :key="tweet.id" >
                  <Post :tweet="tweet" @loaded="handleLoaded" @deleted="handleDeleted" :id="tweet.id" @update="handleUpdate"/>
              </div>
                 
        </div>
        <!--Search Section-->
        <div class=" hidden lg:inline-block lg:col-span-1" >
            <Search/>
            <Trends/>
            <who-to-follow/>
        </div>
</div>
<div class="mobile-nav lg:hidden md:hidden sm:hidden fixed bottom-0 left-0 w-screen bg-white p-4 border-t border-twgrey-200">
  <div class="flex justify-center">
      <div class="py-2 px-7">
        <NuxtLink to="/home" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </NuxtLink>
      </div>
      <div class="py-2 px-7">
        <NuxtLink to="/explore" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
        </NuxtLink>
      </div>
      <div class="py-2 px-7">
        <NuxtLink to="/notifications" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </NuxtLink>
      </div>
      <div class="py-2 px-7">
        <NuxtLink to="/messages" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </NuxtLink>
        
      </div>
    </div>
</div>
</div>


  
</template>

<script>
import {getRecommendations} from '@/Machine Learning/TweetRecommender'
import {projectFirestore} from '@/firebase/config'
export default {
  data(){
  return{
    tweets: []
  }
  },
  async mounted(){
   
    // fetch all the tweets from the database
    const res = await projectFirestore.collection('tweets').get()
    const tweets = res.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })

    // fetch all the following from the database
    const res2 = await projectFirestore.collection('following').get()
    const following = res2.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })

    // fetch all the likes from the database
    const res3 = await projectFirestore.collection('likes').get()
    const likes = res3.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })


    // filter following where 'follower' is the current user
    const followingFiltered = following.filter(follow => follow.follower == this.$store.state.user.id)
    

    // filter tweets where 'uid' is in the followingFiltered array
    const tweetsFiltered = tweets.filter(tweet => followingFiltered.some(follow => follow.following != tweet.uid && tweet.uid != this.$store.state.user.id))
    // replace <br> in tweets content with ' '
    tweetsFiltered.forEach(tweet => {
      tweet.content = tweet.content.replace(/<br>/g, ' ')
    })


    // get all the liked tweets by checkin the tweets array and see if the current user id is in the likes array
    const likedTweets = tweets.filter(tweet => likes.some(like => like.uid == this.$store.state.user.id && like.tweetid == tweet.id))
    if(!likedTweets.length){
      likedTweets.push(tweets[0])
    }

    // sort the tweets by created at descending
    likedTweets.sort((a, b) => b.createdAt - a.createdAt)
    // get last liked tweet
    const lastLikedTweet = likedTweets[0]

    // get the recommended tweets
    const recommendedTweets = await getRecommendations(lastLikedTweet.content, tweetsFiltered)
    console.log(recommendedTweets)

    this.tweets = recommendedTweets


    
       
  },
  methods:{
    handleLoaded(){
      this.loading = false;
    },
    async handleDeleted(tweet){
        this.tweets = this.tweets.filter(t => t.id != tweet);
        let  date  = new Date().toDateString();
        // remove whitespace
        date = date.replace(/\s/g, '');
        const res = await this.$axios.$post('/api/keys', {
          key : 'timeline' + ':'+  this.$store.state.user.id + ':' + date,
          value : JSON.stringify(this.tweets)
        })

    },
    async handleUpdate(){
      let  date  = new Date().toDateString();
      // remove whitespace
      date = date.replace(/\s/g, '');
      const res = await this.$axios.$post('/api/keys', {
        key : 'timeline' + ':'+  this.$store.state.user.id + ':' + date,
        value : JSON.stringify(this.tweets)
      })
    }
  }

}
</script>
