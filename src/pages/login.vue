<template>
  <q-page class="flex flex-center">
    <q-btn v-if="!isAuth" @click="Signin">Signin!</q-btn>
    <q-btn v-else @click="Logout">Logout</q-btn>

  </q-page>
</template>

<script>
// import firebase from 'firebase/app'
// import { db } from '../js/db'
// const fAuth = db.auth()
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  created () {
    // fAuth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.user = user
    //     this.isAuth = true
    //   } else {
    //     // this.user = {}
    //     // this.isAuth = false
    //   }
    // })
  },

  mounted: function () {

  },

  computed: {
    ...mapGetters([
      'userId',
      'isAuth',
      'token'
    ])
  },

  methods: {
    ...mapActions([
      'Signin',
      'Logout'
    ])
    // login () {
    //   const authProvider = new firebase.auth.GoogleAuthProvider()
    //   fAuth.signInWithPopup(authProvider)
    //     .then(result => {
    //       // this.user = result.user
    //       // this.isAuth = true
    //     })
    //     .catch(err => console.error(err))
    // },
    // logout () {
    //   fAuth.signOut()
    //     .then(() => {
    //       // this.user = {}
    //       // this.isAuth = false
    //     })
    //     .catch(err => console.log(err))
    // }
  }
}
</script>
