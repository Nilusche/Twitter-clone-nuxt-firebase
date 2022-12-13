<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-8 grid-rows-1 border-r  gap-4">
        <Navbar/>
         <div class="bg-white border-r border-l border-twgrey-200 lg:block lg:col-span-2 col-span-8 tweets overflow-y-auto h-screen" >
          <div class="flex h-screen  border-r border-l border-twgrey-200">
            <div class="hidden lg:block  border-r border-l border-twgrey-200">
              <div class="flex p-3 border-b border-twgrey-200 border r" >
                  <span class="text-xl font-semibold">Messages</span>
                  <span class="flex">
                      <div class="w-64"></div>
                      <button class="rounded-full justify-end btn-hover">
                          <svg class="h-6 w-6 p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>
                      </button>
                       <button class="rounded-full ml-1  btn-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>

                       </button>
                  </span>
                  
              </div>
              
              <div  class="flex justify-center p-1 mb-1">
                   <input v-model="searchUser" type="text" class="px-4 py-2 mr-1 bg-twgrey-200 outline-none rounded-full w-full focus:ring-2 ring-sky-500" placeholder="Search for people">
                   <button class="p-2 rounded-full bg-twgrey-200 hover:bg-twgrey-300 " @click="handleSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                   </button>
              </div>
              <div v-for="user in searchResults" :key="user.uid" class="border-b border-twgrey-200 flex">
                <div class=" ml-4 mb-1 ">
                  <img v-if="user.profilePic!=''" :src="user.profilePic" class="object-cover rounded-full w-12 h-12" alt="">
                  <img v-else src="@/assets/images/default_profile_400x400.png" class="object-cover rounded-full w-12 h-12" alt="">
                </div>
                <div class="flex flex-col grow">
                      <div class="" >
                        <span class="font-bold">{{user.name}}</span>
                        <span class="text-twgrey-400"> @{{user.tag}}</span>
                        <span class="text-twgrey-400"></span>
                        
                      </div>
                </div>
                <div class=" flex items-center"> 
                  <button class="p-1" @click="handleNewChat(user.uid)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-twblue rounded-full bg-twgrey-200 hover:bg-twgrey-300 p-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                  </button>
                </div>
              </div>
              
              <div class="flex" @click="switchChat(chat.user1.uid, chat.user2.uid)" v-for="chat in active_chats" :key="chat.id">
                <div class="flex p-4 hover:bg-twgrey-200 hover:cursor-pointer grow border-twgrey-200 border-b" >
                    <div class="mr-2" v-if="chat.user1.uid == $store.state.user.id">
                      <img :src="chat.user2.profilePic" class="object-cover rounded-full w-12 h-12" alt="">
                    </div>
                    <div class="mr-2" v-else>
                      <img :src="chat.user1.profilePic" class="object-cover rounded-full w-12 h-12" alt="">
                    </div>
                    <div class="flex flex-col" v-if="chat.user1.uid == $store.state.user.id">
                        <div class="" >
                          <span class="font-bold">{{chat.user2.name}}</span>
                          <span class="text-twgrey-400"> @{{chat.user2.tag}}</span>
                          <span class="text-twgrey-400"></span>
                          
                        </div>
                        <div v-if="chat.messages.length>0"> {{chat.messages[chat.messages.length-1].message}}</div>
                    </div>
                  <div v-else class="flex flex-col">
                    <div class="" >
                      <span class="font-bold">{{chat.user1.name}}</span>
                      <span class="text-twgrey-400">  @{{chat.user1.tag}}</span>
                      <span class="text-twgrey-400"></span>
                      
                    </div>
                    <div  v-if="chat.messages.length>0">{{chat.messages[chat.messages.length-1].message}}</div>
                  </div>
                  
                </div>
                
                <div v-if="currentTab != '' && chat.id == currentTab"  class="w-1 bg-twblue"></div>
              </div>
              
            </div>
            <div class="grow flex flex-col  " v-if="this.currentTab!='' && this.active_chat!=null">
              <div class=" border-b border-twgrey-200 ">
                <div class="flex p-1 border-b border-twgrey-200 border r justify-end">
                    <span class="flex justify-start w-full">
                        <button class="rounded-full justify-end btn-hover p-2" @click="handleBack">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                          </svg>
                        </button>
                        <div class=" w-6 grow"></div>
                        <button class="rounded-full justify-end btn-hover p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>

                        </button>
                    </span>
                    
                </div>
                <div class="flex flex-col items-center justify-center px-4 pb-24 hover:bg-twgrey-200 cursor-pointer" @click="navigateProfile">
                  <div class="mt-8" v-if="active_chat.user1.uid == $store.state.user.id">
                    <img :src="active_chat.user2.profilePic" class="object-cover rounded-full w-16 h-16" alt="">
                  </div>
                  <div class="mt-8" v-else>
                    <img :src="active_chat.user1.profilePic" class="object-cover rounded-full w-16 h-16" alt="">
                  </div>
                  <div class="flex flex-col text-center" v-if="active_chat.user1.uid == $store.state.user.id">
                    <div>{{active_chat.user2.name}}</div>
                    <div class="text-twgrey-400 mb-2">{{active_chat.user2.tag}}</div>
                    <div>{{active_chat.user2.bio}}</div>
                  </div>
                  <div class="flex flex-col text-center" v-else>
                    <div>{{active_chat.user1.name}}</div>
                    <div class="text-twgrey-400 mb-2">{{active_chat.user1.tag}}</div>
                    <div>{{active_chat.user2.bio}}</div>
                  </div>
                </div>

              </div>
              <div class="grow px-4">
                <div class="list mb-16">

                    <div class="flex justify-end mt-3" v-for="message in messages" :key="message.id">
                        <div v-if="message.sender == $store.state.user.id" class="grow"></div>
                        <div v-if="message.sender == $store.state.user.id" class="flex flex-col">
                          <div class="py-3 px-4 rounded-t-full rounded-l-full text-white bg-twblue mb-1">{{message.message}}</div>
                          <div class="text-sm text-twgrey-400 font-semibold">{{formatAMPM(new Date(message.createdAt.seconds*1000))}}</div>
                        </div>
                        
                        <div v-if="message.sender != $store.state.user.id"  class="flex flex-col">
                          <div class="py-3 px-4 rounded-t-full rounded-r-full mb-1 bg-twgrey-200">{{message.message}}</div>
                          <div class="text-sm text-twgrey-400 font-semibold">{{formatAMPM(new Date(message.createdAt.seconds*1000))}}</div>
                        </div>
                        <div v-if="message.sender != $store.state.user.id" class="grow"></div>
                    </div>

                </div>
              </div>
              <div class=" p-2 bg-white ">
                <div class=" flex px-3 py-1 rounded-l-lg rounded-r-lg bg-twgrey-200">
                  <div class="flex">
                    <button class="rounded-full mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-300 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </button>
                    <button class="rounded-full mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-300 p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>

                    </button>
                    <button class="rounded-full mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-300 p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>


                    </button>
                  </div>
                  <div class="grow flex items-center">
                    <input type="text" v-model="current_message" class=" ml-2 bg-twgrey-200 w-full outline-none">
                  </div>
                  <div>
                    <button @click="sendMessage">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-twblue rounded-full hover:bg-twgrey-300 p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="w-full lg:invisible visible">
              <div class="flex" @click="switchChat(chat.user1.uid, chat.user2.uid)" v-for="chat in active_chats" :key="chat.id">
                <div class="flex p-4 hover:bg-twgrey-200 hover:cursor-pointer grow border-twgrey-200 border-b" >
                    <div class="mr-2" v-if="chat.user1.uid == $store.state.user.id">
                      <img :src="chat.user2.profilePic" class="object-cover rounded-full w-12 h-12" alt="">
                    </div>
                    <div class="mr-2" v-else>
                      <img :src="chat.user1.profilePic" class="object-cover rounded-full w-12 h-12" alt="">
                    </div>
                    <div class="flex flex-col" v-if="chat.user1.uid == $store.state.user.id">
                        <div class="" >
                          <span class="font-bold">{{chat.user2.name}}</span>
                          <span class="text-twgrey-400"> @{{chat.user2.tag}}</span>
                          <span class="text-twgrey-400"></span>
                          
                        </div>
                        <div v-if="chat.messages.length>0"> {{chat.messages[chat.messages.length-1].message}}</div>
                    </div>
                  <div v-else class="flex flex-col">
                    <div class="" >
                      <span class="font-bold">{{chat.user1.name}}</span>
                      <span class="text-twgrey-400">  @{{chat.user1.tag}}</span>
                      <span class="text-twgrey-400"></span>
                      
                    </div>
                    <div  v-if="chat.messages.length>0">{{chat.messages[chat.messages.length-1].message}}</div>
                  </div>
                  
                </div>
                
                <div v-if="currentTab != '' && chat.id == currentTab"  class="w-1 bg-twblue"></div>
              </div>
              
            </div>
          </div>
        </div>
        
