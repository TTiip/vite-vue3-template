<template>
  <div>
    <ul>
      <li
        v-for="(message, index) in messages"
        :key="index"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    messages: string[]
  }>()
</script>

<style></style>
