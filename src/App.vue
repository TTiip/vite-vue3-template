<template>
  <Layout>
    <div
      ref="'aaa"
      class="aaaa"
      @click="ddd"
    >
      <PiniaLogo />
    </div>
  </Layout>
</template>

<script lang="ts" setup>
  import Layout from '@/components/Layout/index.vue'
  import PiniaLogo from '@/components/PiniaLogo.vue'
  const ddd = () => {}

</script>

<style scoped lang="less">
body {
  margin: 0 !important;
}
</style>
