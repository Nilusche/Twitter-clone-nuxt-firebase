<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-8 grid-rows-1 border-r  gap-4">
        <Navbar/>
         <div class="bg-white border-r border-l border-b lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto">
          <div class="flex p-3 justify-between border-b">
            <span class="text-xl font-bold">Notifications</span>
            <span class="flex">
                <div class="w-44"></div>
                <button class="rounded-full justify-end btn-hover">
                    <svg class="h-6 w-6 p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>
                </button>
            </span>
            
          </div>
            <div v-for="noti in notifications" :key="noti.id" @click="readAndDirect(noti.id, noti.tweetid, noti.uid)" class="hover:cursor-pointer hover:bg-twgrey-200" :class="{'bg-twcomment': !noti.read}">
                <div v-if="noti.type =='reply'">
                    <div class="flex p-3  border-b border-twgrey-200">
                        <img :src="noti.profilePic" class="object-cover rounded-full inline-block " style="height:48px; width:48px; min-width: 48px; min-height: 48px; object-fit: cover;">
                        <div class="flex flex-col ml-3">
                            <div class="flex">
                                <span class="font-bold">{{noti.username}}</span>
                                <span class="ml-1  text-twgrey-400">replied to you</span>
                            </div>
                            <div v-html="noti.content">
                              
                            </div>

                            <div class="flex">
                                <span class="text-sm text-twgrey-400">{{new Date(noti.createdAt.seconds*1000)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="noti.type =='like'">
                    <div class="flex p-3  border-b border-twgrey-200">
                       <img src="@/assets/images/heart.svg" class="object-cover  w-12 h-12">
                        
                        <div class="flex flex-col ml-3">
                            <div class="flex">
                                <span class="font-bold">{{noti.username}}</span>
                                <span class="ml-1  text-twgrey-400">faved your Tweet</span>
                            </div>
                            <div class="flex">
                                <span class="text-sm text-twgrey-400">{{new Date(noti.createdAt.seconds*1000)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="noti.type =='retweet'">
                    <div class="flex p-3 border-b border-twgrey-200">
                      <img src="@/assets/images/retweet.png" class="object-cover w-12 h-12">
                        <div class="flex flex-col ml-3">
                            <div class="flex">
                                <span class="font-bold">{{noti.username}}</span>
                                <span class="ml-1  text-twgrey-400">retweeted your Tweet</span>
                            </div>
                            <div class="flex">
                                <span class="text-sm text-twgrey-400">{{new Date(noti.createdAt.seconds*1000)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
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
import { projectFirestore } from '../../firebase/config';
export default {
  data(){
    return{
      notifications: []
    }
  },

   async mounted(){
      // fetch notifications where uid = current user

      const uid = this.$store.state.user.id; 
      this.notifications = await projectFirestore.collection('notifications').where('notifier', '==', uid).get().then((snapshot) => {
        return snapshot.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        })
      })


      
      

      


   },

    methods: {
      async readAndDirect(id,tweetid, uid){
        // set noti to read
        // redirect to tweet

        await projectFirestore.collection('notifications').doc(id).update({
          read: true
        })
        const route = '/' + uid + '/status/' + tweetid
        console.log(route)
        this.$router.push(route)

      }
    }
}
</script>
