<template>
  <main class="container">
    <section class="container__presentation">
      <article>
        <h1 class="text--xxl text--20">{{ project.name }}</h1>
        <p class="text--m text--55">
          {{ project.description }}
        </p>
      </article>
      <article>
        <span v-for="tag in project.tags">{{ tag }}</span>
      </article>
    </section>
    <section>
      <article class="container__projects--right projects">
        <div class="projects__img" v-on:click="showBigger" v-for="img in project.gallery">
          <img :src="img" alt="" height="350px">
          <img v-if="isBigger" class="bigger-image" :src="img" alt="">

        </div>
        <div class="modal-overlay" v-if="isBigger" @click="hideBigger"></div>
      </article>

    </section>
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import DataProjects from '../data/projects'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const isBigger = ref(false)

    const showBigger = () => {
      isBigger.value = true
    }

    const hideBigger = () => {
      isBigger.value = false
    }
    const route = useRoute()
    const projects = DataProjects.projects
    const id = parseInt(route.params.id)

    const project = projects.find(project => project.id === id)
    return {
      isBigger,
      showBigger,
      hideBigger,
      project

    }
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Color de fondo semitransparente */
  z-index: 999;
  /* Asegúrate de que esté por encima de todo el contenido */
}

.bigger-image {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  /* Ajusta el tamaño máximo según tus necesidades */
  max-height: 90vh;
  /* Ajusta el tamaño máximo según tus necesidades */
  z-index: 1000;
  /* Asegúrate de que esté por encima de la capa modal */
}
</style>