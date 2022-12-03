<template>
    <div>
    <div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-8 grid-rows-1 border-r  gap-4">
            <Navbar/>
             <div class="bg-white border-r border-l lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto h-screen " :class="{active: show}">
                <div class="flex">
                    <div class="mr-2">
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
                    <div style="background-color: #eef3f6; " class=" rounded-full mt-2 mb-2 p-2 w-10/12">
                        <span @click="handleSearch"><svg style="filter: invert(49%) sepia(7%) saturate(1181%) hue-rotate(165deg) brightness(89%) contrast(81%);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" h-6 inline-block px-2 -mt-1" ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg></span>
                        <input id="search"   v-model="search"  @keyup.enter="handleSearch" autocomplete="off" type="text"  style="background-color: #eef3f6; outline: none" placeholder="Search Twitter" class="pl-2">           
                    </div>
                    
                </div>
                <div class="flex relative left-0  bottom-auto  justify-center">
                    <div @click="filter(1)" class="pt-3 border-b px-5 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Top</span> <span v-if="selected == 1" class="mt-3 bg-twblue h-1  rounded-lg text-transparent" style="width:2rem"></span></div>
                    <div @click="filter(2)" class="pt-3 border-b px-5 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Latest</span> <span v-if="selected == 2" class="mt-3 bg-twblue h-1 rounded-lg text-transparent" style="width:2rem"></span></div>
                    <div @click="filter(3)" class="pt-3 border-b px-5 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">People</span> <span v-if="selected == 3" class="mt-3 bg-twblue h-1 rounded-lg text-transparent" style="width:2rem"></span></div>
                    <div @click="filter(4)" class="pt-3 border-b px-5 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Photos</span> <span v-if="selected == 4" class="mt-3 bg-twblue h-1 rounded-lg text-transparent"  style="width:2rem"></span></div>
                    <div @click="filter(5)" class="pt-3 border-b px-5 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Videos</span> <span v-if="(selected == 5)" class="mt-3 bg-twblue h-1 rounded-lg text-transparent"  style="width:2rem"></span></div>
                </div>
                <div v-if="(this.tweets.length==0 && this.people.length==0)" class="flex justify-center relative left-0 top-40">
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
                <div v-if="(noresults && !this.loading)">
                    <div class="px-24 py-6">
                        <div class="flex flex-col">
                            <img src="@/assets/images/noresults.png" alt="No Result">
                            <div>
                                <span class="text-4xl text-black font-bold">No Results for "{{copyofsearch}}"</span>
                                <div>
                                    Try searching for something else, or check your Search Settings to see if they're protecting you from potentially sensitive content.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="selected == 1">
                    <div v-if="(people.length>0)" class="flex relative left-0  bottom-auto w-full">
                       <div class="px-4 py-3">
                        <span class="font-bold text-xl ">People</span>
                       </div>
                    </div> 
                    <div class="flex px-4 py-3 justify-between border-t border-twgrey-200 hover:bg-twgrey-200" v-if="(people.length>0)" @click="navigateToProfile(people[0].uid)">
                        <img v-if="!people[0].profilePic" class="object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 hover:cursor-pointer transition ease-in-out" 
                        @mouseover="hover = true"
                        @mouseleave="hover = false"
                        @click="navigateToProfile(people[0].uid)" 
                        src="@/assets/images/default_profile_400x400.png" alt="">
                        <img v-else class=" object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 transition hover:cursor-pointer ease-in-out" 
                        @mouseover="hover = true"
                        @mouseleave="hover = false"
                        @click="navigateToProfile(people[0].uid)" 
                        :src="people[0].profilePic" alt="">
                        
                        <div class="flex flex-col flex-grow">
                            <div class="text-black font-bold">{{people[0].name}}</div>
                            <div class="text-twgrey-400">@{{people[0].tag}}</div>
                            <div>{{people[0].bio}}</div>
                        </div>
                    </div>
                    <div v-if="((people.length>0) && selected==1)">
                        <div @click="filter(3)" class="px-4 py-3 hover:bg-twgrey-200 hover:cursor-pointer transition ease-in-out border-b border-twgrey-200">
                            <span class="text-twblue">View all</span>
                        </div>
                    </div>
                    <div class="flex relative left-0  bottom-auto w-full" v-for="tweet in tweets" :key="tweet.id" @click="navigate(tweet)">
                        <Post :retweeted="tweet.retweeted" :tweet="tweet"  @loaded="handleLoaded" :id="tweet.id" class="w-full"/>
                    </div> 
                </template>
                <template v-if="(selected == 3)">
                    <div class="flex px-4 py-3 justify-between border border-twgrey-200 hover:bg-twgrey-200" v-for="pupil in people" :key="pupil.uid" @click="navigateToProfile(pupil.uid)">
                        <img v-if="!pupil.profilePic" class="object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 hover:cursor-pointer transition ease-in-out" 
                        @mouseover="hover = true"
                        @mouseleave="hover = false"
                        @click="navigateToProfile(pupil.uid)" 
                        src="@/assets/images/default_profile_400x400.png" alt="">
                        <img v-else class=" object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 transition hover:cursor-pointer ease-in-out" 
                        @mouseover="hover = true"
                        @mouseleave="hover = false"
                        @click="navigateToProfile(pupil.uid)" 
                        :src="pupil.profilePic" alt="">
                        
                        <div class="flex flex-col flex-grow">
                            <div class="text-black font-bold">{{pupil.name}}</div>
                            <div class="text-twgrey-400">@{{pupil.tag}}</div>
                            <div>{{pupil.bio}}</div>
                        </div>
                        <div class="flex flex-col justify-center" v-if="(pupil.uid != $store.state.user.id)">
                            <button v-if="!pupil.followed" @click="follow(pupil.uid)" class="bg-twblack-200 hover:bg-twblack-100 transition ease-in-out rounded-full px-5 py-2 font-semibold text-twgrey-100">Follow</button>
                            <button v-else @click="unfollow(pupil.uid)" class="bg-white hover:bg-black hover:text-white border border-black  transition ease-in-out rounded-full px-5 py-2 font-semibold text-black">Unfollow</button>
                        </div>
                    </div>
                </template>
                <template v-if="(selected != 1 && selected!=3) ">
                    <div class="flex relative left-0 bottom-auto w-full" v-for="tweet in tweets" :key="tweet.id" @click="navigate(tweet)">
                        <Post  :tweet="tweet" @loaded="handleLoaded" :id="tweet.id" class="w-full"/>
                    </div> 
                </template>
            </div>
            <!--Search Section-->
            <div class=" hidden lg:inline-block lg:col-span-1" >
           
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
<style scoped>
.active{
    border: 1px;
    border-color: #1da1f2;
}
</style>

