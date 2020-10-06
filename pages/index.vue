<template>
  <div id="app" :style="{background:background}">
    <div class="logo-contacts-wrapper">
      <logo />
      <div class="logo-contacts-inner">
        <span class="logo-subtitle">Студия мебели и дизайна</span>
        <span v-hide class="address-block">
          <a class="address-link" href="#">Краснодар, <br>Тургенева,&nbsp;123</a>
          <span class="hours">c&nbsp;10<sup>00</sup> до&nbsp;18<sup>00</sup></span>
        </span>
        <phone>+7&thinsp;861&thinsp;215-30-00</phone>
      </div>
    </div>
    <sidebar />
    <consult-button>Проконсультировать</consult-button>
    <call-babes-button>Вызвать замерщика</call-babes-button>
    <section class="main-scene">
      <div class="scene-table-chairs main-scene-layer-5 main-scene-layer" />
      <div class="clouds-front main-scene-layer-4 main-scene-layer" />
      <div class="scene-kitchen-chairs main-scene-layer-3 main-scene-layer" />
      <div class="scene-kitchen-lights main-scene-layer-3 main-scene-layer" />
      <div class="scene-kitchen-counter main-scene-layer-2 main-scene-layer" />
      <div class="clouds-back main-scene-layer-1 main-scene-layer" />
    </section>
    <main-section text-color="#ffffff" background-color="#fff1f5">
      <section class="we-create">
        <h1>
          <i class="we-create-cursive">Создаём</i>
          <br>
          <a href="#category-kitchens" class="we-create-link">Шикарные кухни</a>
          <a
            href="#"
            class="we-create-link"
            @click.prevent="loadCategory('wardrobes')"
          >Шкафы&thinsp;/&thinsp;гардеробные</a>
          <br>
          <a href="#" class="we-create-link" @click.prevent="loadCategory('hallways')">Прихожие</a>
          <nobr>
            <i class="we-create-cursive">мебель в</i>
            <a href="#" class="we-create-link" @click.prevent="loadCategory('bathrooms')">Ванные</a>
          </nobr>
          <br>
          <a href="#" class="we-create-link" @click.prevent="loadCategory('livingrooms')">Гостинные</a>
          <a href="#" class="we-create-link" @click.prevent="loadCategory('cabinets')">Кабинеты</a>
        </h1>
      </section>
    </main-section>
    <title-section image="/static/images/main-scene/kitchen.png" title="_img/kitchen-bg-sign.png" text-color="#000000" background-color="#FCDAE1" />
    <gallery
      class="category-gallery-block"
      text-color="#000"
      background-col
      or="#fff"
    >
      <template #header>
        <h2 class="subcategory-full-title">
          В жизни
          <div class="link-to-inst-block">
            <span class="about-inst-kitchens">
              Больше наших кухонь&nbsp;—
              <br>в&nbsp;нашем инстаграме
            </span>
            <a class="link-to-inst" href="https://instagram.com/princess_mebel">
              <b>Наш инстаграм</b>
              <span>@princess_mebel</span>
            </a>
          </div>
        </h2>
      </template>
    </gallery>
    <call-babes-button />
    <dialog-mesurement />
    <footer />
  </div>  
</template>

<script>
//  import sections
import titleSection from '~/components/sections/TitleSection.vue'
import mainSection from '~/components/sections/MainSection.vue'

// import sidebars
import sidebar from '@/components/Sidebar.vue'

// import buttons
import callBabesButton from '@/components/buttons/CallBabesButton.vue'
import consultButton from '@/components/buttons/ConsultButton.vue'

export default {
  components: {
    titleSection,
    mainSection,
    sidebar,
    consultButton,
    callBabesButton,
  },
  data () {
    return {
      background: '#fffff', 
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
