<template>
  <Layout>
    <div>
      <PiniaLogo />
    </div>
    <div>
      <NewMessageForm @send="handleSend" />
      <NewMessageList :messages="messages" />
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Layout from '@/components/Layout/index.vue'
import PiniaLogo from '@/components/PiniaLogo.vue'
import NewMessageForm from '@/components/NewMessageForm/index.vue'
import NewMessageList from '@/components/NewMessageList/index.vue'

const messages = ref<string[]>([])

const handleSend = (msg: string) => {
  messages.value.push(msg)
}
</script>

<style scoped lang="less">
body {
  margin: 0!important;
}
</style>
