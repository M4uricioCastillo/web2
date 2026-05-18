<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goCities = () => {
router.push('/Cities');
};
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center mt-8">
    <i class="pi pi-exclamation-triangle text-red-500 text-6xl mb-4" aria-hidden="true"></i>
    <h1 class="text-4xl font-bold text-900 mb-2">{{ $t('notFound.title') }}</h1>

    <p class="text-xl text-600 mb-6">
      {{ $t('notFound.message', { path: route.path }) }}
    </p>

    <pv-button
        :label="$t('notFound.button')"
        icon="pi pi-home"
        size="large"
        @click="goCities"
        aria-label="Return to Cities page"
    />
  </div>
</template>

<style scoped>
</style>