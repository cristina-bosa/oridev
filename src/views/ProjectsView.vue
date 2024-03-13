<template>
  <main class="container">
    <section class="container__presentation">
      <article>
        <h1 class="text--xxl text--20">
          Proyectos
        </h1>
        <p class="text--m text--55">Cada proyecto es más que una simple colección de diseños y códigos; es una historia
          en
          sí misma, donde la pasión por la excelencia y la atención al detalle se entrelazan..</p>
      </article>
      <article>
        <img src="../assets/svg/under-construction.svg" alt="">
      </article>
    </section>
    <section class="container__projects">
      <article class="container__projects--right projects">

        <div class="projects__box" @mouseenter="playSound" v-on:click="singleProject(project.id)"
          :class="{ 'bg--develop': project.tags[0] === 'Desarrollo', 'bg--both': project.tags.length >= 2, 'bg--design': project.tags[0] === 'Diseño UX/UI' }"
          v-for="project in projects" :key="project.id">
          <div>
            <h3>{{ project.name }}</h3>
            <svg class="projects__box__svg__title" width="73" height="4" viewBox="0 0 73 4" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.93922 1.50789C9.45452 1.93864 16.9974 1.79093 24.5219 1.90753C32.0717 2.02452 39.6096 2.50255 47.1613 2.53717C55.4657 2.57524 63.7146 2.03273 71.9991 1.53287"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>

          </div>
          <p> {{ project.description }} </p>

          <button class="btn btn--secondary" v-on:click="singleProject(project.id)"> Saber más </button>
          <svg class="projects__box__splend" width="49" height="42" viewBox="0 0 49 42" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1729 3.22217L31.1014 1.91441" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M1.75977 15.9925L32.0297 7.94684" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M30.9849 40.9303L41.2725 14.2426" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M24.5903 21.7182L35.3392 12.0537" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M46.4839 25.4132L47.5097 16.4412" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>

      </article>
    </section>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'
import DataProjects from '../data/projects.json'
export default defineComponent({
  setup() {
    const router = useRouter()
    const projects = DataProjects.projects
    const playSound = () =>{
      const audio = new Audio('/assets/sounds/switch-on.mp3')
      audio.play()
    }
    const singleProject = (projectId) =>{
      router.push({
        name: 'SingleProject',
        params: { id: projectId }
      })
    }
    return {
      playSound,
      projects,
      singleProject
    }
  }
})
</script>

<style lang="scss" scoped>
@use '../assets/sass/01-tools/querys.scss' as querys;
.projects__box {
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