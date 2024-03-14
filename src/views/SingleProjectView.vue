<template>
  <main class="container">
    <section class="container__projects__presentation">
      <article>
        <h1 class="text--l text--20">{{ project.name }}</h1>
        <p class="text--55">
          {{ project.description }}
        </p>
<<<<<<< HEAD
      </article>
      <article>

        <h2 class="text--m">Tags:</h2>
=======

>>>>>>> develop
        <div class="projects__tags">
          <span v-for="tag in project.tags">{{ tag }}</span>
        </div>
        <div class="projects__urls">
          <a @mouseenter="playSoundLink()" v-for="url in project.urls" :href="url.url" target="_blank"
            rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1304_17)">
                <path
                  d="M6.85645 3.42855L8.53 1.75488C10.108 0.176923 12.6663 0.176923 14.2443 1.75488C15.8223 3.33284 15.8223 5.89121 14.2443 7.46917L12.5707 9.14284"
                  stroke="#F5C64C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M9.14259 12.5714L7.46905 14.2451C5.89108 15.8231 3.33271 15.8231 1.75476 14.2451C0.176798 12.6672 0.176799 10.1088 1.75476 8.53079L3.4283 6.85712"
                  stroke="#F5C64C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.2853 5.71429L5.71387 10.2857" stroke="#F5C64C" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1304_17">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg> {{ url.name }}</a>
        </div>
      </article>
    </section>
    <section>
      <article class="container__projects--right projects">
        <figure class="projects__img" @mouseenter="playSound" v-on:click="openModal(img)"
          v-for="img in project.gallery">
          <img :src="img" :alt="project.name">
        </figure>
      </article>
    </section>
    <div class="modal" v-if="selectedImg" v-on:click="closeModal()">
      <img class="selectedImg" :src="selectedImg" height="600px">
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DataProjects from '../data/projects.json'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const projects = DataProjects.projects
    const id = parseInt(route.params.id[0])
    const selectedImg = ref('')
    const isModalOpen = ref(false)

    const playSound = () => {
      const audio = new Audio('/assets/sounds/menu-open.mp3')
      audio.play()
    }
    const playSoundLink = () => {
      const audio = new Audio('/assets/sounds/plunger-immediate.mp3')
      audio.play()
    }

    const openModal = (img) => {
      selectedImg.value = img
      isModalOpen.value = true
    }
    const closeModal = () => {
      isModalOpen.value = false
      selectedImg.value = ''
    }

    const project = projects.find(project => project.id === id)
    return {

      project,
      playSound,
      playSoundLink,
      openModal,
      closeModal,
      selectedImg,

    }
  }
})
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
=======
@use '../assets/sass/01-tools/querys.scss' as querys;


>>>>>>> develop
.projects {
  margin-top: 5rem;
}

a {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.selectedImg {
  border-radius: .5rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;
  width: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
}

.projects__urls {
  margin-top: 1rem;
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
