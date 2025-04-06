<template>
  <div class="conditions">
    <div class="conditions__grid">
      <template v-for="item in RETURN_CONDITIONS" :key="item">
        <div class="conditions__title" :style="{ gridRow: `span ${item.situations.length}` }">
          {{ item.condition }}
        </div>

        <template v-for="(situation, sIndex) in item.situations" :key="sIndex">
          <div class="conditions__situation">
            {{ situation.situation }}
          </div>

          <div class="conditions__list">
            <ul class="conditions__items">
              <li v-for="(condition, cIndex) in situation.conditions" :key="cIndex" class="conditions__item">
                {{ condition }}
              </li>
            </ul>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RETURN_CONDITIONS } from '@/constants/projectInfo'
</script>

<style scoped>
.conditions {
  background-color: #f9fafb;
  padding: 60px 0;
  color: #0f172a;
}

.conditions__grid {
  display: grid;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  grid-template-columns: 1fr 1fr 2fr;
  border-top: 1px solid #0f172a;
}

.conditions__title,
.conditions__situation,
.conditions__list {
  padding: 16px;
  border-bottom: 1px solid #0f172a;
}

.conditions__title {
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: uppercase;
}

.conditions__situation {
  font-weight: 600;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: uppercase;
}

.conditions__items {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

.conditions__item {
  display: block;
  margin-bottom: 8px;
}

.conditions__item:last-child {
  margin-bottom: 0;
}

@media (max-width: 1200px) {
  .conditions {
    padding: 30px 20px;
  }
}

@media (max-width: 900px) {
  .conditions__grid {
    grid-template-columns: 1fr 2fr;
    grid-auto-flow: row dense;
  }

  .conditions__title {
    grid-column: 1 / span 2;
    background-color: rgba(15, 23, 42, 0.05);
    grid-row: auto !important;
  }

  .conditions__situation {
    grid-column: 1;
  }

  .conditions__list {
    grid-column: 2;
  }
}

@media (max-width: 640px) {
  .conditions__grid {
    grid-template-columns: 1fr 3fr;
  }

  .conditions__title {
    font-size: 10px;
  }

  .conditions__situation {
    font-size: 11px;
  }

  .conditions__item {
    font-size: 12px;
  }
}
</style>
