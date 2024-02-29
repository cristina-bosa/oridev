<template>
  <main class="container">
    <section class="container__presentation">
      <article>
        <h1 class="text--xxl text--20">
          Hola. Soy Cristina. Diseñadora UX/UI y Desarrolladora Front-end.
        </h1>
        <p class="text--m text--55">Apasionada de crear experiencias de usuarios únicas, accesibles y centradas en el
          usuario con una experiencia
          sólida en diseño y desarrollo.</p>
        <button class="btn btn--primary"> Conóceme
          <svg class="btn__svg" width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999931 7L23.2856 7" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M17.2856 13L23.2856 7L17.2856 1" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </article>
      <article>
        <img src="../assets/svg/presentation.svg" alt="">
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>