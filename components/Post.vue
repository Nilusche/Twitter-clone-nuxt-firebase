<template>
    <div :class="{borderbottom:!this.isReply}" class="flex  p-4  hover:bg-twgrey-50 transition ease-in-out cursor-pointer " @click="navigate">             
        <div class="grow ">
          <div v-if="retweeted == true" class ="relative left-8 text-gray-400 bottom-1 ">
            <svg class="icon icon-retweet   inline-block" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
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
            
            You retweeted this
          
            </div>
            <div v-if="prop_recommended == true" class ="relative left-7 text-twgrey-400 bottom-1 text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>


            
            You might like - 
            <span @click="rerouteRecommended" class="hover:underline text-twblue">Show more</span>
            </div>
            <div class="flex ">
                <div class="flex flex-col ">
                  <img v-if="!this.profilePic" class=" object-cover rounded-full w-12 h-12 mr-1 hover:contrast-50 transition ease-in-out" 
                  @mouseover="hover = true"
                  @mouseleave="hover = false"
                  @click="navigateToProfile" style="min-width:48px;"
                  src="@/assets/images/default_profile_400x400.png" alt="">
                  <img v-else class=" object-cover rounded-full w-12 h-12 mr-1 hover:contrast-50 transition ease-in-out" 
                  @mouseover="hover = true"
                  @mouseleave="hover = false" style="min-width:48px;"
                  :src="this.profilePic" alt="">
                  <div class="flex-grow" v-if="this.isReply">
                    <div class=" mt-7 bg-twgrey-300" style="height:2px; width:3em; transform: rotate(90deg);"></div>
                  </div>
                </div>

                 <div v-if="hover" class="relative ">


                 </div>

                <div class="grow">
                    <span class="font-bold">{{tweetusername}}</span>
                    <span class="text-gray-400">@{{tweetusertag}}</span>
                    <span class="text-gray-400" v-if="tweetusertime">⋅{{tweetusertime}}</span>
                    <div v-html="tweet.content">
                        
                    </div>

                    <div v-if="tweet.image" class="rounded-full object-contain">
                      <img :src="tweet.image" class="rounded-lg object-contain" alt="">
                    </div>

                    <div class="mt-5 text-twgrey-400">
                        <span class="mr-2 lg:mr-4 cursor-pointer hover:text-twblue">
                            <span class="rounded-full p-2  mr-1  hover:bg-twgrey-200">
                            <svg class="share w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
                            </span>
                            <span>{{tweet.comments}}</span>
                        </span>
                        <span class="mr-2 lg:mr-4 cursor-pointer hover:text-twgreen ">
                            <span class="rounded-full  mr-1 hover:bg-twgrey-200 p-2 pr-3" @click.stop="handleRetweet" >
                                <span class="rt rt-retweet " :class="{active:prop_retweeted}">
                                <svg :class="{green:prop_retweeted}" class="icon icon-retweet mb-1 ml-1  inline-block" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
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
                            <span>{{tweet.retweets}}</span>
                        </span>
                        <span class="mr-2 lg:mr-4  cursor-pointer hover:text-twred">
                            <span class="rounded-full p-2 mr-1 hover:bg-twgrey-200">
                                <input type="checkbox" :id="`checkbox-${this.prop_tweet.id}`" :checked="check" :class="{checkbox:check}" />
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
                            <span>{{tweet.likes}}</span>
                        </span>
                        <span class="mr-2 lg:mr-2 cursor-pointer hover:text-twblue">
                            <span class="rounded-full mr-1 p-2 hover:bg-twgrey-200 pr-3">
                            <svg class="share w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"/></svg>
                            </span>
                            <span></span>
                        </span>
                    </div>
                    
                    <div v-if="repliedTo && this.$route.path=='/home'" @click="navigate" class="text-twblue py-4 pr-2 hover:bg-twgrey-200">Show this Thread</div>
                </div>
                <div class="flex flex-col">
                  <div class="p-2  hover:bg-twgrey-200 hover:cursor-pointer h-9 rounded-full " >
                    <span  @click.stop="showDelete=!showDelete" v-if="this.tweet.uid == this.$store.state.user.id">
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
            
        </div>
        
    </div>
</template>


