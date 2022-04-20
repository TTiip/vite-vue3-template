<template>
  <Layout>
    <PiniaLogo />
    <div style="text-align: center;margin-top: 20px;" class="aa">
      <router-link class="btn" to="/Bar">
        Bar
      </router-link>
      |
      <router-link class="btn" to="/Foo">
        Foo
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
  import Layout from '@/components/Layout/index.vue'
  import PiniaLogo from '@/components/PiniaLogo.vue'
  let a = 1
  console.log(a)
// debugger
</script>

<style scoped lang="less">
  body {
    margin: 0 !important;
  }

  .btn {
    display: inline-block;
    border-radius: 4px;
    padding: 2px 16px;
    text-decoration: none;
    border: 1px solid #83e695;
    background: #83e695;
    color: #fff;
  }
</style>
