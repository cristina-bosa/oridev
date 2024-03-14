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
        <h2 class="text--m">Links:</h2>
        <div class="projects__urls">

          <a v-for="url in project.urls" :href="url.url" target="_blank" rel="noopener noreferrer"> <svg width="16"
              height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <article>
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

.projects {
  margin-top: 5rem;
}

a {
  display: flex;
  align-items: center;
  gap: .5rem;
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