<template>
    <div class="hidden lg:flex md:flex sm:flex lg:justify-end justify-start lg:w-auto col-span-1 h-96" style="z-index: 100;">
            <div class="grid grid-cols-1 fixed w-64">
                <NuxtLink to="/home" class="text-left py-2 px-4 mb-2 w-24"><img class="rounded-full btn-hover lg:w-10" src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></NuxtLink>
                <NuxtLink to="/home" :class="{'font-bold': routename=='/home'}" class="ml-4 btn lg:w-36 w-32  btn-small btn-hover transition ease-in-out"> 
                    <span class="lg:mr-2">
                        <svg class="inline-block w-8 -ml-2 -mt-1 mb-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </span>
                    <span class="lg:visible invisible">Home</span>
                </NuxtLink>
                <NuxtLink to="/explore" :class="{'font-bold': routename=='/explore' || routename.includes('explore') }" class="ml-4 btn lg:w-40  btn-small btn-hover transition ease-in-out">
                    <svg class="inline-block w-7 mb-1 mr-2 h-6 -ml-1 -mt-1 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    <span class="lg:visible invisible">Explore</span>
                </NuxtLink>
                <NuxtLink to="/notifications" :class="{'font-bold': routename=='/notifications'}" class="ml-4 btn lg:w-52 btn-small btn-hover transition ease-in-out">
                    <svg class="inline-block w-7 mb-1 mr-2 h-6 -ml-1 -mt-1 " xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span class="lg:visible invisible">Notifications
                        <div class="absolute" v-if="notifications.length>0">
                            <div class="relative bottom-12 left-4 px-1 rounded-full h-5 text-sm   text-white bg-twblue"> {{notifications.length}}</div>
                        </div>
                    </span> 
                </NuxtLink>
                <NuxtLink to="/messages" :class="{'font-bold': routename=='/messages'}" class="ml-4 btn lg:w-44 btn-small btn-hover transition ease-in-out">
                    <svg class="inline-block w-7 mb-1 mr-2 -ml-1 -mt-1 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="lg:visible invisible">Messages</span>
                </NuxtLink>
                <NuxtLink to="/bookmarks" :class="{'font-bold': routename=='/bookmarks'}" class="ml-4 btn lg:w-44 btn-small btn-hover transition ease-in-out">
                    <svg class="inline-block w-7 mb-1 mr-2 -ml-1 -mt-1 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span class="lg:visible invisible">Bookmarks</span> 
                </NuxtLink>
                <NuxtLink to="/lists" :class="{'font-bold': routename=='/lists'}" class="ml-4 btn lg:w-32 btn-small btn-hover transition ease-in-out">
                    <svg class="inline-block w-7 mb-1 mr-2 -ml-1 -mt-1 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span class="lg:visible invisible">Lists</span>
                </NuxtLink>
                <NuxtLink :to="'/' + this.$store.state.user.id" :class="{'font-bold': routename=='/' + this.$store.state.user.id}" class="ml-4 btn lg:w-36 btn-small btn-hover transition ease-in-out">
                    <svg class="inline-block w-5  mr-3 -mt-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                    <span class="lg:visible invisible">Profile</span>
                </NuxtLink>
                <button @click="logout"  class="ml-4 btn lg:w-36  btn-small btn-hover transition ease-in-out">
                    <svg  class="inline-block w-7 mb-1 mr-2 -ml-1 -mt-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/></svg>
                    <span class="lg:visible invisible">Logout</span>
                </button>
                <button class="ml-4 btn-tweet bg-twblue hover:bg-twdarkblue transition ease-in-out" @click="triggerPopup">
                    <span class="lg:visible invisible">Tweet</span>
                </button>
                <!--Profile Section-->
                <NuxtLink :to="'/' + this.$store.state.user.id" class="lg:ml-4 btn lg:w-56 mt-28  w-24 btn-hover transition ease-in-out">
                    <div class="flex">
                        <img v-if="!$store.state.user.id&& $store.state.user.id&&  !$store.state.user.profilePic" class="object-cover flex justify-center w-12 h-12 rounded-full mr-2" src="@/assets/images/default_profile_400x400.png" alt="">
                        <img v-else class="object-cover rounded-full w-12 h-12 mr-2  transition ease-in-out hover:cursor-pointer" :src="$store.state.user.profilePic" alt="">
                        <div class="lg:w-32">
                                <span class="text-sm font-bold truncate lg:block hidden overflow-auto">{{$store.state.user.name}}</span>
                            <span class="lg:inline-block  hidden text-twgrey-400 text-sm -mt-3">@{{$store.state.user.tag}}</span>
                        </div>
                        <div class=" pt-1 font-bold text-xl lg:block hidden">
                            ...
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
</template>

<script>
import { projectFirestore } from '../firebase/config';
export default {
  data(){
    return{
        routename: this.$route.path,
        notifications: [],
    }
  },

  async mounted(){
    // fetch all notifications that are not read from db
    this.notifications = await projectFirestore.collection('notifications').where('notifier', '==', this.$store.state.user.id).where('read', '==', false).onSnapshot(snapshot => {
        this.notifications = snapshot.docs.map(doc => 
          ({
            id: doc.id,
            ...doc.data()
          })
        );
      }
    );


  },
  methods:{
    async logout(){
        let curDateStr = new Date().toDateString()
        //remove spaces
        curDateStr = curDateStr.replace(/\s/g, '')
        const res = await this.$axios.$post('/api/del', {
            key : 'timeline' + ':'+  this.$store.state.user.id + ':' + curDateStr,
        })

        this.$store.dispatch('logout').then(()=>{
            this.$router.push('/');
        });
    },
    triggerPopup(){
        //emit event to parent
        this.$emit('triggerPopup');
    }
  }
};
</script>