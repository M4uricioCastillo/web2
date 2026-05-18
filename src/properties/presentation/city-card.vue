<script setup>
/**
 * @summary Componente de tarjeta para mostrar la información de una ciudad de Ukio
 * @author Mauricio Sebastián Castillo Yataco
 */
import { defineProps, computed } from 'vue';

const props = defineProps({
  city: {
    type: Object,
    required: true
  },
  apartmentCount: {
    type: Number,
    required: true
  }
});

/**
 * Función requerida por la rúbrica para formatear números
 */
const formattedPopulation = computed(() => {
  return new Intl.NumberFormat('en-US').format(props.city.population);
});
</script>

<template>
  <pv-card class="h-full shadow-2" aria-label="City Summary Card">

    <template #title>
      <span class="text-2xl font-bold">{{ city.cityName }}</span>
    </template>

    <template #content>
      <p class="m-0 text-700 line-height-3 mb-3">
        {{ city.description }}
      </p>
      <div class="flex align-items-center gap-2">
        <i class="pi pi-users text-primary"></i>
        <span class="font-semibold text-600">Population:</span>
        <span class="text-800">{{ formattedPopulation }}</span>
      </div>
    </template>

    <template #footer>
      <div class="border-top-1 surface-border pt-3 mt-2 flex justify-content-between align-items-center">
        <span class="text-sm font-semibold text-500 uppercase">Quantity of Aparment</span>
        <span class="text-xl font-bold text-primary">{{ apartmentCount }}</span>
      </div>
    </template>

  </pv-card>
</template>

<style scoped>
</style>