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
        <router-link class="btn btn--primary" to="/about">Conóceme
          <svg class="btn__svg__splend" width="49" height="42" viewBox="0 0 49 42" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1729 3.22217L31.1014 1.91441" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M1.75977 15.9925L32.0297 7.94684" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M30.9849 40.9303L41.2725 14.2426" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M24.5903 21.7182L35.3392 12.0537" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M46.4839 25.4132L47.5097 16.4412" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
          </svg>
        </router-link>

      </article>
      <article>
        <img src="../assets/svg/presentation.svg" alt="">
      </article>
    </section>
    <section class="container__projects">
      <article class="container__projects--left">
        <h2>Proyectos</h2>
        <p class="text-m">Cada proyecto es más que una simple colección de diseños y códigos; es una historia en
          sí misma, donde la pasión por la excelencia y la atención al detalle se entrelazan.</p>
        <router-link class="btn btn--primary" to="/projects">Ver todos los proyectos
          <svg class="btn__svg__splend" width="49" height="42" viewBox="0 0 49 42" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1729 3.22217L31.1014 1.91441" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M1.75977 15.9925L32.0297 7.94684" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M30.9849 40.9303L41.2725 14.2426" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M24.5903 21.7182L35.3392 12.0537" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M46.4839 25.4132L47.5097 16.4412" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
          </svg>
        </router-link>
      </article>
      <article class="container__projects--right projects">

        <div class="projects__box"
          :class="{ 'bg--develop': project.tags[0] === 'Desarrollo', 'bg--both': project.tags.length >= 2, 'bg--design': project.tags[0] === 'Diseño UX/UI' }"
          v-for="project in projects" :key="project.id" @mouseenter="playSound" v-on:click="singleProject(project.id)">
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

          <button class="btn btn--secondary" v-on:click="singleProject(project.id)"> Saber mas</button>
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
    <section class="container__experience">
      <article class="container__experience--left">
        <h2>Experiencia</h2>
        <p>Cada proyecto es más que una simple colección de diseños y códigos; es una historia en sí misma, donde la
          pasión por la excelencia y la atención al detalle se entrelazan.</p>
      </article>
      <article class="container__experience--right">

        <section class="experiences__time-line">

          <div class="experiences__time-line__item" v-for="experience in experiences">
            <h3 class="experience--years">{{ experience.years }}</h3>
            <p class="experience--title">{{ experience.title }}</p>
            <p class="experience--company">{{ experience.company }}</p>
            <ul>
              <li v-for="job in experience.description">{{ job }}</li>
            </ul>
          </div>
        </section>
      </article>
    </section>
    <section id="contact" class="container__contact">
      <article>
        <h2>Contacto</h2>
        <p class="text--60"><strong>La magia sucede cuando la creatividad se encuentra con la dedicación.</strong></p>
        <p class="text--60">Estoy aquí para ofrecerte ambas cosas. Ya sea que estés buscando un diseño impactante,
          un desarrollo sólido o una estrategia digital efectiva, estoy lista para trabajar contigo mano a mano.</p>
        <p class="text--60">Cuéntame sobre tu idea, tu desafío y tu sueño, trabajaremos juntos para convertirlo en algo
          tangible.</p>

        <p>¡No esperes más, ponte en contacto conmigo hoy mismo!</p>
        <a class="btn btn--primary" href="mailto:cristinabosasanchez@gmail.com">
          ¡Escribeme!
          <svg class="btn__svg__splend" width="49" height="42" viewBox="0 0 49 42" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1729 3.22217L31.1014 1.91441" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M1.75977 15.9925L32.0297 7.94684" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M30.9849 40.9303L41.2725 14.2426" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M24.5903 21.7182L35.3392 12.0537" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            <path d="M46.4839 25.4132L47.5097 16.4412" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
          </svg>
        </a>
      </article>
      <article>
        <img src="../assets/svg/contact-me.svg" alt="">
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import TheNavBar from '../components/TheNavBar.vue';
import DataProjects from '../data/projects.json'
import DataExperience from '../data/experience.json'

export default defineComponent({
  components: {
    TheNavBar
  },
  setup() {
    const router = useRouter()
    const projects = DataProjects.projects
    const experiences = DataExperience.experience
    const playSound = () => {
      const audio = new Audio('/assets/sounds/switch-on.mp3')
      audio.play()
    }
    const singleProject = (projectId) => {
      router.push({ name: 'SingleProject', params: { id: projectId } })
    }

    return {
      projects,
      experiences,
      playSound,
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
