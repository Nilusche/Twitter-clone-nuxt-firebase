<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-8 grid-rows-1 border-r  gap-4">
        <Navbar/>
         <div class="bg-white border-r border-l lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto">
            <div class="h-screen w-full -mr-12">
                <div class="head h-14 flex ml-2 border-b">
                        <div class="">
                                <span @click="$router.go(-1)">
                                    <button class="btn mt-2 btn-hover transition ease-in-out items-end">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                                            fill="currentColor"
                                        />
                                        </svg>
                                    </button>
                                </span>
                        </div>
                        <div class="flex mb-1">
                            <div class="flex flex-col p-3 ml-4">
                                <span class="justify-start font-bold text-xl">Tweet</span>
                            </div>
                        </div>

                        
                </div>
                <div class="flex flex-col ml-2 mt-4">
                  <div class="flex"> 
                    <img v-if="!this.profilePic" class=" object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 hover:cursor-pointer transition ease-in-out" 
                      @mouseover="hover = true"
                      @mouseleave="hover = false"
                      @click="navigateToProfile" 
                      src="@/assets/images/default_profile_400x400.png" alt="">
                      <img v-else class=" object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 transition hover:cursor-pointer ease-in-out" 
                      @mouseover="hover = true"
                      @mouseleave="hover = false"
                      @click="navigateToProfile" 
                      :src="this.profilePic" alt="">

                      <div class="flex flex-col">
                        <div class="text-black font-bold">LaravelAlt</div>
                        <div class="text-twgrey-400">@AltLaravel</div>

                      </div>
                  </div>
                </div>
                  

            </div>
            
        </div>
        <!--Search Section-->
        <div class=" hidden lg:inline-block lg:col-span-1" >
            <Search/>
            <who-to-follow/>
            <Trends/>
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
import { projectFirestore } from '@/firebase/config'
export default {
  data () {
      return {
        tweetusername: "",
        tweetusertag: "",
        tweetusertime: "",
        check: false,
        hover: false,
        profilePic: null,
        tweet: null,
      }
  },
  async mounted () {
    //fetch tweet with the id from the route
    const id = this.$route.params.id
    const res = await projectFirestore.collection('tweets').doc(id).get()
    this.tweet = res.data()
    console.log(id)
    //fetch user data
    this.tweetuser = await projectFirestore.collection('users').doc(this.tweet.uid).get()
    

    this.tweetusername = this.tweetuser.data().name
    this.tweetusertag = this.tweetuser.data().tag
    this.tweetusertime = this.timeSince(this.tweet.createdAt)

    let uid_tweet_id = this.$store.state.user.id + '_' + this.tweet.id

    await projectFirestore.collection('likes').doc(uid_tweet_id).get().then(doc => {
        if(doc.exists){
            this.check = true
        }else{
            this.check = false
        }
    })

    await projectFirestore.collection('retweets').doc(uid_tweet_id).get().then(doc => {
        if(doc.exists){
            this.retweeted = true
        }else{
            this.retweeted = false
        }
    })

    this.profilePic = await projectFirestore.collection('users').doc(this.tweet.uid).get().then(doc => {
        return doc.data().profilePic
    })


    
  },
  methods:{
    navigateToProfile(){
        this.$router.push(this.tweet.uid)
    },
    timeSince(date){
          //get the current time
          const now = new Date();
          //get the difference between the current time and the tweet creation time
          const seconds = Math.floor((now - date) / 1000);
          //calculate the number of years, months, days, hours, minutes and seconds since the tweet was created
          let interval = Math.floor(seconds / 31536000);
          if (interval > 1) {
            return interval + " y";
          }
          interval = Math.floor(seconds / 2592000);
          if (interval > 1) {
            return interval + " mo";
          }
          interval = Math.floor(seconds / 86400);
          if (interval > 1) {
            return interval + " d";
          }
          interval = Math.floor(seconds / 3600);
          if (interval > 1) {
            return interval + " h";
          }
          interval = Math.floor(seconds / 60);
          if (interval > 1) {
            return interval + " min";
          }
          return Math.floor(seconds) + " sec";
        }
  }
}
</script>
