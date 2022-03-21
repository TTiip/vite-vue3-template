<template>
  <div style="text-align: center;">
    <h1>
      {{ user.name }}
    </h1>
    <button @click="changeUser">
      changeUser
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/stores'

  const user = useUserStore()
  const changeUser = () => user.changeUser('test123')
</script>