</div>

</div>

  
</template>

<script>
import { projectFirestore } from '../../firebase/config'
export default {
  data(){
    return{
      currentTab: "1",
      current_Messenger: "",
      messages: [],
      current_message: "",
      active_chats: [],
      active_chat : null,
      searchUser: "",
      searchResults: [],
      users: [],
    }
  },
  async mounted(){
    
    //fetch all users
    const res = await projectFirestore.collection('users').get()
    let users = []
    res.docs.forEach(doc=>{
      users.push(doc.data())
    })
    this.users = users


    // fetch active chats
    projectFirestore.collection('chats').where('users', 'array-contains', this.$store.state.user.id).onSnapshot((snap)=>{
      snap.docChanges().forEach(change=>{
        if(change.type === 'added'){
          // push the user to the active chats
          const user1 = users.find(user=>user.uid === change.doc.data().users[0])
          const user2 = users.find(user=>user.uid === change.doc.data().users[1])
          // set user[0] and user[1] to the users
          
          
          this.active_chats.push({...change.doc.data(), user1, user2, id: change.doc.id})

        }
      })
    })

    
  },
  methods:{
    navigateProfile(id){
      this.$router.push('/profile/'+id)
    },

    async switchChat(id1, id2){
      if(id1 === this.$store.state.user.id){
        this.current_Messenger = id2
      }else{
        this.current_Messenger = id1
      }

      const chat_id= this.$store.state.user.id + '_'+this.current_Messenger
      const alt_chat_id= this.current_Messenger + '_'+this.$store.state.user.id

      const chat = await projectFirestore.collection('chats').doc(chat_id).get()
      const alt_chat = await projectFirestore.collection('chats').doc(alt_chat_id).get()

      if(chat.exists){
        this.currentTab = chat_id
      }else if(alt_chat.exists){
        this.currentTab = alt_chat_id
      }else{
        //create new chat
        await projectFirestore.collection('chats').doc(chat_id).set({
          users: [this.$store.state.user.id, this.current_Messenger],
          messages: []
        })
        this.currentTab = chat_id
      }


      await this.switchWindow(this.currentTab)

    },
    async switchWindow(id){
      
      this.messages =  await projectFirestore.collection('chats').doc(id).onSnapshot((doc) => {
        this.messages = doc.data().messages
      })

      this.active_chat = this.active_chats.find(chat=>chat.id === id)
    },

    async sendMessage(){
      
      this.messages.push({
        message: this.current_message,
        createdAt: new Date(),
        sender: this.$store.state.user.id,
        receiver: this.current_Messenger
      })
      this.current_message = ""
      await projectFirestore.collection('chats').doc(this.currentTab).update({
        messages: this.messages
      })
      
    },
    handleSearch(){
      if(!this.searchUser){
        this.searchResults = []
        return
      }
      // filter this.users to find the users that match the search query
      let results = []
      this.users.forEach(user=>{
        const name = user.name.toLowerCase()
        const query = this.searchUser.toLowerCase()
        if(name.includes(query)){
          results.push(user)
          
        }
      })

      // remove the current user from the results
      const index = results.findIndex(user=>user.uid === this.$store.state.user.id)
      if(index !== -1){
        results.splice(index, 1)
      }
      

      
      this.searchResults = results
    }
    ,
    async handleNewChat(id){
      this.searchUser = ""
      this.searchResults = []
      await this.switchChat(this.$store.state.user.id, id)
    },

    formatAMPM(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime =day+ "/" + month +" " +  hours + ':' + minutes + ' ' + ampm;
      return strTime;
    },
    handleBack(){
      this.currentTab = ""
      this.active_chat = null
    }

  }
}
</script>
