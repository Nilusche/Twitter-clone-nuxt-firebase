<template>
    <div>
        <div class="head h-14 flex">
            <div class="w-11/12 flex ">
                <span class="justify-start font-bold ml-4 mt-4 text-xl mb-4 ">Home</span>
            </div>
            <div class="mt-1">
                <span >
                        <button class="btn mt-2 w-10 btn-hover transition ease-in-out items-end">
                        <svg  viewBox="0 0 24 24" aria-hidden="true" class="logo r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g></svg>
                    </button>
                </span>
            </div>
        </div>

        <div class="flex border-b border-twgrey-200  p-4 mr-0">             
            <div class="flex">
                <span class="flex">
                    <input @change="handleFileChange" id="input_file" class="hidden w-full text-sm text-twgrey-400 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer mb-2  focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  type="file">
                    <img v-if="!$store.state.user.id|| $store.state.user.id&&  !$store.state.user.profilePic" class=" object-cover rounded-full w-12 h-12 mr-2 hover:contrast-50 transition ease-in-out hover:cursor-pointer" @click="navigateToProfile"  src="@/assets/images/default_profile_400x400.png" alt="">
                    <img v-else class="object-cover  rounded-full w-12 h-12 mr-2 hover:contrast-50 transition ease-in-out hover:cursor-pointer" @click="navigateToProfile"  :src="$store.state.user.profilePic" alt="">
                    <div class="block">
                        <div ref="content_div" class="message-box-content p-2 focus:outline-none focus:before:text-twgrey-300 pb-3 border-b border-twgrey" contenteditable="true" placeholder="What's happening?"></div>
                        <div class="pt-3 lg:flex md:flex block">
                            <div class="justify-start">
                                <button class="h-9 w-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-200 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </button>
                                <button class="h-9 w-9" @click="openFile">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-200 p-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button class="h-9 w-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-200 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                                <button class="h-9 w-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-200 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                <button class="h-9 w-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7  text-twblue rounded-full hover:bg-twgrey-200 p-1h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="justify-end" >
                                <button @click="handleCreateTweet" class="px-4 py-2 rounded-full text-md font-bold text-white bg-twblue hover:bg-twdarkblue transition ease-in-out">Tweet</button>
                            </div>
                        </div>
                    </div>                        
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import {timestamp} from '@/firebase/config.js'
import useStorage from '@/composables/useStorage.js'
import { projectFirestore } from '../firebase/config'
import {ref} from 'vue'
export default {
    setup(){
        const {filePath, url, uploadFile} = useStorage()
        const file = ref('')
        const fileerror = ref('')
        const types = ['image/png', 'image/jpeg', 'image/jpg']
        //const store = useStore()

        const handleCreate = async () => { 
            if(file.value){
                await uploadFile(file.value, "tweets")
            }

            return url.value;
            
        }

        

        const handleFileChange = (e)=>{
  
            const selected = e.target.files[0];
            if (selected && types.includes(selected.type)) {
                file.value = selected;
                fileerror.value = ''
            }else{
                file.value = null; 
                fileerror.value = 'Please select a valid image file'
            }
        }

        return {
            filePath, url, handleCreate, handleFileChange, file, fileerror, 
        }
    },
    methods:{
        async handleCreateTweet(){
            const content = this.$refs.content_div.innerText
            await this.handleCreate()
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
                    image: this.url,
                    replyTo: null,
                    profilePic: this.$store.state.user.profilePic,
                    
                }
                const res = await projectFirestore.collection('tweets').add(tweet);
                this.$refs.content_div.innerText = ''
                //create new property on the tweet object called id
                tweet.id = res.id
                

                tweet.tweetusertime = this.timeSince(new Date())
                tweet.tweetusername =  this.$store.state.user.name,
                tweet.tweetusertag =  this.$store.state.user.tag,

                this.$emit('addTweet', tweet)
                // reload the page to show the new tweet
            }
        },
        navigateToProfile(){
            this.$router.push(this.$store.state.user.id)
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
        },
        openFile(){
            document.getElementById('input_file').click()
        }
    }
}
</script>