<template>
<div>
    <div class="bg-black">
        <div class="flex lg:flex-row flex-col bg-black text-white" >
            <div class="lg:w-1/2 lg:order-first order-last">
                <img src="../assets/images/twitter_wallpaper.jpg" alt="" class="object-cover h-screen">
            </div>
            <div class="flex-grow py-32 px-10 ">
                <div class="flex flex-col">
                        <img src="../assets/images/twitterbird.png" alt="" class="object-cover w-10 mb-16">
                    <div class="font-bold mb-16" style="font-size:5rem">
                        Happening now
                    </div>
                    <div class="font-bold text-3xl">
                        Join <span class="line-through">Twitter</span> TwitterClone today. {{user}}
                    </div>
                    <div class="mt-10">
                        <div class=" mb-4">
                            <button class="py-2 w-76 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                                <div class="flex justify-center">
                                    <img src="../assets/images/google-symbol.png" alt="" class="object-contain mr-1">
                                    <span>Sign up with Google (not Implemented)</span> 
                                </div>
                            </button>
                        </div>
                        <div  class=" mb-4">
                            <button class="py-2 w-76 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                                <div class="flex justify-center">
                                    <img src="../assets/images/apple-logo.png" alt="" class="object-contain mr-1">
                                    <span>Sign up with Apple (not Implemented)</span> 
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
                            <button class="py-2 w-72 ml-2 rounded-full font-semibold bg-twblue hover:bg-twdarkblue text-white " @click="showSignUp=true">
                                <div class="flex justify-center">
                                    <span>Sign up with email</span> 
                                </div>
                            </button>
                        </div>
                        <div class="mt-16">
                            <div class="font-bold mb-4">Already have an account?</div>
                            <button class="py-2 w-72 ml-2 rounded-full font-semibold bg-black text-twblue border border-twblue" @click="showSignIn=true">
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
            (c) 2020 TwitterClone Nilusche Liyanaarachchi
        </div>
        </div>
    <div v-if="showSignIn" class="absolute  lg:top-32 lg:left-1/3 lg:w-1/3 lg:bottom-32  top-0 left-0 w-screen  bg-black rounded-lg text-white border border-twblue">
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
                    <button class="py-2 w-76 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/google-symbol.png" alt="" class="object-contain mr-1">
                            <span>Continue to Google (Not Implemented)</span> 
                        </div>
                    </button>
                </div>
                <div class="mt-6">
                    <button class="py-2 w-76 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/apple-logo.png" alt="" class="object-contain mr-1">
                            <span>Continue to Apple (Not Implemented)</span> 
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
                    <button class="py-2 w-72 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black " @click="handleLogin">
                        <div class="flex justify-center">
                            <span>Sign in</span> 
                        </div>
                    </button>
                </div>
                <div class="mt-4 text-red-400 mb-16 ml-10">
                    {{error}}
                </div>
            </div>
        </div>
        
    </div>
    <div v-if="showSignUp" class="absolute  lg:top-32 lg:left-1/3 lg:w-1/3 lg:bottom-32  top-0 left-0 w-screen  bg-black rounded-lg text-white border border-twblue">
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
                <div class="mt-10">
                    <button class="py-2 w-76 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/google-symbol.png" alt="" class="object-contain mr-1">
                            <span>Continue to Google (Not Implemented)</span> 
                        </div>
                    </button>
                </div>
                <div class="mt-6">
                    <button class="py-2 w-76 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black ">
                        <div class="flex justify-center">
                            <img src="../assets/images/apple-logo.png" alt="" class="object-contain mr-1">
                            <span>Continue to Apple (Not Implemented)</span> 
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
                    <input type="email" v-model="email" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Email">
                </div>
                <div class="mt-6">
                    <input type="password" v-model="password" class="bg-black w-72 text-twgrey-100 py-4 px-2 focus:ring-1 rounded-md ring-twblue focus:outline-none border border-twblue" placeholder="Password">
                </div>
                <div class="mt-6">
                    <button class="py-2 w-72 rounded-full font-semibold hover:bg-twgrey-200 bg-white text-black " @click="handleSignUp">
                        <div class="flex justify-center">
                            <span>Sign up</span> 
                        </div>
                    </button>
                </div>
                <div class="mt-4 text-red-400 mb-16 ml-10">
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
        }
    },
    methods:{
        handleLogin(){
            this.$store.dispatch('login',{
                email:this.email,
                password:this.password
            }).then((res)=>{
                this.$router.push('/home')
            }).catch(err=>{
                this.error = err.message
            })
        },
        handleSignUp(){
            this.$store.dispatch('signUp',{
                username:this.username,
                email:this.email,
                password:this.password
            }).then((res)=>{
                this.$router.push('/home')
            }).catch(err=>{
                this.error = err.message;
            })
        },
    },
    mounted(){
        console.log(this.$store.state.user)
        if(this.$store.state.user.id != null){
            this.$router.push('/home')
        }

    }
}
</script>