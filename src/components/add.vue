<template>
  <div>
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button @click="handleAdd">+1</button>
    <button @click="handleAdd2">+N</button>
    <button @click="handleAdd3">+async</button>
    <button @click="handleAdd4">+asyncN</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['state'])
  },
  methods: {
    handleAdd() {
      this.$store.commit('add')
    },
    handleAdd2() {
      this.$store.commit('addN', 3)
    },
    handleAdd3() {
      this.$store.dispatch('addAsync')
    },
    handleAdd4() {
      this.$store.dispatch('addnAsync', 4)
    }
  }
}
</script>
<style lang="less" scoped></style>
