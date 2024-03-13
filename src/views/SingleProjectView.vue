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
        <div class="projects__img" @mouseenter="playSound" v-for="img in project.gallery">
          <img :src="img" alt="" height="350px">
        </div>
        
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

    const route = useRoute()
    const projects = DataProjects.projects
    const id = parseInt(route.params.id)
    const playSound = () => {
      const audio = new Audio('/assets/sounds/switch-on.mp3')
      audio.play()
    }

    const project = projects.find(project => project.id === id)
    return {

      project,
      playSound

    }
  }
})
</script>

<style lang="scss" scoped>
@use '../assets/sass/01-tools/querys.scss' as querys;
.projects{
  margin-top: 5rem;
}

.projects__img {
  @for $i from 1 through 90 {
    &:nth-child(#{$i}) {
      margin-top: ((($i - 1) % 4) - 2) * 1.5rem;
      @include querys.mobile {
            margin-top: 0;
      }
    }
  }
}
</style>