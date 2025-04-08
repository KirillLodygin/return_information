<template>
  <div class="information-block">
    <div class="information-block__container">
      <div class="information-block__header">
        <template v-if="isMaxDesktop">
          <p class="information-block__header-line">Какой товар</p>
          <p class="information-block__header-line">можно вернуть</p>
        </template>
        <p v-else class="information-block__header-line">Какой товар можно вернуть</p>
      </div>
      <div class="information-block__cells">
        <InfoCell
            v-for="cell in GOODS"
            :key="cell.number"
            :number="cell.number"
            :description="cell.description"
            :term="cell.term"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GOODS } from '@/constants/projectInfo'
import InfoCell from './InfoCell.vue'

import useBreakpoints from '@/composables/useBreakpoints'

const { isMaxDesktop } = useBreakpoints()
</script>

<style scoped>
.information-block {
  width: 100%;
  background-color: #ffffff;
  padding: 112px 0;
}

.information-block__container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  gap: 24px;
}

.information-block__header {
  width: 282px;
  color: #0f172a;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.information-block__header-line {
  margin: 0;
}

.information-block__cells {
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  gap: 24px;
}

@media (max-width: 1200px) {
  .information-block__container {
    flex-direction: column;
    gap: 24px;
    margin-left: 40px;
  }
}

@media (max-width: 900px) {
  .information-block {
    padding: 80px 0;
  }

  .information-block__header {
    width: 100%;
  }

  .information-block__container {
    margin: auto;
    width: 80%;
  }

  .information-block__cells {
    flex-direction: column;
    gap: 25px;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .information-block {
    padding: 60px 0;
  }

  .information-block__header {
    font-size: 11px;
  }
}
</style>

