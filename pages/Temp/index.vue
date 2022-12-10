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
            const users= [
                {
                    profile:  "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FJBPrvW3stKZ7MBTJZ96VnL0Cjwz1%2F251531.jpg?alt=media&token=f7b28c58-35d4-43f9-b3e3-e3ae5e047f79",
                    uid: "JBPrvW3stKZ7MBTJZ96VnL0Cjwz1"
                },
                {
                    profile: "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FKopE4DnHnigxXH6EHtbL9HOf3OR2%2FDownload%20(3).jpg?alt=media&token=93ec975e-788e-4d7b-b236-4a91a340ceef",
                    uid: "KopE4DnHnigxXH6EHtbL9HOf3OR2"
                },
                {
                    profile: "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FLha2xrM6XvRcDC69dEzMbAwv7V63%2FDownload%20(4).jpg?alt=media&token=f057161e-36b3-4faa-92f6-82ee7add095e",
                    uid: "Lha2xrM6XvRcDC69dEzMbAwv7V63"
                },
                {
                    profile: "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FPCfG8BLz1YQIhe1fTr2X9kQOBW33%2FDownload%20(5).jpg?alt=media&token=9e13787c-cd5d-4757-9885-1578e0380a23",
                    uid: "PCfG8BLz1YQIhe1fTr2X9kQOBW33"
                },
                {
                    profile:"https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FRXocMsOOzHfPKR3tdlETCHPVKtg1%2FDownload%20(6).jpg?alt=media&token=d7cb823c-8e6a-4e51-9b85-ac22f35ce364",
                    uid: "RXocMsOOzHfPKR3tdlETCHPVKtg1"
                },
                {
                    profile: "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FUqQDFWBkmNbiM5lSVPUFM9wNeSm2%2FFoto_NiluscheLiyanaarachchi.jpg?alt=media&token=90136dbe-9995-4103-9e43-2ae7c492ced8",
                    uid: "UqQDFWBkmNbiM5lSVPUFM9wNeSm2"
                },
                {
                    profile: "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2Fi02VrhUHrPhL2O6ihk4bVCpMHr92%2FDownload%20(7).jpg?alt=media&token=7d570a64-e0b5-4461-9544-5f2b846d7fd5",
                    uid: "i02VrhUHrPhL2O6ihk4bVCpMHr92"
                },
                {
                    profile: "https://firebasestorage.googleapis.com/v0/b/twitterclone-77c2b.appspot.com/o/profiles%2FtQZn47KZH3fkzTv5SCD7NbvKRzB3%2FDownload%20(2).jpg?alt=media&token=44333c78-e4cb-44fe-af82-5b9319dbd199",
                    uid: "tQZn47KZH3fkzTv5SCD7NbvKRzB3"
                }
            ];


            // update all tweets and set the user profile
            const tweets = await projectFirestore.collection('tweets').get();
            tweets.forEach(async tweet => {
                const user = users.find(user => user.uid === tweet.data().uid);
                if(user){
                    await projectFirestore.collection('tweets').doc(tweet.id).update({
                        profilePic: user.profile
                    });
                }
            });

        }
    }
}
</script>

<style>

</style>