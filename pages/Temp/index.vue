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
            const response = await this.$axios.$get('/api/getAll', {
                params : {
                    key : 'trends:*'
                }
            })
            if(response){
                
                response.forEach(async (item) => {
                    const res = await this.$axios.$post('/api/del', {
                        key : item
                    })
                })
            }
        }
    }
}
</script>

<style>

</style>