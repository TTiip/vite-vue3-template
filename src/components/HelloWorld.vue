<template>
  <div class="msg">
    <div>{{ msg }}</div>
    <div class="text">
      {{ msg }}
    </div>
  </div>
  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped lang="less">
  .msg {
    font-size: 36px;
    .text {
      color: @color-theme;
    }
  }
</style>