<script>
import { projectFirestore } from '@/firebase/config';
import Search from '../../components/Search.vue';
export default {
    components: { Search },
    data(){
        return {
            tweets: [],
            people: [],
            show: false,
            search: this.$route.params.search ?? '',
            copyofsearch: this.$route.params.search ?? '',
            selected: 1,
            loading: true,
            noresults: false,
            hover : false,

        }
    },  
    async mounted(){
        const search = this.$route.params.search ?? '';
        this.search = search;
        this.copyofsearch = search;
        if(search){
            //fetch all tweets from firebase
            const res = await projectFirestore.collection('tweets').get();
            this.tweets = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            this.tweets = this.tweets.filter(tweet => tweet.content.toLowerCase().includes(search.toLowerCase()));


            //fetch all users from firebase 
            const res2 = await projectFirestore.collection('users').get();
            this.people = res2.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            this.people = this.people.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
            //filter out the current user
            this.people = this.people.filter(user => user.uid != this.$store.state.user.id);
                
            //check for every tweet if it is retweeted by the user and if it is, add the property retweeted to the tweet
            //fetch retweets from firebase
            const res3 = await projectFirestore.collection('retweets').get();
            const retweets = res3.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            //check if the tweet is retweeted by the user
            this.tweets.forEach(tweet => {
                retweets.forEach(retweet => {
                    if(retweet.tweetid === tweet.id && retweet.uid === this.$store.state.user.id){
                        tweet.retweeted = true;
                    }
                })
            })
            
            // for each person check if the user is following him
            // fetch all follows from firebase
            const res4 = await projectFirestore.collection('following').get();
            const follows = res4.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            //check if the user is following the person
            this.people.forEach(person => {
                follows.forEach(follow => {
                    console.log(follow.follower,this.$store.state.user.id, follow.following, person.id)
                    if(follow.follower === this.$store.state.user.id && follow.following=== person.uid){
                        person.followed = true;
                    }
                })
            })

            this.loading = false;
        }
        

        if(this.tweets.length == 0 && this.people.length == 0){
            this.noresults = true;
        }else{
            this.noresults = false;
        }

        this.loading = false;

    },
    methods:{
        handleSearch(){
            if(this.search){
                this.copyofsearch = this.search;
                this.$router.push("/explore/"+this.search)
            }
        },
        async filter(id) {

                this.selected = id;
                this.loading = true;
                if(this.selected == 1){
                    //sort tweets array by number of likes
                    this.tweets.sort((a, b) => b.likes- a.likes);


                }
                else if(this.selected == 2){
                    //sort tweets array by createdAt
                    this.tweets.sort((a,b)=>{
                        return new Date(b.createdAt) - new Date(a.createdAt);
                    })
                }

                this.loading = false;
        },
        
        handleLoaded(){
            this.loading = false;
        },
        navigate(tweet){
            this.$router.push(`/${tweet.uid}/status/${tweet.id}`);
        },
        navigateToProfile(uid){
            this.$router.push("/"+uid);
        },

        async follow(id){
        //create a new document in the following collection
        //set document id as follower_following

            const follower = this.$store.state.user.id
            const following = id
            const docId = follower + '_' + following

            //check if the user is already following the person
            const res = await projectFirestore.collection('following').doc(docId).get();
            if(res.exists){
                
            }else{


                await projectFirestore.collection('following').doc(docId).set({
                    follower: follower,
                    following: following
                })

                // update the count of followers of the current user
                const res = await projectFirestore.collection('users').doc(follower).get()
                const followers = res.data().following
                await projectFirestore.collection('users').doc(follower).update({
                    following: followers + 1
                })

                // update the count of following of the user being followed
                const res2 = await projectFirestore.collection('users').doc(following).get()
                const followingCount = res2.data().followers
                await projectFirestore.collection('users').doc(following).update({
                    followers: followingCount + 1
                })
            }

        },

        async unfollow(id){
            const follower = this.$store.state.user.id
            const following = id
            const docId = follower + '_' + following

            //check if the user is already following the person
            const res = await projectFirestore.collection('following').doc(docId).get();

            //if the user is following the person, delete the document
            if(res.exists){
                await projectFirestore.collection('following').doc(docId).delete()

                // update the count of followers of the current user
                const res = await projectFirestore.collection('users').doc(follower).get()
                const followers = res.data().following
                await projectFirestore.collection('users').doc(follower).update({
                    following: followers - 1
                })

                // update the count of following of the user being unfollowed
                const res2 = await projectFirestore.collection('users').doc(following).get()
                const followingCount = res2.data().follower
                await projectFirestore.collection('users').doc(following).update({
                    follower: followingCount - 1
                })
            }
        }
    }
}
    </script>
    