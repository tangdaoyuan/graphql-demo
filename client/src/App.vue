<script lang="ts" setup>
import { $fetch } from 'ohmyfetch'
import { onMounted, ref } from 'vue'

const msg = ref('Hello World!')

onMounted(async() => {
  const res = await $fetch('http://localhost:4000/graphql', {
    method: 'post',
    body: {
      query: '{ hello }',
    },
  })
  setTimeout(() => {
    msg.value = res.data.hello
  }, 3000)
})

</script>

<template>
  Hi, pay attention here => {{ msg }}
</template>
