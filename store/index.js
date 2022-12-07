import getUser from '@/composables/getUser';
import useSignup from '@/composables/useSignup';
import useLogin from '@/composables/useLogin';
import useLogout from '@/composables/useLogout';
import {projectFirestore} from '@/firebase/config';
// holds your root state
const {user} = getUser();

export const state = () => ({
  user: {
    id: user.value ? user.value.id : null,
    name: user.value ? user.value.name : null,
    email: user.value ? user.value.email : null,
    profilePic: null,
    bio: null,
    followers:0,
    following:0,
    tag: null,
  },
  tempID: null,
})

export const actions = {
  async signUp({ commit }, { username, email, password, tagline }) {
    if(tagline.includes('@')){
      // remove @ from tagline
      tagline = tagline.replace('@','');      
    }

      const res = await useSignup(email, password, username);
      if(res.error) {
        throw new Error(res.error);
      }else{
        await projectFirestore.collection('users').doc(res.user.uid).set({
          name: res.user.displayName,
          email: email,
          uid: res.user.uid,
          followers: 0,
          following: 0,
          profilePic: "",
          bio: "",
          tag: tagline,
        })

        let user = {
          name: res.user.displayName,
          email: email,
          uid: res.user.uid,
          followers: 0,
          following: 0,
          profilePic: "",
          bio: "",
          tag: tagline,
        }
        commit('setUser', user)
        return res.user.value;
      }
    
    
  },
  async login({ commit }, { email, password }) {
    const res = await useLogin(email, password);
    if(res.error) {
      throw new Error(res.error);
    }else{
      await projectFirestore.collection('users').doc(res.user.uid).get().then(doc => {
        if(doc.exists){
          let user = {
            name: doc.data().name,
            email: doc.data().email,
            uid: doc.data().uid,
            followers: doc.data().followers,
            following: doc.data().following,
            profilePic: doc.data().profilePic,
            bio: doc.data().bio,
            tag: doc.data().tag,
          }
          commit('setUser', user)
        }
      })
      return res.user;
    }

  },
  getUser({ commit }) {
    const {user}=  getUser();
    if(user.value) {
      commit('setUser', user)
    }
    return user.value;
  },
  async logout({ commit }) {
    commit('logoutUser');
    await useLogout();
  },
  async createTweet({ commit }, { tweet }) {
    
    const res = await projectFirestore.collection('tweets').add(tweet);
    commit('updateTempID', res.id)
  },

  async updateUser({ commit }, {name, bio}) {

    
    const user = {name: name, bio: bio}

    commit('updateUserdata', user)
  },

  async updatePic({ commit }, {pic}) {

    // update url in user collection

    if(!pic){
      return;
    }
    await projectFirestore.collection('users').doc(user.value.uid).update({
      profilePic: pic
    })

    commit('updateProfilePic', pic)
  }
}

export const mutations = {
  setUser(state, user_) {
    state.user.id = user_.uid;
    state.user.name = user_.name;
    state.user.email = user_.email;
    state.user.profilePic = user_.profilePic;
    state.user.bio = user_.bio;
    state.user.followers = user_.followers;
    state.user.following = user_.following;
    state.user.tag = user_.tag;

  },
  logoutUser:state=>{
      state.user.id = null;
      state.user.name = null;
      state.user.email = null;
      state.user.profilePic = null;
      state.user.bio = null;
      state.user.followers = 0;
      state.user.following = 0;
      state.user.tag = null;
  },
  updateUserdata(state, user_) {
    state.user.name = user_.name;
    state.user.bio = user_.bio;
  },
  updateProfilePic(state, pic) {
    state.user.profilePic = pic;
  },
  updateTempID(state, id) {
    state.tempID = id;
  }
  
}