<script>
import { Store } from 'vuex'
import {timestamp} from '@/firebase/config.js'
import { projectFirestore } from '../firebase/config'
export default{
    props: ['tweet', "retweeted" , "id", "isReply", "recommended"],
    data(){
        return{ 
            prop_tweet: this.tweet,
            prop_retweeted: this.retweeted,
            prop_id: this.id,
            prop_isReply: this.isReply,
            prop_recommended: this.recommended ?? false,
            tweetusername:  this.tweet.tweetusername ?? "",
            tweetusertag:  this.tweet.tweetusertag ?? "",
            tweetusertime: this.tweet.tweetusertime ?? "",
            check: false,
            hover: false,
            profilePic: this.tweet.profilePic ?? "",
            showDelete : false,
            repliedTo:false,
            
        }
    },
    async created(){
       if(this.$store.state.specificTweets.length > 0){

        const specificTweets = this.$store.state.specificTweets

        const tweet = specificTweets.find(tweet => tweet &&  tweet.id === this.prop_tweet.id)
        if(tweet){
          this.check = tweet.liked
          this.prop_retweeted = tweet.retweeted
          this.prop_isReply = tweet.isReply
          this.profilePic = tweet.profilePic
          this.tweetusername = tweet.tweetusername
          this.tweetusertag = tweet.tweetusertag
          this.tweetusertime = tweet.tweetusertime
          this.repliedTo = tweet.repliedTo

        }

        return
      }


        this.tweetuser = await projectFirestore.collection('users').doc(this.prop_tweet.uid).get()
        //set content in innerHtml
      
        this.tweetusername = this.tweetuser.data().name
        this.tweetusertag = this.tweetuser.data().tag
        this.prop_tweet.id = this.id
        

        let uid_tweet_id = this.$store.state.user.id + '_' + this.prop_tweet.id

        await projectFirestore.collection('likes').doc(uid_tweet_id).get().then(doc => {
            if(doc.exists){
                this.check = true
            }else{
                this.check = false
            }
        })

        await projectFirestore.collection('retweets').doc(uid_tweet_id).get().then(doc => {
            if(doc.exists){
                this.prop_retweeted = true
            }else{
                this.prop_retweeted = false
            }
        })

        this.profilePic = await projectFirestore.collection('users').doc(this.prop_tweet.uid).get().then(doc => {
            return doc.data().profilePic
        })

        if(this.prop_tweet.createdAt){
          try{
            this.tweetusertime = this.timeSince(this.prop_tweet.createdAt.toDate())
          }catch(err){
            console.log(err)
          }
          
        }

        //to check if this tweet has been replied to see if its id is in the replyTo field of any other tweet
        /*
        await projectFirestore.collection('tweets').where('replyTo', '==', this.tweet.id).get().then(querySnapshot => {
          if(querySnapshot.docs.length > 0){
            this.repliedTo = true
          }
        })
        */
        //to check if this tweet has been replied to see if its id is in the replyTo field of any other tweet but not as a snapshot
        const res1=  await projectFirestore.collection('tweets').where('replyTo', '==', this.prop_tweet.id).get()
        if(res1.docs.length > 0){
          this.repliedTo = true
        }
        



        // search the content of the tweet for @username and #hashtag and make them clickable
      


        this.$emit('loaded')


        // store every information about the tweet in the store
        const information = {
          id: this.prop_tweet.id,
          uid: this.prop_tweet.uid,
          content: this.prop_tweet.content,
          createdAt: this.prop_tweet.createdAt,
          replyTo: this.prop_tweet.replyTo,
          retweets: this.prop_tweet.retweets,
          likes: this.prop_tweet.likes,
          retweeted: this.prop_retweeted,
          liked: this.check,
          profilePic: this.profilePic,
          tweetusername: this.tweetusername,
          tweetusertag: this.tweetusertag,
          tweetusertime: this.tweetusertime,
          repliedTo: this.repliedTo,
          
        }
        this.$store.commit('setSpecificTweets', information)


    },

    async mounted(){
      // if tweetusername, tweetusertag, tweetusertime are not set, set them
      if(!this.tweetusername){
        this.tweetuser = projectFirestore.collection('users').doc(this.prop_tweet.uid).get().then(doc => {
          this.tweetusername = doc.data().name
          this.tweetusertag = doc.data().tag
        })
      }
      if(!this.tweetusertime){
        this.tweetusertime = this.timeSince(new Date(this.prop_tweet.createdAt.seconds * 1000))
      }
    
      let uid_tweet_id = this.$store.state.user.id + '_' + this.prop_tweet.id

      await projectFirestore.collection('likes').doc(uid_tweet_id).get().then(doc => {
          if(doc.exists){
              this.check = true
          }else{
              this.check = false
          }
      })

      await projectFirestore.collection('retweets').doc(uid_tweet_id).get().then(doc => {
          if(doc.exists){
              this.prop_retweeted = true
          }else{
              this.prop_retweeted = false
          }
      })
    },

    methods: {
        async handleLike(){
            document.getElementById(`checkbox-${this.prop_tweet.id}`).checked = !document.getElementById(`checkbox-${this.prop_tweet.id}`).checked
            document.getElementById(`checkbox-${this.prop_tweet.id}`).classList.toggle('checkbox')
            
            let uid_tweet_id = this.$store.state.user.id + '_' + this.prop_tweet.id
            //check if tweet has been liked by current user
            await projectFirestore.collection('likes').doc(uid_tweet_id).get().then(async doc => {
                if(doc.exists){
                    //if liked, remove like
                    await projectFirestore.collection('likes').doc(uid_tweet_id).delete()
                    //decrement count tweet document
                    this.prop_tweet.likes -=1
                    await projectFirestore.collection('tweets').doc(this.prop_tweet.id).update({
                        likes: this.prop_tweet.likes
                    })
                }else{
                    //if not liked, add like
                    await projectFirestore.collection('likes').doc(uid_tweet_id).set({
                        uid: this.$store.state.user.id,
                        tweetid: this.prop_tweet.id
                    })
                    this.prop_tweet.likes++
                    await projectFirestore.collection('tweets').doc(this.prop_tweet.id).update({
                        likes: this.prop_tweet.likes
                    })
                }
            })
            this.$emit('update')

            // create new notification
            if(this.prop_tweet.uid != this.$store.state.user.id){
              const notification = {
                uid: this.$store.state.user.id,
                tweetid: this.prop_tweet.id,
                type: 'like',
                createdAt: timestamp(),
                read: false,
                notifier: this.$store.state.user.id,
                username: this.$store.state.user.username,
                profilePic: this.$store.state.user.profilePic,
                content: this.tweet.content,
              }
              await projectFirestore.collection('notifications').add(notification)
            }

            
        },
        async handleRetweet(){
          if(this.prop_retweeted){
              this.prop_retweeted = false
          }else{
              this.prop_retweeted = true
          }
            this.prop_retweeted = !this.prop_retweeted
            let uid_tweet_id = this.$store.state.user.id + '_' + this.prop_tweet.id
            await projectFirestore.collection('retweets').doc(uid_tweet_id).get().then(async doc => {
                if(doc.exists){
                    //if retweeted, remove retweet
                    await projectFirestore.collection('retweets').doc(uid_tweet_id).delete()
                    //decrement count tweet document
                    this.prop_tweet.retweets -=1
                    await projectFirestore.collection('tweets').doc(this.prop_tweet.id).update({
                        retweets: this.prop_tweet.retweets
                    })
                }else{
                    //if not retweeted, add retweet
                    await projectFirestore.collection('retweets').doc(uid_tweet_id).set({
                        uid: this.$store.state.user.id,
                        tweetid: this.prop_tweet.id
                    })
                    this.prop_tweet.retweets++
                    await projectFirestore.collection('tweets').doc(this.prop_tweet.id).update({
                        retweets: this.prop_tweet.retweets
                    })
                }
            })
            this.$emit('update')

            // create new notification
            if(this.prop_tweet.uid != this.$store.state.user.id){
              const notification = {
                uid: this.$store.state.user.id,
                tweetid: this.prop_tweet.id,
                type: 'retweet',
                createdAt: timestamp(),
                read: false,
                notifier: this.$store.state.user.id,
                username: this.$store.state.user.username,
                profilePic: this.$store.state.user.profilePic,
                content: this.tweet.content,
              }
              await projectFirestore.collection('notifications').add(notification)
            }

        },
        navigateToProfile(){
          this.$router.replace({path: '/' + this.prop_tweet.uid})
        },
        navigate(){
        this.$router.push(`/${this.prop_tweet.uid}/status/${this.prop_tweet.id}`);

        }  ,
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
        async handleDelete(){
            //delete tweet
            await projectFirestore.collection('tweets').doc(this.prop_tweet.id).delete()
            //delete likes
            await projectFirestore.collection('likes').where('tweetid', '==', this.prop_tweet.id).get().then(async querySnapshot => {
                querySnapshot.forEach(async doc => {
                    await projectFirestore.collection('likes').doc(doc.id).delete()
                })
            })
            
            

            //delete retweets
            await projectFirestore.collection('retweets').where('tweetid', '==', this.prop_tweet.id).get().then(async querySnapshot => {
                querySnapshot.forEach(async doc => {
                    await projectFirestore.collection('retweets').doc(doc.id).delete()
                })
            })
            //delete replies

            //dispatch store  action to delete tweet from store
            this.$store.dispatch('deleteTweet', this.prop_tweet.id)


            //emit event to parent
            this.$emit('deleted', this.prop_tweet.id)

            this.showDelete = false


        },
        rerouteRecommended(){
          this.$router.push({path: '/explore/recommended'})
        }
    },
        

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

.borderbottom{
  border-bottom-width: 1px;
  border-color: #EFF1F1;
}
</style>