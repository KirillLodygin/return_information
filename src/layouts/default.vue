<template>
  <div class="layout">
    <header class="layout__header">
      <Header />
    </header>

    <main class="layout__content">
      <slot />
    </main>

    <footer class="layout__footer">
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__header {
  top: 0;
  z-index: 100;
  flex-shrink: 0;
}

.layout__content {
  flex-grow: 1;
}

.layout__footer {
  flex-shrink: 0;
}
</style>