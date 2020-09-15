<template>
  <q-page class="flex flex-center">
    <q-btn v-if="!isAuth" @click="Signin">Signin!</q-btn>
    <q-btn v-else @click="Logout">Logout</q-btn>

  </q-page>
</template>

<script>
// import firebase from 'firebase/app'
import { db } from '../js/db'
const fAuth = db.auth()

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
    fAuth.onAuthStateChanged(user => {
      if (user) {
        console.log('is login')
      } else {
        console.log('not yet login')
      }
    })
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
  }
}
</script>
