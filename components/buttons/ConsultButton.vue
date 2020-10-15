<template>
  <div class="link-open-chat-wrapper fixed-block">
    <a id="consult" href="#" class="link-open-chat">
      <span class="icon-consult-wrapper">
        <svg class="icon-svg icon-consult-svg">
          <use xlink:href="~/static/sprite.svg#icon-consult"></use>
        </svg>
      </span>
      <span class="link-open-words-wrapper link-underline-solid"><span class="only-desktop">Проконсультироваться </span><span class="only-phone link-underline-solid">Спросить<br></span>в&nbsp;WhatsApp</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ConsultButton',
}
</script>

<style scoped>
  .link-open-chat-wrapper {
    bottom: 4rem;
    left: 2rem;
    z-index: 99;
  }

  .link-open-chat {
    color: var(--White100);
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(101, 0, 19, 0.72),
                 2px 3px 4px rgba(133, 1, 40, 0.2),
                 1px 1px 2px rgba(101, 0, 19, 0.16);
  }

  .icon-consult-wrapper {
    filter: drop-shadow(0 0 20px rgba(101, 0, 19, 0.08));
  }

  .icon-consult-svg {
    display: inline-block;
    height: 2.8rem;
    margin-right: .4rem;
    vertical-align: middle;
    width: 3.2rem;
    filter: drop-shadow(2px 8px 8px rgba(101, 0, 19, 0.16));
    transition: transform .125s ease-in-out;
  }
  .link-open-chat:hover .icon-consult-svg {
    transform: translateY(-.4rem);
  }
  .icon-consult-svg>use {
    fill: var(--PinkLight100);
    filter: drop-shadow(2px 4px 8px rgba(133, 1, 40, 0.12));
  }

  @media (max-width: 460px) {
    .link-open-chat-wrapper {
      bottom: 1.6rem;
      left: .8rem;
    }

    .icon-consult-wrapper {
      display: inline-block;
      height: 2.8rem;
      vertical-align: top;
    }

    .link-open-words-wrapper {
      display: inline-block;
      margin-top: -.4rem;
      vertical-align: top;
    }
  }
</style>