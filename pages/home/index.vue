<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-1 grid-rows-1 border-r  gap-4">
        <Navbar @tweetPopUp="triggerPopup=true"/>
         <div class="bg-white border-r border-l lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto">
                <Create @addTweet="handleTweetAdd"/>
                <!--Post-->
                <div v-for="tweet in tweets" :key="tweet.id" >
                    <Post :tweet="tweet" @loaded="handleLoaded" @deleted="handleDeleted" :id="tweet.id" @update="handleUpdate" :recommended="tweet.recommended??false"/>
                </div>
                <div v-if="loading" class="flex justify-center">
                 <svg class="h-6" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                              <path fill="#1DA1F2" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                              <animateTransform 
                                  attributeName="transform" 
                                  attributeType="XML" 
                                  type="rotate"
                                  dur="1s" 
                                  from="0 50 50"
                                  to="360 50 50" 
                                  repeatCount="indefinite" />
                              </path>
                  </svg>
                </div>

                <div v-if="triggerPopup">
                    <TweetPopUp @triggerPopup="triggerPopup=false" @tweet="handleTweetAdd"/>
                </div>
                
        </div>
        <!--Search Section-->
         <div class=" hidden lg:inline-block lg:col-span-1">
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
import {mapState} from 'vuex'
import { projectFirestore } from '@/firebase/config';
import {getRecommendations} from '@/Machine Learning/TweetRecommender'
export default {

    data(){
      return {
        tweets : [],
        recommendations : [],
        loading : true,
        triggerPopup : false,
      }
    },
    async mounted(){
      /*
      if(this.$store.state.tweets != null && this.$store.state.tweets.length > 0){
        this.tweets = this.$store.state.tweets;
        this.loading = false;
        return
      }
      */
      

      if(this.$store.state.user.id == null){
        this.$router.push('/');
      }


      let boolRedisTweets = false;
      let boolRedisRecommendations = false;

      let  date  = new Date().toDateString();
      // remove whitespace
      date = date.replace(/\s/g, '');

      const queryStr = 'timeline:' + this.$store.state.user.id + ":" + date;
      const response =  await this.$axios.$get('/api/keys', {
          params : {
              key : queryStr
          }
      })

      if(response){
        const tweets = JSON.parse(response);
        this.tweets = tweets;
        boolRedisTweets = true;

      }else{
        // delete preceding redis keys
        const response = await this.$axios.$get('/api/getAll', {
            params : {
                key : 'timeline:*'
            }
        })
        if(response && response.length > 0){
            
            response.forEach(async (item) => {
                const res = await this.$axios.$post('/api/del', {
                    key : item
                })
            })
        }
      }

      const queryStr2 = 'recommendations:' + this.$store.state.user.id + ":" + date;
      const response2 =  await this.$axios.$get('/api/keys', {
          params : {
              key : queryStr2
          }
      })


      if(response2){
        const recommendations = JSON.parse(response2);
        this.recommendations = recommendations;
        boolRedisRecommendations = true;

      }else{
        // delete preceding redis keys
        const response = await this.$axios.$get('/api/getAll', {
            params : {
                key : 'recommendations:*'
            }
        })
        if(response && response.length > 0){
            
            response.forEach(async (item) => {
                const res = await this.$axios.$post('/api/del', {
                    key : item
                })
            })
        }
      }

    if(boolRedisRecommendations && boolRedisTweets){

      // add the property 'recommended' to the recommendations
      this.recommendations.forEach((item) => {
        item.recommended = true;
      })

      // only get first 1 recommendations
      this.recommendations = this.recommendations.slice(0, 1);

      // add the recommendations on top of the tweets
      this.tweets = this.recommendations.concat(this.tweets);


      // remove duplicates
      this.tweets = this.tweets.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.id === thing.id
        ))
      )



      this.loading = false;
      return



    }



        // recommendations part
        // fetch all the tweets from the database
      const res1 = await projectFirestore.collection('tweets').get()
      const tweets1 = res1.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })

      // fetch all the following from the database
      const res2 = await projectFirestore.collection('following').get()
      const following1 = res2.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })

      // fetch all the likes from the database
      const res3 = await projectFirestore.collection('likes').get()
      const likes1 = res3.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })


      // filter following where 'follower' is the current user
      const followingFiltered = following1.filter(follow => follow.follower == this.$store.state.user.id)
      

      // filter tweets where 'uid' is in the followingFiltered array
      const tweetsFiltered = tweets1.filter(tweet => followingFiltered.some(follow => follow.following != tweet.uid && tweet.uid != this.$store.state.user.id))
      // replace <br> in tweets content with ' '
      tweetsFiltered.forEach(tweet => {
        tweet.content = tweet.content.replace(/<br>/g, ' ')
      })


      // get all the liked tweets by checkin the tweets array and see if the current user id is in the likes array
      const likedTweets = tweets1.filter(tweet => likes1.some(like => like.uid == this.$store.state.user.id && like.tweetid == tweet.id))
      if(!likedTweets.length){
        likedTweets.push(tweets[0])
      }

      // sort the tweets by created at descending
      likedTweets.sort((a, b) => b.createdAt - a.createdAt)
      // get last liked tweet
      const lastLikedTweet = likedTweets[0]

      // get the recommended tweets
      const recommendedTweets = await getRecommendations(lastLikedTweet.content, tweetsFiltered)

      this.recommendations = recommendedTweets
      // only get first 1 recommendations
      this.recommendations = this.recommendations.slice(0, 1);
      this.recommendations.forEach((item) => {
        item.recommended = true;
      })

      const redis = await this.$axios.$post('/api/keys', {
          key : 'recommendations' + ':'+  this.$store.state.user.id + ':' + date,
          value : JSON.stringify(recommendedTweets)
      })

      // recommendations end






      //fetch user tweets from firebase
      
      const tweets = await projectFirestore.collection('tweets').where('uid', '==', this.$store.state.user.id).orderBy('createdAt', 'desc').get();
      this.tweets = tweets.docs.map(doc => 
        ({
          id: doc.id,
          ...doc.data()
        })
      );

      

      //get tweets as snapshot
      /*
     await projectFirestore.collection('tweets').where('uid', '==', this.$store.state.user.id).orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        this.tweets = snapshot.docs.map(doc => 
          ({
            id: doc.id,
            ...doc.data()
          })
        );
      }
      );*/

      if(this.tweets.length ==0){ 
        this.loading = false;
      }

      // get all the tweets which the user follows
      const following = await projectFirestore.collection('following').where('follower', '==', this.$store.state.user.id).get();
      const followingIds = following.docs.map(doc => doc.data().following);
      if(followingIds.length !=0){
        const followingTweets = await projectFirestore.collection('tweets').where('uid', 'in', followingIds).orderBy('createdAt', 'desc').get();
        this.tweets = this.tweets.concat(followingTweets.docs.map(doc => 
          ({
            id: doc.id,
            ...doc.data()
          })
        ));
      }
      

      //order tweets by date
      if(this.tweets.length ==0){ 
        this.loading = false;
        return;
      }
      this.tweets.sort((a, b) => b.createdAt - a.createdAt);


      // dispatch the tweets to the store
      //this.$store.commit('setTweets', this.tweets);

      //iterate through tweets
      this.tweets.forEach(tweet => {
          if(tweet){
            
            // replace #hashtags with links
            tweet.content = tweet.content.replace(/#(\w+)/g, '<a class="font-semibold text-twblue hover:underline" href="/explore/$1">#$1</a>');
            // replace @mentions with links
            tweet.content = tweet.content.replace(/@(\w+)/g, '<a class="font-semibold text-twblue hover:underline" href="/explore/$1">@$1</a>');
          }
        })

      this.loading = false;

      const res = await this.$axios.$post('/api/keys', {
          key : 'timeline' + ':'+  this.$store.state.user.id + ':' + date,
          value : JSON.stringify(this.tweets)
      })

      // add recommendations on top of the tweets
      this.tweets = this.recommendations.concat(this.tweets)
      // remove duplicates
      this.tweets = this.tweets.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.id === thing.id
        ))
      )
      
    },
    methods:{
      
      async handleTweetAdd(tweet){
        this.tweets.unshift(tweet);
        let  date  = new Date().toDateString();
        // remove whitespace
        date = date.replace(/\s/g, '');
        const res = await this.$axios.$post('/api/keys', {
          key : 'timeline' + ':'+  this.$store.state.user.id + ':' + date,
          value : JSON.stringify(this.tweets)
        })
      },
      handleLoaded(){
        this.loading = false;
      },
      navigate(tweet){
        this.$router.push(`/${tweet.uid}/status/${tweet.id}`);
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
    },

}

</script>
