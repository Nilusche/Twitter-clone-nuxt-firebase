import getUser from '@/composables/getUser';
import useSignup from '@/composables/useSignup';
import useLogin from '@/composables/useLogin';
// holds your root state
const {user} = getUser();

export const state = () => ({
  user: {
    id: user.value ? user.value.id : null,
    name: user.value ? user.value.name : null,
  }
})

export const actions = {
  async signUp({ commit }, { username, email, password }) {
    const res = await useSignup(email, password, username);
    if(res.error) {
      throw new Error(res.error);
    }else{
      commit('setUser', res.user)
      return res.user.value;
    }
    
  },
  async login({ commit }, { email, password }) {
    const res = await useLogin(email, password);
    if(res.error) {
      throw new Error(res.error);
    }else{
      console.log("logging", res.user)
      commit('setUser', res.user)
      return res.user;
    }

  },
  getUser({ commit }) {
    const {user}=  getUser();
    if(user.value) {
      commit('setUser', user)
    }
    return user.value;
  }
}

export const mutations = {
  setUser(state, user_) {
    state.user.id = user_.uid;
    state.user.name = user_.displayName;
  },
  logout:state=>{
      state.user.id = null;
      state.user.name = null;
  },
}