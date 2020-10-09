<template>
  <div class="link-open-chat-wrapper fixed-block">
    <a id="consult" href="#" class="link-open-chat">
      <svg class="link-open-chat-svg" width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.9578 1.78831C23.6361 0.66047 20.08 0 16.0028 0C11.9257 0 8.36948 0.66047 6.04777 1.78831C2.22544 3.64658 -0.0906033 7.22319 0.00283135 11.1272C0.0934346 14.9025 2.41231 18.1573 6.21765 19.8785L5.79861 20.8944H2.19147L0 28L13.1488 21.4485C14.0662 21.4849 16.4105 21.524 16.62 21.524C20.0856 21.524 23.1718 21.0091 25.5614 19.982C29.4999 18.2889 31.9065 14.9781 31.9971 11.1272C32.0934 7.22319 29.7773 3.64658 25.9578 1.78831Z"
          fill="white"
        />
      </svg>
      <span class="hide link-underline-solid"><span class="only-desktop">Проконсультироваться </span><span class="only-phone">Спросить <br></span>в&nbsp;WhatsApp</span>
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

  .link-open-chat-svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: .5rem;
    filter: drop-shadow(0 .2rem .25rem rgba(0,0,0,.13));
    transition: transform .125s ease-in-out;
  }
    .link-open-chat:hover .link-open-chat-svg {
      transform: translateY(-.4rem);
  }
</style>