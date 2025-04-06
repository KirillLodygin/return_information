<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div v-if="isDesktop" class="footer__offer">
          <p class="footer__offer-text">связаться</p>
          <p class="footer__offer-text">с менеджером</p>
        </div>
        <div class="footer__contact">
          <p class="footer__contact-text">
            Если возникли вопросы по возврату товара, получению денег за него или необходимым документам, напишите нам
          </p>
          <button class="footer__contact-button" @click="() => {console.log('Click!')}">Связаться с менеджером</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import useBreakpoints from '@/composables/useBreakpoints'

const { isDesktop } = useBreakpoints()
</script>

<style>
.footer {
  background-color: #405e94;
  border-top: 1px solid #405e94;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 16px;
}

.footer__container {
  width: 100%;
  height: 233px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
}

.footer__offer {
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-transform: uppercase;
  width: 282px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 820px;
}

.footer__contact-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.footer__contact-button {
  background-color: #405e94;
  border: #f8f9fa 1px solid;
  color: white;
  width: 100%;
  height: 51px;
  border-radius: 36px;
  font-weight: 500;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .footer {
    padding: 0 25px;
  }

  .footer__container {
    height: 210px;
  }

  .footer__contact-text {
    font-size: 18px;
  }

  .footer__contact-button {
    font-size: 14px;
    height: 46px;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 0 30px;
  }

  .footer__container {
    height: 180px;
  }

  .footer__contact-text {
    font-size: 16px;
  }

  .footer__contact-button {
    font-size: 12px;
    height: 40px;
  }

  .footer__wrapper {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
