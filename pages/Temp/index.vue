<template>
    <div class="container">
        <div class="row">
        <div class="col-12">
            <h1>Home Page</h1>
            <p>Home page content goes here.</p>
        </div>
        <button @click="setKey">set</button>
        </div>
    </div>
</template>

<script>
import { projectFirestore } from '../../firebase/config'
export default {
    async mounted(){
        
        
    },

    methods:{
        async setKey(){
           // add the properties "replies" to all the tweets
              const res = await projectFirestore.collection('tweets').get()
            res.docs.forEach(doc => {
                projectFirestore.collection('tweets').doc(doc.id).update({
                    replies: 0
                })
            })
        }
    }
}
</script>

<style>

</style>