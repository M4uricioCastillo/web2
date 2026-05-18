<script setup>
import Toolbar from '/shared/presentation/toolbar.vue';
</script>

<template>
  <div class="layout-wrapper">
    <toolbar />

    <main class="p-4 m-0">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>