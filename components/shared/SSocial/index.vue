<template>
  <ul class="social">
    <li><a class="vk" href="https://nuxtjs.org/" target="_blank" /></li>
    <li><a class="fb" href="https://github.com/nuxt/nuxt.js" target="_blank" /></li>
  </ul>
</template>

<style lang="scss" scoped>
  li {
    display: inline-block;
    vertical-align: top;
    margin-left: 4px;
    &:first-child {
      margin-left: 0;
    }
    a {
      display: flex;
      width: 35px;
      height: 35px;
      border-radius: 50px;
      justify-content: center;
      align-items: center;
      background-color: $geyser;
      transition: 0.2s ease;
      &:hover {
        background-color: $bali;
      }
      &:before {
        display: block;
        content:'';
      }
    }
    .vk:before {
      @include sprite('soc-vk')
    }
    .fb:before {
      @include sprite('soc-fb')
    }
  }
</style>
