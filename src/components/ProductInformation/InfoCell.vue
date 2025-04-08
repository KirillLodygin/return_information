<template>
  <div class="info-cell">
    <div class="info-cell__content">
      <div class="info-cell__number-line">
        <div class="info-cell__number">{{ number }}</div>
        <div class="info-cell__icon"></div>
      </div>
      <div class="info-cell__description">{{ description }}</div>
      <div class="info-cell__term">{{ term }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  number: string
  description: string
  term: string
}
defineProps<Props>()
</script>

<style scoped>
.info-cell {
  width: 282px;
  border-radius: 12px;
  padding: 16px;
  background-color: #f0f9ff;
  box-sizing: border-box;
}

.info-cell__content {
  display: flex;
  flex-direction: column;
  color: #0f172a;
}

.info-cell__number-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.info-cell__number {
  font-weight: 500;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.info-cell__icon {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #ffffff;
  background-image: url('@assets/images/card.jpg');
  background-size: 55%;
  background-position: center;
  background-repeat: no-repeat;
}

.info-cell__description {
  font-weight: 700;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 0;
  text-transform: uppercase;
  max-width: 180px;
  margin-bottom: 40px;
}

.info-cell__term {
  font-weight: 400;
  font-size: 15px;
  line-height: 110%;
  letter-spacing: 0;
  max-width: 250px;
}

@media (max-width: 900px) {
  .info-cell {
    width: 80%;
  }

  .info-cell__description {
    max-width: 80%;
  }

  .info-cell__term {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .info-cell {
    width: 100%;
  }
}
</style>
