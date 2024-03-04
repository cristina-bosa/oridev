 
<template>
  <TheNavBar />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
    <!-- <transition
      enter-active-class="circle-enter-active"
      leave-active-class="circle-enter-active">
      <component :is="Component" />
    </transition> -->
  </RouterView>
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
  margin-top: 7rem;
  margin-bottom: 3rem;

  p {
    font-size: .7rem;
    font-weight: bold;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    background-color: var(--primary-color);
    width: max-content;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.22s ease-out;
}
</style>