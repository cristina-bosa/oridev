<template>
  <nav class="navbar" role="menubar" aria-label="navigation">
    <div @click="toggleMenu" class="navbar__hamb">
      <svg v-show='isMenuOpen === false' width="24" height="12" viewBox="0 0 24 12" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.49219 1H20.7874" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
        <path d="M7.92383 6.05774H14.3556" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
        <path d="M8.63867 11H22.9315" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
      </svg>
      <svg v-show='isMenuOpen === true' width="22" height="13" viewBox="0 0 22 13" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6.05322H20.2953" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
        <path d="M5.23975 1L15.3463 11.1065" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
      </svg>

    </div>
    <div :class="{ 'navbar__content--active': isMenuOpen }" class="navbar__content">
      <ul class="navbar__items">
        <li>
          <router-link role="menuitem" to="/">
            Oridev
            <svg class="navbar__svg" width="60" height="10" viewBox="0 0 81 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.44824 6.45028C1.76808 5.06431 3.3027 3.98412 4.48562 3.39266C5.74378 2.76358 6.2432 4.56064 6.7434 5.45807C7.24156 6.35182 7.73474 7.38471 8.47471 8.11072C9.00459 8.6306 9.27379 7.70203 9.48717 7.321C10.2131 6.02476 10.5911 4.23117 11.9171 3.38253C12.9028 2.75164 13.9832 4.10313 14.752 4.58736C18.8786 7.18679 23.0314 7.48232 27.8329 7.24C33.4435 6.95685 39.0276 6.25282 44.6195 5.74156C50.2302 5.22858 55.8614 4.97786 61.4668 4.40512C67.631 3.77527 73.7069 2.72959 79.8126 1.71198"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
          </router-link>

        </li>
        <li>
          <router-link role="menuitem" to="/about">
            Sobre mí
            <svg class="navbar__svg" width="60" height="10" viewBox="0 0 81 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.44824 6.45028C1.76808 5.06431 3.3027 3.98412 4.48562 3.39266C5.74378 2.76358 6.2432 4.56064 6.7434 5.45807C7.24156 6.35182 7.73474 7.38471 8.47471 8.11072C9.00459 8.6306 9.27379 7.70203 9.48717 7.321C10.2131 6.02476 10.5911 4.23117 11.9171 3.38253C12.9028 2.75164 13.9832 4.10313 14.752 4.58736C18.8786 7.18679 23.0314 7.48232 27.8329 7.24C33.4435 6.95685 39.0276 6.25282 44.6195 5.74156C50.2302 5.22858 55.8614 4.97786 61.4668 4.40512C67.631 3.77527 73.7069 2.72959 79.8126 1.71198"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link role="menuitem" to="/projects">
            Proyectos
            <svg class="navbar__svg" width="60" height="10" viewBox="0 0 81 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.44824 6.45028C1.76808 5.06431 3.3027 3.98412 4.48562 3.39266C5.74378 2.76358 6.2432 4.56064 6.7434 5.45807C7.24156 6.35182 7.73474 7.38471 8.47471 8.11072C9.00459 8.6306 9.27379 7.70203 9.48717 7.321C10.2131 6.02476 10.5911 4.23117 11.9171 3.38253C12.9028 2.75164 13.9832 4.10313 14.752 4.58736C18.8786 7.18679 23.0314 7.48232 27.8329 7.24C33.4435 6.95685 39.0276 6.25282 44.6195 5.74156C50.2302 5.22858 55.8614 4.97786 61.4668 4.40512C67.631 3.77527 73.7069 2.72959 79.8126 1.71198"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
          </router-link>
        </li>
        <li>

          <a href="/gi#contact">
            Contacto
            <svg class="navbar__svg" width="60" height="10" viewBox="0 0 81 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.44824 6.45028C1.76808 5.06431 3.3027 3.98412 4.48562 3.39266C5.74378 2.76358 6.2432 4.56064 6.7434 5.45807C7.24156 6.35182 7.73474 7.38471 8.47471 8.11072C9.00459 8.6306 9.27379 7.70203 9.48717 7.321C10.2131 6.02476 10.5911 4.23117 11.9171 3.38253C12.9028 2.75164 13.9832 4.10313 14.752 4.58736C18.8786 7.18679 23.0314 7.48232 27.8329 7.24C33.4435 6.95685 39.0276 6.25282 44.6195 5.74156C50.2302 5.22858 55.8614 4.97786 61.4668 4.40512C67.631 3.77527 73.7069 2.72959 79.8126 1.71198"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
          </a>

        </li>
      </ul>
    </div>

  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const isMenuOpen = ref(false)
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    return {
      isMenuOpen,
      toggleMenu
    }
  }
})
</script>
