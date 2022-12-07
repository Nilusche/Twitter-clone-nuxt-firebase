<template>
    <div class="mt-5 bg-twgrey-150 w-96 rounded-2xl">
                 <div class="flex p-3">
                    <span class="text-xl font-extrabold">Who to follow</span>
                </div>
                <!--- Follow Suggestions-->
                <div class="hover:bg-twgrey-200 p-3 transition ease-in-out hover:cursor-pointer"  v-for="user in list_of_users" :key="user.uid" @click="navigateToProfile(user.uid)">
                    <div class="flex relative">
                        <img v-if="user.profilePic && user.profilePic != ''" class="object-cover flex justify-center w-12 h-12 rounded-full mr-2" :src="user.profilePic" alt="">
                        <img v-else class="object-cover flex justify-center w-12 h-12 rounded-full mr-2" src="@/assets/images/default_profile_400x400.png" alt="">
                        <div class="lg:w-25">
                                <span class="text-sm font-bold lg:block">{{user.name}}</span>
                            <span class=" text-sm lg:inline-block  hidden text-twgrey-400">{{user.tag}}</span>
                        </div>
                        <div class="absolute right-0">
                               <button @click="follow(user.uid)" class="bg-twblack-200 hover:bg-twblack-100 transition ease-in-out rounded-full px-5 py-2 font-semibold text-twgrey-100">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
export default {
  data(){
    return{
        list_of_users: []
    }
  },

  async mounted(){
    //fetch 3 random users from the database but not the current user
    const res = await projectFirestore.collection('users').get()    
    res.docs.forEach(doc => {
        if(doc.data().uid != this.$store.state.user.id){
            this.list_of_users.push(doc.data())
        }
    })
    this.list_of_users = this.list_of_users.slice(0,3)


    //get all the users that the current user is following from the following collection
    //query all the users where the current user is the follower
    const following = await projectFirestore.collection('following').where('follower', '==', this.$store.state.user.id).get()
    //get all the users that the current user is following
    const following_users = following.docs.map(doc => doc.data().following)
    //filter the users that the current user is following from the list of users
    this.list_of_users = this.list_of_users.filter(user => !following_users.includes(user.uid))

   
  },
  methods:{
    async follow(id){
        //create a new document in the following collection
        //set document id as follower_following

        const follower = this.$store.state.user.id
        const following = id
        const docId = follower + '_' + following

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

        //update the store
        this.$store.dispatch('getUser', this.$store.state.user.id)

        //remove the user from the list of users
        this.list_of_users = this.list_of_users.filter(user => user.uid != id)

    },
    navigateToProfile(id){
        this.$router.push(id)
    },
  }
  
  
  
  };
</script>