<template>
    <div class="flex border-b border-twgrey-200 z-0 p-4 pr-12">             
        <div>
            <span class="flex">
                <img class="rounded-full w-12 h-12 mr-2" src="https://picsum.photos/40/40" alt="">
                <div class="block">
                    <span class="font-bold">Nil</span>
                    <span class="text-gray-400">@Nil_i0</span>
                    <span class="text-gray-400">⋅23h</span>
                    <div v-html="tweet.content">
                        
                    </div>
                    <div class="mt-5 text-twgrey-400">
                        <span class="mr-2 lg:mr-4 cursor-pointer hover:text-twblue">
                            <span class="rounded-full p-2  mr-1  hover:bg-twgrey-200">
                            <svg class="share w-4 ml-1 mb-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
                            </span>
                            <span>{{tweet.comments}}</span>
                        </span>
                        <span class="mr-2 lg:mr-4 cursor-pointer hover:text-twgreen ">
                            <span class="rounded-full  mr-1 hover:bg-twgrey-200 p-2 pr-3" @click="handleRetweet" >
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
                            <span>{{tweet.retweets}}</span>
                        </span>
                        <span class="mr-2 lg:mr-4  cursor-pointer hover:text-twred">
                            <span class="rounded-full p-2 mr-1 hover:bg-twgrey-200">
                                <input type="checkbox" :id="`checkbox-${this.tweet.id}`" :checked="check" :class="{checkbox:check}" />
                                <label for="checkbox" class="inline-block"  @click="handleLike" :class="{checked:check}">
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
                </div>
            
            </span>
        </div>
    </div>
</template>


<script>
import { projectFirestore } from '../firebase/config'
export default{
    props: ['tweet'],
    data(){
        return{ 
            tweetuser: null,
            check: false,
            retweeted: false,
        }
    },
    async mounted(){
        this.tweetuser = await projectFirestore.collection('users').doc(this.tweet.uid).get()
        //set content in innerHtml
        await projectFirestore.collection('likes').doc(this.tweet.id).get().then(doc => {
            if(doc.exists){
                this.check = true
            }else{
                this.check = false
            }
        })

        await projectFirestore.collection('retweets').doc(this.tweet.id).get().then(doc => {
            if(doc.exists){
                this.retweeted = true
            }else{
                this.retweeted = false
            }
        })
    },
    methods: {
        async handleLike(){
            document.getElementById(`checkbox-${this.tweet.id}`).checked = !document.getElementById(`checkbox-${this.tweet.id}`).checked
            document.getElementById(`checkbox-${this.tweet.id}`).classList.toggle('checkbox')
            
            //check if tweet has been liked by current user
            await projectFirestore.collection('likes').doc(this.tweet.id).get().then(doc => {
                if(doc.exists){
                    //if liked, remove like
                    projectFirestore.collection('likes').doc(this.tweet.id).delete()
                    //decrement count tweet document
                    this.tweet.likes -=1
                    projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        likes: this.tweet.likes
                    })
                }else{
                    //if not liked, add like
                    projectFirestore.collection('likes').doc(this.tweet.id).set({
                        uid: this.tweet.uid,
                        tweetid: this.tweet.id
                    })
                    this.tweet.likes++
                    projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        likes: this.tweet.likes
                    })
                }
            })
        },
        async handleRetweet(){
            this.retweeted = !this.retweeted
            await projectFirestore.collection('retweets').doc(this.tweet.id).get().then(doc => {
                if(doc.exists){
                    //if retweeted, remove retweet
                    projectFirestore.collection('retweets').doc(this.tweet.id).delete()
                    //decrement count tweet document
                    this.tweet.retweets -=1
                    projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        retweets: this.tweet.retweets
                    })
                }else{
                    //if not retweeted, add retweet
                    projectFirestore.collection('retweets').doc(this.tweet.id).set({
                        uid: this.tweet.uid,
                        tweetid: this.tweet.id
                    })
                    this.tweet.retweets++
                    projectFirestore.collection('tweets').doc(this.tweet.id).update({
                        retweets: this.tweet.retweets
                    })
                }
            })
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
</style>