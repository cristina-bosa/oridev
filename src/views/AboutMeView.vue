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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            impedit quasi inventore itaque officia! Reprehenderit facere
            similique doloremque voluptatibus sint aliquam perferendis nulla
            eos. Inventore voluptas ex odit quos fugiat? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis, ducimus voluptatum.
            Tempora, enim similique accusamus numquam odio eius libero at
            officiis quod ipsa quidem dolores deserunt ex quam, dolore alias?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p>Mis skills</p>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Figma</li>
            <li>Figma</li>
            <li>Figma</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Figma</li>
            <li>Figma</li>
            <li>Figma</li>
          </ul>
        </article>
        <article class="about-me__presentation--right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            corporis ullam qui unde, provident quo molestiae eos quos cum
            facilis, voluptatum nemo deserunt quam iure rem tempore iusto ipsum
            quis!
          </p>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nobis,
          obcaecati perferendis, odio animi totam nemo, ab impedit ut beatae
          porro voluptatibus! Quas omnis voluptatem nemo earum quo, magnam quos.
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

<style lang="scss" scoped></style>
