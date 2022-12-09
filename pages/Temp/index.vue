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
export default {
    async mounted(){
        let curDateStr = new Date().toDateString()
        //remove spaces
        curDateStr = curDateStr.replace(/\s/g, '')
        const queryStr = 'trends:' + curDateStr
        const response =  await this.$axios.$get('/api/keys', {
            params : {
                key : queryStr
            }
        })
        // parse to json
        const trends = JSON.parse(response)
        
    },

    methods:{
        async setKey(){
            let dateString = new Date().toDateString()
            //remove spaces
            let curDateStr = new Date().toDateString()
            //remove spaces
            curDateStr = curDateStr.replace(/\s/g, '')
            const res = await this.$axios.$post('/api/del', {
                key : 'timeline' + ':'+  this.$store.state.user.id + ':' + curDateStr,
            })
            console.log(res)
        }
    }
}
</script>

<style>

</style>