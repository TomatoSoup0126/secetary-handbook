<template>
  <q-page class="flex flex-center">
    index
  </q-page>
</template>

<script>
import { db } from '../js/db'
import { mapGetters } from 'vuex'
const fStore = db.firestore()

export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },

  mounted: function () {
    // db.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.user = user
    //     this.$bind('items', fStore.collection(`user/${this.user.uid}/items`))
    //   }
    // })

    // this.$bind('items', fStore.collection(`user/${this.userId}/items`))
  },

  computed: {
    // ...mapGetters([
    //   'userId',
    //   'isAuth'
    // ])
  },

  methods: {
    // addPerson: function () {
    //   if (this.inputMessage === '') return

    //   fStore.collection(`user/${this.user.uid}/items`).add({
    //     id: '',
    //     name: '水龍兒',
    //     address: '新店歐',
    //     privateAddress: '三峽歐',
    //     phone: '0934567890',
    //     cellPhone: '091234123',
    //     privatePhone: '0909876543',
    //     email: 'cythia0831@gmail.com',
    //     note: '吃阿輝啦',
    //     company: ['聯合醫院', '中視'],
    //     organization: ['院長室', '企劃部'],
    //     title: ['秘書', '行銷'],
    //     type: ['大師', '女友']
    //   }).then(() => {
    //     console.log('is done')
    //   })
    // }
  }
}
</script>
