<template>
  <DefaultLayout>
    <div class="page">
      <ProductInformation />
      <ReturnConditions />
    </div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/default.vue'
import ProductInformation from '@/components/ProductInformation/index.vue'
import ReturnConditions from '@/components/ReturnConditions/index.vue'
</script>

<style>
.page {
  width: 100%;
  margin: 0 auto;
}
</style>