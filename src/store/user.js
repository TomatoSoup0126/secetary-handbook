import firebase from 'firebase/app'
import { db } from '../js/db'
// import Router from '../router'
const fAuth = db.auth()

const user = {
  state: {
    userId: '',
    isAuth: false,
    token: ''
  },

  mutations: {
    SET_USER_INFO: (state, data) => {
      state.isAuth = true
      state.userId = data.user.uid
      state.token = data.credential.accessToken
    },
    DELETE_USER_INFO: (state) => {
      state.isAuth = false
      state.userId = ''
      state.token = ''
    }
  },

  actions: {
    Signin ({ commit, state }) {
      const authProvider = new firebase.auth.GoogleAuthProvider()
      fAuth.signInWithPopup(authProvider)
        .then(result => {
          commit('SET_USER_INFO', result)
        })
        .catch(err => console.error(err))
    },
    Logout ({ commit, state }) {
      fAuth.signOut()
        .then(() => {
          commit('DELETE_USER_INFO')
        })
        .catch(err => console.log(err))
    }
  }
}

export default user
