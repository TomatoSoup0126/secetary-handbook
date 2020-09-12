<template>
  <q-page class="flex flex-center">
    <q-btn @click="login">Login!</q-btn>
    <q-btn @click="logout">Logout</q-btn>
  </q-page>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '../js/db'
const fAuth = db.auth()

export default {
  name: 'login',
  data () {
    return {
      user: {},
      isAuth: false
    }
  },

  created () {
    fAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user
        this.isAuth = true
      } else {
        this.user = {}
        this.isAuth = false
      }
    })
  },

  mounted: function () {

  },

  computed: {
  },

  methods: {
    login () {
      const authProvider = new firebase.auth.GoogleAuthProvider()
      fAuth.signInWithPopup(authProvider)
        .then(result => {
          this.user = result.user
          this.isAuth = true
        })
        .catch(err => console.error(err))
    },
    logout () {
      fAuth.signOut()
        .then(() => {
          this.user = {}
          this.isAuth = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
