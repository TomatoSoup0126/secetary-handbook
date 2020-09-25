<template>
  <q-page class="flex flex-center">
    <button @click="addPerson">add!</button>
    <div >
      <q-table
        :data="items"
        :columns="columns"
        row-key="name"
      />
    </div>
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
      user: {},
      items: [],
      columns: [
        { name: 'id', label: 'id', field: 'id' },
        { name: 'name', label: '姓名', field: 'name' },
        { name: 'address', label: '地址', field: 'address' },
        { name: 'privateAddress', label: '私人地址', field: 'privateAddress' },
        { name: 'phone', label: '電話', field: 'phone' },
        { name: 'cellPhone', label: '行動電話', field: 'cellPhone' },
        { name: 'privatePhone', label: '私人電話', field: 'privatePhone' },
        { name: 'email', label: '電子信箱', field: 'email' },
        { name: 'note', label: '備註', field: 'note' },
        { name: 'company', label: '公司', field: 'company' },
        { name: 'organization', label: '單位', field: 'organization' },
        { name: 'title', label: '職稱', field: 'title' },
        { name: 'type', label: '類別', field: 'type' }
      ]
    }
  },

  mounted: function () {
    // db.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.user = user
    //     this.$bind('items', fStore.collection(`user/${this.user.uid}/items`))
    //   }
    // })

    this.$bind('items', fStore.collection(`user/${this.userId}/items`))
  },

  computed: {
    ...mapGetters([
      'userId',
      'isAuth'
    ])
  },

  methods: {
    addPerson: function () {
      if (this.inputMessage === '') return

      fStore.collection(`user/${this.user.uid}/items`).add({
        id: '',
        name: '水龍兒',
        address: '新店歐',
        privateAddress: '三峽歐',
        phone: '0934567890',
        cellPhone: '091234123',
        privatePhone: '0909876543',
        email: 'cythia0831@gmail.com',
        note: '吃阿輝啦',
        company: ['聯合醫院', '中視'],
        organization: ['院長室', '企劃部'],
        title: ['秘書', '行銷'],
        type: ['大師', '女友']
      }).then(() => {
        console.log('is done')
      })
    }
  }
}
</script>
