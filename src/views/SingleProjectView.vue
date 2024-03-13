<template>
  <main class="container">
    <section class="container__projects__presentation">
      <article>
        <h1 class="text--xl text--20">{{ project.name }}</h1>
        <p class="text--55">
          {{ project.description }}
        </p>
      </article>
      <article>
        
        <h2 class="text--m">Tags:</h2>
        <div class="projects__tags">
          <span v-for="tag in project.tags">{{ tag }}</span>

        </div>
      </article>
    </section>
    <section>
      <article class="container__projects--right projects">
        <div class="projects__img" v-on:click="showBigger" @mouseenter="playSound" v-for="img in project.gallery">
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
    const playSound = () => {
      const audio = new Audio('/assets/sounds/switch-on.mp3')
      audio.play()
    }

    const project = projects.find(project => project.id === id)
    return {
      isBigger,
      showBigger,
      hideBigger,
      project,
      playSound

    }
  }
})
</script>

<style lang="scss" scoped>
.projects{
  margin-top: 5rem;
}

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
@use '../assets/sass/01-tools/querys.scss' as querys;
.projects__img {
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      margin-top: ((($i - 1) % 3) - 2) * 1.5rem;
      @include querys.mobile {
            margin-top: 0;
      }
    }
  }
}
</style>