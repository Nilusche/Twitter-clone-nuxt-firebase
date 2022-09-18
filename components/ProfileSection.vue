<template>
    <div class="h-screen w-full -mr-12">
        <div class="head h-14 flex ml-2 border-b">
            <div class="">
                    <router-link to="/home">
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
                    </router-link>
            </div>
                <div class="flex mb-1">
                    <div class="flex flex-col p-2 ml-4">
                        <span class="justify-start font-bold text-xl">Home</span>
                        <span class="font-bold text-twgrey-400 text-xs">9 Tweets</span>
                    </div>
                </div>
                
        </div>
        <div class="">
            <div class="bg-twgrey-200 h-60">
                <div class="relative left-5 top-36 w-11/12">
                    <div class= "bottom-auto w-44">
                        <div class="h-44 w-44 rounded-full bg-gray-300 ">
                        <img src="https://picsum.photos/200/200" alt="" class="object-cover h-44 w-44 rounded-full border-white border-4">    
                        </div>
                    </div>
                <div class="">
                    <div class="font-bold text-2xl w-44">Laravel Alt</div>
                    <div class="text-twgrey-400 w-44">@Alt Laravel</div>
                    <div class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <div class="text-twgrey-400 mt-4">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block mb-1"
                            >
                            <path
                                d="M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z"
                                fill="currentColor"
                            />
                            <path
                                d="M8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17Z"
                                fill="currentColor"
                            />
                            <path
                                d="M11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16Z"
                                fill="currentColor"
                            />
                            <path
                                d="M16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17Z"
                                fill="currentColor"
                            />
                            <path
                                d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                                fill="currentColor"
                            />
                            <path
                                d="M16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13Z"
                                fill="currentColor"
                            />
                            <path
                                d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
                                fill="currentColor"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
                                fill="currentColor"
                            />
                            </svg>
                                                    
                        Joined January 2022
                    
                    </div>
                </div>
                <div class="mt-4">
                    <div class="flex">
                        <div class="flex">
                            <div class="font-bold mr-1 ">1</div>
                            <div class="text-twgrey-400">Following</div>
                        </div>
                        <div class="flex ml-4">
                            <div class="font-bold mr-1">1</div>
                            <div class="text-twgrey-400">Followers</div>
                        </div>
                    </div>
                </div>
                
                </div>
                <!-- Filters-->
                <div class="flex relative left-0 top-40 right-20 bottom-auto mt-8 justify-center">
                    <div @click="filter(1)" class="pt-3 border-b px-7 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Tweets</span> <span v-if="selected == 1" class="mt-3 bg-twblue h-1 w-12 rounded-lg text-transparent"></span></div>
                    <div @click="filter(2)" class="pt-3 border-b px-7 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Tweets & replies</span> <span v-if="selected == 2" class="mt-3 bg-twblue h-1 rounded-lg text-transparent" style="width:7.25rem"></span></div>
                    <div @click="filter(3)" class="pt-3 border-b px-7 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Media</span> <span v-if="selected == 3" class="mt-3 bg-twblue h-1 rounded-lg text-transparent" style="width:3rem"></span></div>
                    <div @click="filter(4)" class="pt-3 border-b px-7 flex-grow flex flex-col items-center hover:bg-twgrey-200 cursor-pointer transition ease-in-out"><span class="text-center">Likes</span> <span v-if="selected == 4" class="mt-3 bg-twblue h-1 rounded-lg text-transparent"  style="width:2.2rem"></span></div>
                </div>
                <div v-if="loading" class="flex justify-center relative left-0 top-40">
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
            <template v-if="selected == 1">
                <div class="flex relative left-0 top-40  bottom-auto w-full" v-for="tweet in tweets" :key="tweet.id">
                    <!---Print Posts with retweeted equal true twice-->
                    <Post :retweeted="tweet.retweeted" :tweet="tweet" @loaded="handleLoaded" class="w-full"/>
                   
                </div> 
            </template>
                
            <template v-if="selected == 2">
                <div class="flex relative left-0 top-40  bottom-auto w-full" v-for="tweet in tweets" :key="tweet.id">
                    <!---Print Posts with retweeted equal true twice-->
                    <Post :tweet="tweet" @loaded="handleLoaded" class="w-full"/>
                   
                </div> 
            </template>
            <template v-if="selected == 3">
                <div class="flex relative left-0 top-40  bottom-auto w-full" v-for="tweet in tweets" :key="tweet.id">
                    <!---Print Posts with retweeted equal true twice-->
                    <Post  :tweet="tweet" @loaded="handleLoaded" class="w-full"/>
                   
                </div> 
            </template>
            <template v-if="selected == 4">
                <div class="flex relative left-0 top-40  bottom-auto w-full" v-for="tweet in likes" :key="tweet.id">
                    <!---Print Posts with retweeted equal true twice-->
                    <Post  :tweet="tweet" @loaded="handleLoaded" class="w-full"/>
                   
                </div> 
            </template>
            </div>
            
        </div>
    </div>
  

</template>

<script>
import { projectFirestore } from '@/firebase/config';
export default {
    data() {
        return {
            selected: 1,
            tweets : [],
            tweets_replies : [],
            media : [],
            likes : [],
            loading : true
        }
    },
    async mounted(){
        // get all my tweets and add attribute id to each tweet
        await projectFirestore.collection('tweets').where('uid', '==', this.$store.state.user.id).orderBy('createdAt', 'desc').onSnapshot(snapshot => {
            this.tweets = snapshot.docs.map(doc => 
            ({
                id: doc.id,
                ...doc.data()
            })
            );
        }
        );

        let user_Id = this.$store.state.user.id;
        // get all tweet ids from retweets that have the user id
        let retweet_ids = [];
        await projectFirestore.collection('retweets').where('uid', '==', user_Id).get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                retweet_ids.push(doc.data().tweetid);
            })
        })

        let retweets = [];
        // get all docments where the doc_id is in the retweet_ids array and add the attribute retweeted to true
        if(retweet_ids.length >0 ){
            await projectFirestore.collection('tweets').where('__name__', 'in', retweet_ids).get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    retweets.push({
                        id: doc.id,
                        ...doc.data(),
                        retweet: true
                    })
                })
            })  


            // append the retweets to the tweets array and sort by date
            this.tweets = this.tweets.concat(retweets).sort((a, b) => b.createdAt - a.createdAt);
        }
        
       
        
    },
    methods: {
        async filter(id) {

            this.selected = id;
            this.loading = true;
            if(this.selected == 4){
                this.likes = [];
                let likes_ids = [];
                // get all likes from the user but not as snapshot
                const likes_ = await projectFirestore.collection("likes").where("uid", "==", this.$store.state.user.id).get();
                // add all tweet ids to the likes_ids array
                likes_.forEach(doc => {
                    likes_ids.push(doc.data().tweetid);
                })
                // get all tweets where the tweet id is in the likes_ids array
                const likes = await projectFirestore.collection("tweets").where("__name__", "in", likes_ids).get();
                // add the id attribute to each tweet
                likes.forEach(doc => {
                    this.likes.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                
                console.log(this.likes);

            }


            this.loading = false;
        },
            handleLoaded(){
            this.loading = false;
        }
    }
}
</script>

<style>

</style>