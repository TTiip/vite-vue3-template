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
  import axios from '@/axios'
  import { useUserStore } from '@/stores'

  axios({
    url: 'getSearchHot'
  }).then(res => {
    console.log(res.result.hots[1].iconType)
  })

  const user = useUserStore()
  const changeUser = () => user.changeUser('test123')
</script>
