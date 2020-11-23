<template>
  <div class="page-static page-essential">
    <div class="page-essential-sidebar">
      <div class="page-static-logo-wrapper">
        <NuxtLink to="/" class="page-static-logo-link">
          <svg class="page-static-logo-svg" viewBox="0 0 115 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M94.1903 56.7359H20.2322V64.9453H94.1903V56.7359Z"/>
            <path d="M103.541 0.945312L92.4901 26.7464C90.1098 32.2752 90.1098 37.6364 91.64 44.0029L91.98 45.5108H89.0897L70.2177 0.945312H54.0659L34.0037 48.3589H44.8849L55.9361 22.5579C58.3164 17.0291 58.4864 11.5003 56.7862 5.30133L56.4462 3.79348H59.3365L78.0385 48.3589H94.1903L114.422 0.945312H103.541Z"/>
            <path d="M12.2413 0.945312L32.4735 48.3589H20.2322L0 0.945312H12.2413Z"/>
          </svg>
        </NuxtLink>
      </div>
      <div class="page-essential-nav">
        <ul class="page-essential-nav-ul">
          <li class="page-essential-nav-link-wrapper"><NuxtLink to="Essential" class="link-underline-solid">Реквизиты</NuxtLink></li>
          <li class="page-essential-nav-link-wrapper"><NuxtLink to="Privacy-policy" class="link-underline-solid">Политика конфиденциальности</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="page-essential-cont">
      <slot />
      <div class="button-to-main-wrapper">
        <NuxtLink to="/" class="button button-to-main">Вернуться на главную</NuxtLink>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'SectionEssential',
}
</script>



<style scoped>
.page-essential {
  background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, #FFDCEF 79.19%);
  grid-column-gap: 4rem;
  padding: 8.4rem 6.4rem;
}

.page-essential-sidebar {
  grid-column: 1/2;
  grid-row: 1/1;
  max-width: 20rem;
}

.page-static-logo-link {
  display: inline-block;
  transition: transform .175s ease-in-out;
  will-change: transform;
}
.page-static-logo-link:hover {
  transform: translateY(-.6rem);
}

.page-static-logo-svg path {
  fill: var(--Black100);
  transition: fill .175s ease-in-out;
  will-change: fill;
}
.page-static-logo-link:hover .page-static-logo-svg path {
  fill: var(--Black84);
}

.page-essential-nav {
margin-top: 8rem;
}

.page-essential-nav-ul {
  margin-left: 2rem;
  position: sticky;
  position: -webkit-sticky;
  top: 4rem;
}

.page-essential-nav-link-wrapper {
  height: 100%;
  margin-bottom: 1.2rem;
}

.page-essential-nav a {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: .08em;
  line-height: 1.6rem;
  text-transform: uppercase;
}

.page-essential-nav .link-underline-solid {
  border-bottom-color: var(--Black16);
}

.page-essential-nav .link-underline-solid.nuxt-link-active {
  border-bottom-width: 1.5px;
  border-bottom-color: var(--Black100);
}
.page-essential-nav .link-underline-solid.nuxt-link-active:hover {
  border-bottom-color: var(--Black64);
}

.page-essential-cont {
  grid-column: 2/3;
  grid-row: 1/1;
  width: calc(100vw - 40rem);
}

.page-essential-header {
  margin: 0 0 9.2rem;
}

.button-to-main-wrapper {
  margin-top: 6.4rem;
}



@media (max-width: 460px) {}
</style>
