<template>
  <div class="page page__error">
    <div class="page_bg">
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
      <span>404</span>
    </div>
    <div class="content">
      <span class="logo" />
      <h1 class="heading">
        Запрашиваемая страница не найдена
      </h1>
      <p>
        Возможно вы ошиблись в адресе или страница была перемещена.
      </p>
      <nuxt-link to="/" class="btn">
        Обратно
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .page__error {
    background-color: #fff;
    text-align: center;
    color: $space;
    height: 100vh;
    min-height: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
  .page_bg {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    span {
      position: absolute;
      color: $zumor;
      font-weight: 900;
      font-size: 200px;
      left: 50%;
      top: 0;
      margin-left: 330px;
      -moz-user-select: none;
      user-select: none;
      &:nth-child(2n) {
        left: auto;
        right: 50%;
        margin: 0 330px 0 0;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 200px;
      }
      &:nth-child(4),
      &:nth-child(5) {
        top: 400px;
      }
      &:nth-child(6),
      &:nth-child(7) {
        top: 600px;
      }
      &:nth-child(8),
      &:nth-child(9) {
        top: 800px;
      }
      &:nth-child(10),
      &:nth-child(11) {
        top: 1000px;
      }
      &:nth-child(12),
      &:nth-child(13) {
        top: 1200px;
      }
    }
  }
  .heading {
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;
    margin-bottom: 34px;
  }
  .btn{
    width: 100%;
    max-width: 240px;
    margin: 40px auto 0;
    color: #fff;
    @include btn(43px, 8px, $radical, $radical-h);
  }
  .content {
    max-width: 460px;
    position: relative;
    z-index: 10;
  }
  .logo {
    display: block;
    @include sprite('logo');
    margin: 0 auto 52px;
  }
</style>
