 
<template>
  <TheNavBar />
  <RouterView />
  <footer class="footer">
    <p> &copy Oridev | {{ year }}</p>
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

    const year = new Date().getFullYear();
    return {
      year,
    }
  }
})
</script>
<style lang="scss" scoped>
.footer {
  color: var(--text-color);
  display: flex;
  justify-content: center;

  p {
    font-size: .7rem;
    font-weight: bold;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    background-color: var(--primary-color);
    width: max-content;
  }
}
</style>