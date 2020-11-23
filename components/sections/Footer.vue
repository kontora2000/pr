<template>
  <div class="copyrights-cont">
    <div class="license">
      ©&thinsp;2011&hairsp;–&hairsp;2021, ООО «ЛИОН»&thinsp;/&thinsp;Студия&nbsp;мебели&nbsp;«<NuxtLink class="link-underline-solid" to="/">Princess</NuxtLink>»<span class="only-desktop"> —&nbsp;Все права защищены.</span>
      <div class="essentials-cont">
        <NuxtLink to="Essential" class="link-underline-solid">Реквизиты</NuxtLink>
        <NuxtLink to="Privacy-policy" class="link-underline-solid">Политика конфиденциальности</NuxtLink>
      </div>
    </div>
    <div class="by-kontora-wrapper">
      <a class="by-kontora-link" href="https://kontora.cc">
        <svg class="kontora-logo-svg">
          <use xlink:href="~/static/sprite.svg#kontora-logo"></use>
        </svg>
      </a>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Footer',
}
</script>



<style scoped>
.copyrights-cont {
  color: var(--White64);
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.copyrights-cont a {
  color: var(--White64);
  border-bottom-color: var(--White36);
}
.copyrights-cont a:hover {
  color: var(--White84);
  border-bottom-color: var(--White84);
}

.license {
	font-size: .9rem;
	font-weight: 500;
	letter-spacing: .04em;
	line-height: 1.6rem;
  text-transform: uppercase;
}

.essentials-cont a:not(:last-child){
  margin-right: 1.2rem;
}

.by-kontora-wrapper {
	margin: 2rem auto 0;
	width: 8.8rem;
	height: 3.2rem;
}

.kontora-logo-svg {
  fill: var(--White64);
  width: inherit;
	height: inherit;
  transition: transform .125s ease-in-out, fill .175s ease-in-out;
  will-change: transform, fill;
}

.by-kontora-link {
	width: inherit;
	height: inherit;
}

.by-kontora-link:hover .kontora-logo-svg {
  fill: var(--White84);
  transform: scale(1.25) rotate(-16deg);
}

@media (max-width: 460px) {
  .copyrights-cont {
    width: 100%;
  }
}
</style>
