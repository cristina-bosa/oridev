<template>
  <main class="container">
    <section class="container__presentation">
      <article>
        <h1 class="text--xxl text--20">
          Hola. Soy Cristina. Diseñadora UX/UI y Desarrolladora Front-end.
        </h1>
        <p class="text--m text--55">
          Apasionada de crear experiencias de usuarios únicas, accesibles y
          centradas en el usuario con una experiencia sólida en diseño y
          desarrollo.
        </p>
      </article>
      <article>
        <img src="../assets/svg/presentation.svg" alt="" />
      </article>
    </section>
    <section class="about-me">
      <article class="about-me__presentation">
        <article class="about-me__presentation--left">
          <p>Mi madre me dijo una vez <strong>“Elige un trabajo que te guste y no tendrás que trabajar ningún día de tu vida”</strong> Este simple refrán se ha convertido en la brújula que guía mi vida.</p>
            <p>Desde entonces, he tomado la decisión de dedicarme a lo que realmente me motiva y me hace feliz. Me emociona enfrentar desafíos y superarme en cada oportunidad que se presenta.</p>
            <p>Me considero un “unicornio” en el mundo laboral, ya que tengo la capacidad de crear una marca corporativa que refleje la esencia de cada empresa. Así como desarrollar una REST API para gestionar peticiones desde el FRONT, fusionando de esta forma mis habilidades técnicas con mi pasión por el diseño y la creatividad.</p>
          <div class="about-me__presentation__skills">
            <div class="about-me__presentation__skills__item bg--design">
              <h3>Skills de diseño</h3>
              <svg class="about-me__svg" width="73" height="4" viewBox="0 0 73 4" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.93922 1.50789C9.45452 1.93864 16.9974 1.79093 24.5219 1.90753C32.0717 2.02452 39.6096 2.50255 47.1613 2.53717C55.4657 2.57524 63.7146 2.03273 71.9991 1.53287"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
            <ul>              
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>InDesign</li>
              <li>Affinity 2</li>
              <li>Prototipado de baja y alta calidad</li>
            </ul>
            </div>
            <div class="about-me__presentation__skills__item bg--develop">
              <h3>Skills de desarrollo</h3>
              <svg class="about-me__svg" width="73" height="4" viewBox="0 0 73 4" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.93922 1.50789C9.45452 1.93864 16.9974 1.79093 24.5219 1.90753C32.0717 2.02452 39.6096 2.50255 47.1613 2.53717C55.4657 2.57524 63.7146 2.03273 71.9991 1.53287"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
              <ul>              
                <li>Vue 3</li>
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>JavaScript/TypeScript</li>
                <li>Node</li>
                
              </ul>
            </div>
            <div class="about-me__presentation__skills__item">
              <h3>Estudiando</h3>
              <svg class="about-me__svg" width="73" height="4" viewBox="0 0 73 4" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.93922 1.50789C9.45452 1.93864 16.9974 1.79093 24.5219 1.90753C32.0717 2.02452 39.6096 2.50255 47.1613 2.53717C55.4657 2.57524 63.7146 2.03273 71.9991 1.53287"
                stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
            <p>Actualmente estoy estudiando un Máster en Desarrollo Web con las siguientes tecnologías:</p>
              <ul>           
                <li>React</li>
                <li>Python</li>
                <li>Node</li>
                
              </ul>
            </div>
          </div>

        </article>
        <article class="about-me__presentation--right">
          <p>En cada proyecto, mi objetivo es dejar una huella personal y ofrecer resultados excepcionales que superen las expectativas. Estoy comprometida a convertir mi pasión en un motor para el éxito, no solo para mi, sino también para aquellos con quienes colaboro.</p>
          <a href="/assets/cv/CV_CristinaBosa_develop_design.pdf" download="CV - Cristina Bosa" class="btn btn--primary">Descargar CV
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
      </article>
      <article class="about-me__banner">
        <h2 class="text--xl text--25">
          <!-- Un diseño sin un producto es una tragedia. Un producto sin su diseño está muerto. -->
          Un desarrollador sin un diseño es una tragedia. Un diseño sin un desarrollador está muerto.
        </h2>
      </article>
      <article class="about-me__hobbies">
        <p class="text--60">
          Fuera de las pantallas, disfruto de un buen café, leo libros de aventuras y fantasías, levanto hierros de vez
          en
          cuando y disfruto de los atarceres y la lluvia.
        </p>
        <div class="about-me__hobbies__imgs">
          <figure>
            <img src="../assets/png/sunset.png" loading="lazy" />
            <svg class="svg__splend" width="49" height="42" viewBox="0 0 49 42" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1729 3.22217L31.1014 1.91441" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M1.75977 15.9925L32.0297 7.94684" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M30.9849 40.9303L41.2725 14.2426" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M24.5903 21.7182L35.3392 12.0537" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M46.4839 25.4132L47.5097 16.4412" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
          </figure>
          <figure>
            <img src="../assets/png/book.png" loading="lazy" />
            <svg class="svg__splend" width="49" height="42" viewBox="0 0 49 42" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1729 3.22217L31.1014 1.91441" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M1.75977 15.9925L32.0297 7.94684" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M30.9849 40.9303L41.2725 14.2426" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M24.5903 21.7182L35.3392 12.0537" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
              <path d="M46.4839 25.4132L47.5097 16.4412" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>

          </figure>

        </div>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
