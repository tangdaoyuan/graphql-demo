<script lang="ts">
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'HelloWorldComp',
  apollo: {
    hello: gql`{hello}`,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ hello }}
    </h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
