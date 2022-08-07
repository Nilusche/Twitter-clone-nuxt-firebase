<template>
    <div class="ml-2 profile mt-32 grid grid-cols-1 py-20 lg:w-60 w-24 pb-0 fixed  bottom-0">
        <button class="btn lg:w-56  w-20 btn-hover transition ease-in-out">
            <div class="flex">
                <img v-if="!user|| user&&  !user.profilePic" class="object-cover flex justify-center w-12 rounded-full mr-2" src="https://picsum.photos/40/40" alt="">
                <img v-else class="object-cover flex justify-center w-12 rounded-full mr-2" :src="user.profilePic" alt="">
                <div class="lg:w-25">
                        <span class="text-sm font-bold lg:block hidden">{{$store.state.user.name}}</span>
                    <span class="lg:inline-block  hidden text-twgrey-400 text-sm -mt-3">@{{$store.state.user.tag}}</span>
                </div>
                <div class="pl-14 pt-1 font-bold text-xl lg:block hidden">
                    ...
                </div>
            </div>
        </button>
    </div>
</template>

<script>
export default{
    name: "Profile",
    data(){
        return{
            user:null
        }
    },
    mounted(){
        this.user= this.$store.state.user;
    }
}
</script>