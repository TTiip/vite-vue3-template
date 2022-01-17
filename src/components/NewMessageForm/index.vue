<template>
  <div>
    <input
      v-model="message"
      class="input"
      type="text"
      data-test="messageText"
    >
    <button
      class="btn"
      data-test="sendButton"
      @click="send"
    >
      send
    </button>
  </div>
</template>

<script>
</script>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')
const emits = defineEmits(['send'])

const send = () => {
  emits('send', message.value)
  message.value = ''
}
</script>

<style></style>
