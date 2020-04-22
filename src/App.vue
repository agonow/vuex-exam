<template>
  <div>
    <my-add></my-add>
    <p>----------------------------------------------------------</p>
    <my-sub></my-sub>
  </div>
</template>
<script>
import Add from './components/add.vue'
import Sub from './components/sub.vue'
export default {
  components: {
    'my-add': Add,
    'my-sub': Sub
  }
}
</script>
<style lang="less" scoped></style>
