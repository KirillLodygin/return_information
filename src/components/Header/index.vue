<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <h1 class="header__title">Возврат</h1>
        <div v-if="!isMobile" class="header__text">
          <p class="header__text-line">Строительство объекта закончилось, а материалы остались?</p>
          <p class="header__text-line">Мы примем назад материалы в товарном виде и вернем за них деньги.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import useBreakpoints from '@/composables/useBreakpoints'

const { isMobile } = useBreakpoints()
</script>

<style>
.header {
  background-color: #2c3e50;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.header__container {
  width: 100%;
  height: 246px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@assets/images/header.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.header__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}

.header__title {
  font-weight: 500;
  font-size: 54px;
  line-height: 1.2;
  text-transform: uppercase;
}

.header__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-weight: 500;
  font-size: 17px;
}

.header__text-line {
  margin: 0;
}

@media (max-width: 768px) {
  .header__container {
    height: 210px;
  }

  .header__title {
    font-size: 50px;
  }
}

@media (max-width: 640px) {
  .header__container {
    height: 180px;
  }

  .header__title {
    font-size: 48px;
  }
}
</style>