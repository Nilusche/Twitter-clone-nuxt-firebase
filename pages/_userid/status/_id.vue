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
                                <span class="justify-start font-bold text-xl">Thread</span>
                            </div>
                        </div>

                        
                </div>
                <div v-for="parent in parents" :key="parent.id" class="flex justify-between">
                    <Post class="w-full" :tweet="parent" :isReply="true" @loaded="handleLoaded" @deleted="filterDeleted" :id="parent.id"/>
                </div>
                <div class="flex flex-col ml-4 mt-4 mr-4" v-if="loaded">
                  
                  <div class="flex justify-between">
                      <div class="flex">
                        <img v-if="!this.profilePic" class="object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 hover:cursor-pointer transition ease-in-out" 
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
                            <div class="text-black font-bold">{{tweetusername}}</div>
                            <div class="text-twgrey-400">@{{tweetusertag}}</div>
                          </div>
                      </div>
                      <div class="flex flex-col">
                        <div  class=" py-2 px-2 hover:bg-twgrey-200 hover:cursor-pointer h-9 rounded-full" v-if="this.$store.state.user.id == tweet.uid">
                          <span  @click.stop="showDelete=!showDelete">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                          </span>
                          
                        </div>

                        <div v-if="showDelete" class="p-2  hover:bg-twgrey-200 hover:cursor-pointer h-9 rounded-full" >
                          <span  @click.stop="handleDelete" class=" text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                          </span>
                            
                        </div>
                      </div>
                  </div>

                  
                  
                  <div class="mt-5 text-xl" v-html="this.tweet.content">
                    
                  </div>
                  <div v-if="this.tweet.image" class="rounded-full object-contain w-full">
                      <img :src="this.tweet.image" class="rounded-lg object-contain" alt="">
                    </div>
                  <div v-if="this.tweet" class="text-twgrey-400 border-twgrey-200 border-b py-3">
                    {{timestampToDate(this.tweet.createdAt) }}Twitterclone Web App
                  </div>
                  <div class="text-twgrey-400 border-twgrey-200 border-b py-3 hover:cursor-pointer hover:bg-twgrey-200">
                    View Tweet analytics
                  </div>
                  <div class="text-twgrey-400 border-twgrey-200 border-b py-3 hover:cursor-pointer hover:bg-twgrey-200">
                    <span  v-if="this.tweet.retweets>0"><span class="font-bold text-black mr-1">{{this.tweet.retweets}}</span>Retweet</span> 
                    <span  v-if="this.tweet.likes>0"> <span  class=" text-black mr-1 font-bold">{{this.tweet.likes}}</span>Like</span>
                     
                  </div>
                  <div class="flex justify-center py-3 border-b border-twgrey-200">
                    <span class="mx-6 md:mx-12 lg:mx-6 cursor-pointer hover:text-twblue">
                        <span class="rounded-full p-2  mr-1  hover:bg-twgrey-200">
                        <svg class="share w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
                        </span>
                    </span>
                    <span class="mx-6 md:mx-12 lg:mx-6 cursor-pointer hover:text-twgreen ">
                        <span class="rounded-full  mr-1 hover:bg-twgrey-200 p-2 pr-3" @click.stop="handleRetweet" >
                            <span class="rt rt-retweet " :class="{active:retweeted}">
                            <svg :class="{green:retweeted}" class="icon icon-retweet mb-1 ml-1  inline-block" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd" stroke="#53688c" stroke-linecap="round" stroke-width="2" transform="translate(2.25 5.5)">
                                    <g transform="translate(0 1)">
                                    <path d="m1.0651197 1.03553391-.02958579 5 5-.0295858" transform="matrix(-.70710678 .70710678 -.70710678 -.70710678 8.535534 3.535534)"/>
                                    <path d="m3.5 1v11h6" stroke-linejoin="round"/>
                                    </g>
                                    <g transform="matrix(-1 0 0 -1 19.5 12)">
                                    <path d="m1.0651197 1.03553391-.02958579 5 5-.0295858" transform="matrix(-.70710678 .70710678 -.70710678 -.70710678 8.535534 3.535534)"/>
                                    <path d="m3.5 1v11h6" stroke-linejoin="round"/>
                                    </g>
                                </g>
                                </svg>
                            </span>
                        <!--
                            <svg class=" retweet  w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">//fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc<path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"/></svg>
                        -->
                      </span>
                    </span>
                    <span class="mx-6 md:mx-12 lg:mx-6  cursor-pointer hover:text-twred">
                        <span class="rounded-full p-2 mr-1 hover:bg-twgrey-200">
                            <input type="checkbox" :id="`checkbox-${this.tweet.id}`" :checked="check" :class="{checkbox:check}" />
                            <label for="checkbox" class="inline-block"  @click.stop="handleLike" :class="{checked:check}">
                                <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                                    <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                                    <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

                                    <g id="grp7" opacity="0" transform="translate(7 6)">
                                        <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                                        <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                                    </g>

                                    <g id="grp6" opacity="0" transform="translate(0 28)">
                                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                                        <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                                    </g>

                                    <g id="grp3" opacity="0" transform="translate(52 28)">
                                        <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                                        <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                                    </g>

                                    <g id="grp2" opacity="0" transform="translate(44 6)">
                                        <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                                    </g>

                                    <g id="grp5" opacity="0" transform="translate(14 50)">
                                        <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                                        <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                                    </g>

                                    <g id="grp4" opacity="0" transform="translate(35 50)">
                                        <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                                        <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                                    </g>

                                    <g id="grp1" opacity="0" transform="translate(24)">
                                        <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                                        <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                                    </g>
                                    </g>
                                </svg>
                            </label>
                        <!--
                            <svg class="like w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        -->
                        
                        </span>
                    </span>
                    <span class="mx-6 md:mx-12 lg:mx-6 cursor-pointer hover:text-twblue">
                        <span class="rounded-full mr-1 p-2 hover:bg-twgrey-200 pr-3">
                        <svg class="share w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"/></svg>
                        </span>
                    </span>
                  </div>
                  <div v-for="reply in replies" :key="reply.id" class="flex justify-between py-3 border-b border-twgrey-200">
                      <Post class="w-full" :tweet="reply" @loaded="handleLoaded" @deleted="filterDeleted" :id="reply.id"/>
                  </div>
                  <div class="flex justify-between py-3 ml-4 border-b border-twgrey-200">
                    <div class="flex">
                        <img v-if="!this.$store.state.user.profilePic" class="object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 hover:cursor-pointer transition ease-in-out" 
                          @mouseover="hover = true"
                          @mouseleave="hover = false"
                          @click="navigateToProfile" 
                          src="@/assets/images/default_profile_400x400.png" alt="">
                          <img v-else class=" object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 transition hover:cursor-pointer ease-in-out" 
                          @mouseover="hover = true"
                          @mouseleave="hover = false"
                          @click="navigateToProfile" 
                          :src="this.$store.state.user.profilePic" alt="">
                          
                          <div class="flex flex-col justify-center ">
                            <div ref="content_div" class="message-box-content p-2 focus:outline-none focus:before:text-gray-600 pb-3 " contenteditable="true" placeholder="Tweet your reply"></div>
                          </div>
                      </div>
                      <div class="flex flex-col justify-center mr-4">
                        <button @click.stop="handleCreateTweet" class="px-4 py-1 rounded-full bg-twblue text-white font-bold cursor-pointer hover:bg-twdarkblue">Reply</button>
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
import {timestamp} from '@/firebase/config.js'
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
        loaded: false,
        tweet: null,
        showDelete: false,
        replies: [],
        parents:[],
      }
  },
  async udpated(){
    await mounted()
  },
  async mounted () {
    //fetch tweet with the id from the route
    const id = this.$route.params.id
    const res = await projectFirestore.collection('tweets').doc(id).get()
    this.tweet = res.data()
    if(!this.tweet){
      this.$router.push('/home')
    }
    this.tweet.createdAt = res.data().createdAt.toDate()
    this.tweet.id = res.id
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

    //fetch replies
    // all fetch all tweets where replyTo is equal to the id of the tweet
    const replies = await projectFirestore.collection('tweets').where('replyTo', '==', id).get()
    this.replies = replies.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })

    this.loaded = true


    //check if this tweet is a reply to another tweet
    const parents = []
    if(this.tweet.replyTo){
      let parent = await this.fetchTweet(this.tweet.replyTo)
      if(parent){
        parents.push(parent)
        while(parent.replyTo){
          parent = await this.fetchTweet(parent.replyTo)
          if(parent){
            parents.push(parent)
          }else{
            break
          }
        }
      }
    }
    this.parents = parents
    //reverse the array so that the first parent is at the top
    this.parents = parents.reverse()



    
  
    
  },
  methods:{
    async fetchTweet(id){
      //fetch tweet with the id and return it with the id
      const res = await projectFirestore.collection('tweets').doc(id).get()
      const tweet = res.data()
      tweet.id = res.id
      return tweet
    },
    navigateToProfile(){
        // route to this tweet's uid
        this.$router.replace({path: '/' + this.tweet.uid})

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
        ,
        timestampToDate(timestamp){
          //convert timestamp to datetime
          const date = new Date(timestamp)
          //get the year, month, day, hour, minute and second from the datetime
          const year = date.getFullYear()
          const month = date.getMonth()
          const day = date.getDate()
          const hour = date.getHours()
          const minute = date.getMinutes()
          const second = date.getSeconds()
          //get month name from the month number
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];

          //return the date in the format of year-month-day hour:minute:second
          return `${hour}:${minute} ⋅ ${monthNames[month -1]} ${day}, ${year} ⋅ `

        },
        async handleLike(){
            document.getElementById(`checkbox-${this.tweet.id}`).checked = !document.getElementById(`checkbox-${this.tweet.id}`).checked
            document.getElementById(`checkbox-${this.tweet.id}`).classList.toggle('checkbox')
            
            let uid_tweet_id = this.$store.state.user.id + '_' + this.tweet.id
            //check if tweet has been liked by current user
            await projectFirestore.collection('likes').doc(uid_tweet_id).get().then(async doc => {
                if(doc.exists){
                    //if liked, remove like
                    await projectFirestore.collection('likes').doc(uid_tweet_id).delete()
                    //decrement count tweet document
                    this.tweet.likes -=1
                    await projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        likes: this.tweet.likes
                    })
                }else{
                    //if not liked, add like
                    await projectFirestore.collection('likes').doc(uid_tweet_id).set({
                        uid: this.$store.state.user.id,
                        tweetid: this.tweet.id
                    })
                    this.tweet.likes++
                    await projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        likes: this.tweet.likes
                    })
                }
            })
            let curDateStr = new Date().toDateString()
            //remove spaces
            curDateStr = curDateStr.replace(/\s/g, '')
            const res1 = await this.$axios.$post('/api/del', {
                key : 'timeline' + ':'+  this.$store.state.user.id + ':' + curDateStr,
            })
        },
        async handleRetweet(){
          if(this.retweeted){
              this.retweeted = false
          }
            this.retweeted = !this.retweeted
            let uid_tweet_id = this.$store.state.user.id + '_' + this.tweet.id
            await projectFirestore.collection('retweets').doc(uid_tweet_id).get().then(async doc => {
                if(doc.exists){
                    //if retweeted, remove retweet
                    await projectFirestore.collection('retweets').doc(uid_tweet_id).delete()
                    //decrement count tweet document
                    this.tweet.retweets -=1
                    await projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        retweets: this.tweet.retweets
                    })
                }else{
                    //if not retweeted, add retweet
                    await projectFirestore.collection('retweets').doc(uid_tweet_id).set({
                        uid: this.$store.state.user.id,
                        tweetid: this.tweet.id
                    })
                    this.tweet.retweets++
                    await projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        retweets: this.tweet.retweets
                    })
                }
                
            })
            let curDateStr = new Date().toDateString()
            //remove spaces
            curDateStr = curDateStr.replace(/\s/g, '')
            const res1 = await this.$axios.$post('/api/del', {
                key : 'timeline' + ':'+  this.$store.state.user.id + ':' + curDateStr,
            })
        },
        filterDeleted(id){
            //filter out the tweet with the id from the replies array
            this.replies = this.replies.filter(reply => reply.id !== id)
        },

        async handleDelete(){
            const replyTo = this.tweet.replyTo
            //delete tweet
            await projectFirestore.collection('tweets').doc(this.tweet.id).delete()
            //delete likes
            await projectFirestore.collection('likes').where('tweetid', '==', this.tweet.id).get().then(async querySnapshot => {
                querySnapshot.forEach(async doc => {
                    await projectFirestore.collection('likes').doc(doc.id).delete()
                })
            })
            //delete retweets
            await projectFirestore.collection('retweets').where('tweetid', '==', this.tweet.id).get().then(async querySnapshot => {
                querySnapshot.forEach(async doc => {
                    await projectFirestore.collection('retweets').doc(doc.id).delete()
                })
            })
            //delete replies

            // for each reply in the replies array delete the reply
            this.replies.forEach(async reply => {
                await projectFirestore.collection('tweets').doc(reply.id).delete()
                //delete likes
                await projectFirestore.collection('likes').where('tweetid', '==', reply.id).get().then(async querySnapshot => {
                    querySnapshot.forEach(async doc => {
                        await projectFirestore.collection('likes').doc(doc.id).delete()
                    })
                })
                //delete retweets
                await projectFirestore.collection('retweets').where('tweetid', '==', reply.id).get().then(async querySnapshot => {
                    querySnapshot.forEach(async doc => {
                        await projectFirestore.collection('retweets').doc(doc.id).delete()
                    })
                })
            })

            if(replyTo){
                //if tweet is a reply, decrement the count of replies in the tweet it is replying to
                await projectFirestore.collection('tweets').doc(replyTo).get().then(async doc => {
                    const tweet = doc.data()
                    tweet.comments--
                    await projectFirestore.collection('tweets').doc(replyTo).update({
                        comments: tweet.comments
                    })
                })
            }


            let curDateStr = new Date().toDateString()
            //remove spaces
            curDateStr = curDateStr.replace(/\s/g, '')
            const res1 = await this.$axios.$post('/api/del', {
                key : 'timeline' + ':'+  this.$store.state.user.id + ':' + curDateStr,
            })
            // route back to home
            this.$router.push('/home')


            this.showDelete = false
        },
       async handleCreateTweet(){
            const content = this.$refs.content_div.innerText

            if(content.length > 0){
                //keep newlines in the content for firebase
                const contentWithNewlines = content.replace(/\n/g, '<br>')
                const tweet = {
                    content: contentWithNewlines,
                    uid: this.$store.state.user.id,
                    createdAt:timestamp(),
                    likes:0,
                    comments:0,
                    retweets:0,
                    replyTo: this.tweet.id,
                    profilePic: this.$store.state.user.profilePic,
                }
                const res = await projectFirestore.collection('tweets').add(tweet);
                this.$refs.content_div.innerText = ''
                tweet.id = res.id;

                tweet.tweetusertime = this.timeSince(new Date())
                tweet.tweetusername =  this.$store.state.user.name,
                tweet.tweetusertag =  this.$store.state.user.tag,
                // add tweet to the replies array
                this.replies.push(tweet)


                //update the number of replies in the tweet document
                this.tweet.comments++
                await projectFirestore.collection('tweets').doc(this.tweet.id).update({
                    comments: this.tweet.comments
                })

                let curDateStr = new Date().toDateString()
                //remove spaces
                curDateStr = curDateStr.replace(/\s/g, '')
                const res1 = await this.$axios.$post('/api/del', {
                    key : 'timeline' + ':'+  this.$store.state.user.id + ':' + curDateStr,
                })

                this.$router.push('/home')
            }
            
        },
        handleLoaded(){
          this.loading = false;
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

<style scoped>



.rt .icon path {
  fill: transparent;
  stroke-width: 2;
}

.rt:hover {
  color: #42E6A4;
}
.green {
  color: #42E6A4;
}

.rt:hover .icon path {
  stroke: #42E6A4;
}

.rt.active {
  color: rgb(8, 7, 7);
}

.rt-share.active {
  background-color: rgba(0, 112, 210, 0.1);
}

.rt.active .icon path {
  stroke: #42E6A4;
  stroke-width: 3;
}

.rt.active .icon-retweet path {
  stroke: #42E6A4;
}

.rt.active .icon-like path {
  stroke: rgb(191, 2, 1);
  fill: rgb(191, 2, 1);
}

.rt.active .icon-retweet {
  animation: rotate 0.25s;
}

.rt.active .icon-like {
  animation: bounce 0.25s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

#heart-svg {
  cursor: pointer;
  overflow: visible;
  width: 25px;
  z-index: 100;
  margin-bottom: -6px;

}
#heart-svg #heart {
  transform-origin: center;
  animation: animateHeartOut 0.3s linear forwards;
}
#heart-svg #main-circ {
  transform-origin: 29.5px 29.5px;
}

