<template>
 <div style="background-color: #eef3f6; " class="w-96 rounded-full mt-2 mb-2 p-2">
    <span @click="handleSearch"><svg style="filter: invert(49%) sepia(7%) saturate(1181%) hue-rotate(165deg) brightness(89%) contrast(81%);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" h-6 inline-block px-2" ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg></span>
    <input id="search" v-model="search" @keyup.enter="handleSearch" autocomplete="off" type="text" style="background-color: #eef3f6; outline: none; width:18em" placeholder="Search Twitter" class="pl-2">           
</div>
</template>

<script>
export default{
    data(){
        return{
            search: ''
        }
    },
    methods:{
        handleSearch(){
            if(this.search){
                this.$router.push("/explore/"+this.search)
            }
        }
    }

}

</script>