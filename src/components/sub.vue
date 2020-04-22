<template>
  <div>
    <h3>当前最新的count值为：{{ show }}</h3>
    <h3>当前最新的count值为：{{ $store.getters.show }}</h3>
    <button @click="handleSub">-1</button>
    <button @click="handleSub2">-N</button>
    <button @click="handleSub3">-async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['show'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subnAsync']),
    handleSub() {
      this.sub()
    },
    handleSub2() {
      this.subN(3)
    },
    handleSub3() {
      this.subnAsync(6)
    }
  }
}
</script>
<style lang="less" scoped></style>
