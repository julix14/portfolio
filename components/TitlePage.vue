<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4 text-slate-400">
      <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1>Julius Becker</h1>
          <h2>Software Engineering Student</h2>
          <p>
            I am passionate about technology and programming, I thrive on the
            limitless learning and innovation that each line of code offers.
          </p>
          <nav aria-label="In-page jump links">
            <ul>
              <li>Who am I?</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          </nav>
        </div>
        <ul aria-label="Social media">
          <li>
            <a><font-awesome-icon :icon="['fab', 'square-github']" /></a>
          </li>
          <li>
            <a><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          </li>
          <li>
            <a><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </li>
        </ul>
      </header>
      <main class="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          aria-label="Who am I"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2
              class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Who am I?
            </h2>
          </div>
          <div>
            <p>
              When I was 15 years old, I took my first steps into the world of
              programming. The idea of creating something from scratch
              fascinated me. Since then, I've been on a journey of continuous
              learning and skill improvement in programming and software
              development.
            </p>
            <p>
              Along the way, I've experimented with various technologies and
              languages. I began with Python on my own and Pascal in school.
              Soon, I delved into the realm of web development, mastering HTML,
              CSS, and JavaScript to build my first websites. My internship at
              <a href="https://www.kopf3.de/">Kopfhoch3</a> introduced me to
              Java, and I quickly transitioned to Kotlin and PHP to broaden my
              tech stack.
            </p>
            <p>
              Currently, I find myself at a crossroads, uncertain about the
              specific direction I want to take in my development journey. My
              studies and associated projects have exposed me to a plethora of
              interesting topics and technologies that I'm eager to explore
              further. However, I believe this sense of curiosity and endless
              possibility is what makes the field of software development—and my
              time as a student—so rewarding.
            </p>
          </div>
        </section>
        <section
          id="experience"
          aria-label="Experience"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2
              class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <ol class="group/list">
            <li>
              <div
                class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div
                  class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2019-2022
                </header>
                <div class="z-10 sm:col-span-6">
                  <h3>
                    <a
                      href="https://www.telekom.com"
                      ref="noreferrer"
                      target="_blank">
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span
                        >IT Systems Technician ⎯
                        <span> Deutsche Telekom AG </span>
                      </span>
                    </a>
                    <div>
                      <div
                        class="text-slate-500"
                        aria-hidden="true">
                        Apprentenceship
                      </div>
                    </div>
                  </h3>
                  <p class="mt-2 text-sm leading-normal">
                    During my 2.5-year traineeship as an IT Systems Technician
                    at Deutsche Telekom, I gained hands-on experience in diverse
                    areas including customer service, network device management,
                    and advanced networking. I honed my technical skills through
                    practical work with various network configurations,
                    cloud-based telecom services, and key aspects of Deutsche
                    Telekom's backbone network. This comprehensive training,
                    also enriched by an introduction to Agile methodologies and
                    data-driven business practices, provided me with a robust
                    skill set for a career in IT.
                  </p>
                  <ul
                    class="flex flex-wrap"
                    aria-label="Used technologies">
                    <li>
                      <div
                        class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li>
                      <div
                        class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Python
                      </div>
                    </li>
                    <li>
                      <div
                        class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        MS Office
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </section>
        <section
          id="projects"
          aria-label="Projects">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2
              class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h2>
          </div>
        </section>
        <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>© 2021 Julius Becker</p>
        </footer>
      </main>
    </div>
  </div>
  <Aura />
</template>

<script setup>
  import Aura from "@/components/Aura.vue";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
