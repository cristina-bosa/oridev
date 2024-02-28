<template>
  
  <main>
    <section>
      <article>
        <h1>
          Hola. Soy Cristina. Diseñadora UX/UI y Desarrolladora Front-end.
        </h1>
        <p>Apasionada de crear experiencias de usuarios únicas, accesibles y centradas en el usuario con una experiencia
          sólida en diseño y desarrollo.</p>
        <button class="btn btn--primary"> Conóceme -> </button>
      </article>
      <article>
        <img src="" alt="">
      </article>

    </section>
  </main>
  <footer>

  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from '../components/TheNavBar.vue';
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

<style lang="scss" scoped></style>