.checked{
    fill: #E2264D;
}
input[type=checkbox] {
  display: none;
}

.checkbox:checked + label svg #heart {
  transform: scale(0.2);
  fill: #E2264D;
  animation: animateHeart 0.3s linear forwards 0.25s;
}
.checkbox:checked + label svg #main-circ {
  transition: all 2s;
  animation: animateCircle 0.3s linear forwards;
  opacity: 1;
}
.checkbox:checked + label svg #grp1 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp1 #oval1 {
  transform: scale(0) translate(0, -30px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp1 #oval2 {
  transform: scale(0) translate(10px, -50px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp2 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp2 #oval1 {
  transform: scale(0) translate(30px, -15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp2 #oval2 {
  transform: scale(0) translate(60px, -15px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp3 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp3 #oval1 {
  transform: scale(0) translate(30px, 0px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp3 #oval2 {
  transform: scale(0) translate(60px, 10px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp4 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp4 #oval1 {
  transform: scale(0) translate(30px, 15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp4 #oval2 {
  transform: scale(0) translate(40px, 50px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp5 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp5 #oval1 {
  transform: scale(0) translate(-10px, 20px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp5 #oval2 {
  transform: scale(0) translate(-60px, 30px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp6 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp6 #oval1 {
  transform: scale(0) translate(-30px, 0px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp6 #oval2 {
  transform: scale(0) translate(-60px, -5px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp7 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}
.checkbox:checked + label svg #grp7 #oval1 {
  transform: scale(0) translate(-30px, -15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}
.checkbox:checked + label svg #grp7 #oval2 {
  transform: scale(0) translate(-55px, -30px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}
.checkbox:checked + label svg #grp2 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
.checkbox:checked + label svg #grp3 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
.checkbox:checked + label svg #grp4 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
.checkbox:checked + label svg #grp5 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
.checkbox:checked + label svg #grp6 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}
.checkbox:checked + label svg #grp7 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

@keyframes animateCircle {
  40% {
    transform: scale(10);
    opacity: 1;
    fill: #DD4688;
  }
  55% {
    transform: scale(11);
    opacity: 1;
    fill: #D46ABF;
  }
  65% {
    transform: scale(12);
    opacity: 1;
    fill: #CC8EF5;
  }
  75% {
    transform: scale(13);
    opacity: 1;
    fill: transparent;
    stroke: #CC8EF5;
    stroke-width: 0.5;
  }
  85% {
    transform: scale(17);
    opacity: 1;
    fill: transparent;
    stroke: #CC8EF5;
    stroke-width: 0.2;
  }
  95% {
    transform: scale(18);
    opacity: 1;
    fill: transparent;
    stroke: #CC8EF5;
    stroke-width: 0.1;
  }
  100% {
    transform: scale(19);
    opacity: 1;
    fill: transparent;
    stroke: #CC8EF5;
    stroke-width: 0;
  }
}
@keyframes animateHeart {
  0% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes animateHeartOut {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>