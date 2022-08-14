<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-1 grid-rows-1 border-r  gap-4">
        <Navbar/>
         <div class="bg-white border-r border-l lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto">
                <Create @addTweet="handleTweetAdd"/>

                <!--Post-->
                
                <div v-for="tweet in tweets" :key="tweet.content + tweet.createdAt">
                    <Post :tweet="tweet" @loaded="handleLoaded"/>
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
                
        </div>
        <!--Search Section-->
         <div class=" hidden lg:inline-block lg:col-span-1" @click="logout">
          <Search/>
          <Trends/>
          <who-to-follow/>
      </div>
</div>
<div class="mobile-nav lg:hidden md:hidden sm:hidden fixed bottom-0 left-0 w-screen bg-white p-4 border-t border-twgrey-200">
    <div class="flex justify-center">
      <div class="py-2 px-7">
        <span class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </span>
      </div>
      <div class="py-2 px-7">
        <span class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
        </span>
      </div>
      <div class="py-2 px-7">
        <span class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </span>
      </div>
      <div class="py-2 px-7">
        <span class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        
      </div>
    </div>
</div>
</div>

  
</template>

<script>
import {mapState} from 'vuex'
import { projectFirestore } from '@/firebase/config';

export default {
    name: "IndexPage",
    data(){
      return {
        tweets : [],
        loading : true
      }
    },
    async mounted(){
      if(this.$store.state.user.id == null){
        this.$router.push('/');
      }

      //fetch user tweets from firebase
      /*
      const tweets = await projectFirestore.collection('tweets').where('uid', '==', this.$store.state.user.id).orderBy('createdAt', 'desc').get();
      this.tweets = tweets.docs.map(doc => 
        ({
          id: doc.id,
          ...doc.data()
        })
      );*/
      //get tweets as snapshot
     await projectFirestore.collection('tweets').where('uid', '==', this.$store.state.user.id).orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        this.tweets = snapshot.docs.map(doc => 
          ({
            id: doc.id,
            ...doc.data()
          })
        );
      }
      );

      if(this.tweets.length ==0){ 
        this.loading = false;
      }

    },
    methods:{
      logout(){
        this.$store.dispatch('logout').then(()=>{
          this.$router.push('/');
        });
      },
      handleTweetAdd(tweet){
        this.tweets.unshift(tweet);
      },
      handleLoaded(){
        this.loading = false;
      }
    },
}

</script>
