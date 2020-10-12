<template>
  <svg class="root" width="583" height="1094" viewBox="0 0 583 1094">
    <path id="curve" fill="transparent" d="M292 11.5C446.324 11.5 571.5 136.576 571.5 291V802.5C571.5 956.824 446.424 1082 292 1082C137.676 1082 12.5 956.924 12.5 802.5V291C12.5 136.576 137.576 11.5 292 11.5Z" />
    <text width="100%" style="transform:translate3d(0,0,0);">
      <textPath id="text-path" style="transform:translate3d(0,0,0);" alignment-baseline="middle" xlink:href="#curve" startOffset="0px">Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ </textPath>
    </text>
  </svg>
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
text {
  fill: red;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: .2em;
}
</style>
