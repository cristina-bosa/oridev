 
<template>
  <TheNavBar />
  <RouterView />
  <footer>
    <p>© 2021 Cristina</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from './components/TheNavBar.vue';
export default defineComponent({
  components: {
    TheNavBar
  },
  setup() {


    return {
      
    }
  }
})
</script>