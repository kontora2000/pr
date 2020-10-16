<template>
  <div class="freefreefree-arch-wrapper">
    <div class="freefreefree-arch-text">
      <svg class="root" width="583" height="1094" viewBox="0 0 583 1094">
        <path id="curve" fill="transparent" d="M292 1082C137.676 1082 12.5 956.924 12.5 802.5L12.5001 291C12.5001 136.676 137.576 11.5 292 11.5C446.324 11.5 571.5 136.576 571.5 291L571.5 802.5C571.5 956.924 446.424 1082 292 1082Z" />
        <text width="100%" style="transform:translate3d(0,0,0);">
          <textPath id="text-path" style="transform:translate3d(0,0,0);" alignment-baseline="middle" xlink:href="#curve" startOffset="0px">Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arc',
  mounted () {
    const textPath = document.querySelector('#text-path')

    const h = document.documentElement
    const b = document.body
    const st = 'scrollTop'
    const sh = 'scrollHeight'

    document.addEventListener('scroll', (e) => {
      const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
      textPath.setAttribute('startOffset', (-percent * 40) + 0)
    })
  },
}
</script>

<style scoped>
 .root {
   position: absolute;
   left:50%;
   top:0;
   transform: translateX(-50%);
 }

  p {
  margin: 0 auto 1rem;
}

  .freefreefree-arch-wrapper {
    margin: 0 auto;
    max-width: 60rem;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .freefreefree-arch-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-2rem);
  }

  .freefreefree-arch-text text {
    fill: var(--Black100);
    font-family: var(--font-serif);
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: .16em;
  }
</style>
