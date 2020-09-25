<template>
  <q-page class="flex flex-center">
    <q-btn v-if="!userId" @click="Signin">Signin!</q-btn>
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
        this.$router.push('/')
      }
    })
  },

  mounted: function () {

  },

  computed: {
    ...mapGetters([
      'userId',
      'isAuth'
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
