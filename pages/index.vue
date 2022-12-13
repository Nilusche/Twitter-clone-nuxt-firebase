<template>
<div>
    <div class="bg-black w-screen">
        <div class="flex lg:flex-row flex-col bg-black text-white" >
            <div class="lg:w-1/2 w-screen lg:order-first order-last">
                <img src="../assets/images/twitter_wallpaper.jpg" alt="" class="object-cover h-screen">
            </div>
            <div class="flex-grow py-20 px-10">
                <div class="flex flex-col">
                        <img src="../assets/images/twitterbird.png" alt="" class="object-cover w-10 mb-16">
                    <div class="font-bold mb-16 lg:text-7xl text-6xl">
                        Happening now
                    </div>
                    <div class="font-bold text-3xl ml-2">
                        Join <span class="line-through">Twitter</span> TwitterClone today. {{user}}
                    </div>
                    <div class="mt-10">
                        <div class=" mb-4">
                            <button class="py-2 w-72 ml-2 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                                <div class="flex justify-center">
                                    <img src="../assets/images/google-symbol.png" alt="" class="object-contain mr-1">
                                    <span>Sign up with Google</span> 
                                </div>
                            </button>
                        </div>
                        <div  class=" mb-4">
                            <button class="py-2 w-72 ml-2 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                                <div class="flex justify-center">
                                    <img src="../assets/images/apple-logo.png" alt="" class="object-contain mr-1">
                                    <span>Sign up with Apple</span> 
                                </div>
                            </button>
                        </div>
                        <div class="flex justify-center w-72 ml-2">
                            <div class="flex flex-col justify-center w-full">
                                <div  class="w-full -mt-4">_____________________</div>
                            </div>
                            <div class="flex flex-col items-center mx-2">
                                <span>or</span>
                            </div>
                            <div class="flex flex-col justify-center w-full">
                                <div  class="w-full -mt-4">_____________________</div>
                            </div>
                        </div>
                        <div  class=" mb-4 mt-4">
                            <button class="py-2 w-72 ml-2 rounded-full font-semibold bg-twblue hover:bg-twdarkblue text-white " @click="showSignUp=true;scrollToTop()">
                                <div class="flex justify-center">
                                    <span>Sign up with email</span> 
                                </div>
                            </button>
                        </div>
                        <div class="mt-16">
                            <div class="font-bold mb-4 ml-2">Already have an account? (Dummy Login: root@mail.com, passw: 123123123)</div>
                            <button class="py-2 w-72 ml-2 rounded-full font-semibold bg-black text-twblue border border-twblue" @click="showSignIn=true;scrollToTop()">
                                <div class="flex justify-center">
                                    <span>Sign in</span> 
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 w-screen bg-black text-twgrey-400 py-4 text-center">
            This application is made for educational purposes only. No commercial use is allowed.
            (c) 2022 TwitterClone Nilusche Liyanaarachchi
        </div>
        </div>
    <div v-if="showSignIn" class="absolute  lg:top-20 lg:left-1/3 lg:w-1/3 lg:bottom-32  top-0 left-0 w-screen  bg-black rounded-lg text-white border border-twblue">
        <div class="flex flex-col">
            <div class="flex justify-between mt-2">
                <div class="ml-2 ">
                    <div class="px-4 py-2 rounded-full hover:cursor-pointer hover:bg-twblack-100" @click="showSignIn=false">x</div>
                </div>
                <img src="../assets/images/twitterbird.png" alt="" class="object-cover w-10 -ml-10">
                <div></div>
            </div>
            <div class="flex flex-col items-center mt-2">
                <div class="font-bold text-3xl">Sign in to TwitterClone</div>
                <div class="mt-10">
                    <button class="py-2 w-76 px-1 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/google-symbol.png" alt="" class="object-contain mr-1">
                            <span>Continue to Google</span> 
                        </div>
                    </button>
                </div>
                <div class="mt-6">
                    <button class="py-2 w-76 px-1 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/apple-logo.png" alt="" class="object-contain mr-1">
                            <span>Continue to Apple</span> 
                        </div>
                    </button>
                </div>
                <div class="flex justify-center w-72 mt-6">
                    <div class="flex flex-col justify-center w-full">
                        <div  class="w-full -mt-4">_____________________</div>
                    </div>
                    <div class="flex flex-col items-center mx-2">
                        <span>or</span>
                    </div>
                    <div class="flex flex-col justify-center w-full">
                        <div  class="w-full -mt-4">_____________________</div>
                    </div>
                </div>
                <div class="mt-6">
                    <input type="email" v-model="email" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Email">
                </div>
                <div class="mt-6">
                    <input type="password" v-model="password" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Password">
                </div>
                <div class="mt-6">
                    <button class="py-2 w-72 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black " @click="handleLogin" :disabled="loading">
                        <div class="flex justify-center">
                            <span v-if="!loading">Sign in</span> 
                            <svg v-else class="h-6" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                    </button>
                </div>
                <div class="mt-4 text-red-400 mb-24 ml-10">
                    {{error}}
                </div>
            </div>
        </div>
        
    </div>
    <div v-if="showSignUp" class="absolute  lg:top-10 lg:left-1/3 lg:w-1/3 lg:bottom-24 top-0 left-0 w-screen  bg-black rounded-lg text-white border border-twblue">
        <div class="flex flex-col">
            <div class="flex justify-between mt-2">
                <div class="ml-2 ">
                    <div class="px-4 py-2 rounded-full hover:cursor-pointer hover:bg-twblack-100" @click="showSignUp=false">x</div>
                </div>
                <img src="../assets/images/twitterbird.png" alt="" class="object-cover w-10 -ml-10">
                <div></div>
            </div>
            <div class="flex flex-col items-center mt-2">
                <div class="font-bold text-3xl">Create your Account</div>
                <div class="mt-4">
                    <button class="py-2 w-76 px-1 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/google-symbol.png" alt="" class="object-contain mr-1">
                            <span>Continue to Google</span> 
                        </div>
                    </button>
                </div>
                <div class="mt-6">
                    <button class="py-2 w-76 px-1 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/apple-logo.png" alt="" class="object-contain mr-1">
                            <span>Continue to Apple</span> 
                        </div>
                    </button>
                </div>
                <div class="flex justify-center w-72 mt-6">
                    <div class="flex flex-col justify-center w-full">
                        <div  class="w-full -mt-4">_____________________</div>
                    </div>
                    <div class="flex flex-col items-center mx-2">
                        <span>or</span>
                    </div>
                    <div class="flex flex-col justify-center w-full">
                        <div  class="w-full -mt-4">_____________________</div>
                    </div>
                </div>
                <div class="mt-6">
                    <input type="username" v-model="username" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Name">
                </div>
                <div class="mt-6">
                    <input type="text" v-model="tagline" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Unique tag like @foo_bar">
                </div>
                <div class="mt-6">
                    <input type="email" v-model="email" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Email">
                </div>
                <div class="mt-6">
                    <input type="password" v-model="password" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Password">
                </div>
                <div class="mt-6">
                    <button class="py-2 w-72 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black " @click="handleSignUp" :disabled="loading">
                        <div class="flex justify-center">
                            <span v-if="!loading">Sign up</span> 
                            <svg v-else class="h-6" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                    </button>
                </div>
                <div class="mt-4 text-red-400">
                    {{error}}
                </div>
            </div>
        </div>
        
    </div>
</div>

</template>
<script>
import getUser from '@/composables/getUser.js'
export default{
    data(){
        return{
            user:null,
            username: '',
            email: '',
            password: '',
            showSignIn:false,
            showSignUp:false,
            error: null,
            tagline: '',
            loading: false,
        }
    },
    methods:{
        handleLogin(){
            this.loading = true
            this.$store.dispatch('login',{
                email:this.email,
                password:this.password
            }).then((res)=>{
                this.$router.push('/home')
            }).catch(err=>{
                this.error = err.message
                this.loading = false
            })
        },
        handleSignUp(){
            this.loading = true
            this.$store.dispatch('signUp',{
                username:this.username,
                email:this.email,
                password:this.password,
                tagline:this.tagline
            }).then((res)=>{
                this.$router.push('/home')
            }).catch(err=>{
                this.error = err.message;
                this.loading = false
            })
        },
        scrollToTop(){
            window.scrollTo(0,0)
        }
    },
    mounted(){
        if(this.$store.state.user.id != null){
            this.$router.push('/home')
        }

    }
}
</script>
