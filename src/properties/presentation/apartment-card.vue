<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  country: {
    type: Object,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const onRentClick = () => {
  emit('rentClick', props.apartment);
};

</script>
<template>
<pv-card class="h-full shadow-2" aria-label="Apartment Renting Card">
<template #title>
  <span class="text-xl font-bold text-900">{{ apartment.name }}</span>
</template>

<template #content>
  <p class="m-0 text-600 line-height-3 mb-3">{{ apartment.description }}</p>

  <div class="flex flex-column gap-2 text-700">
    <div class="flex align-items-center gap-2">
      <i class="pi pi-car text-primary" aria-hidden="true"></i>
      <span class="font-semibold">Parking:</span>
      <span>{{ apartment.numberParking }}</span>
    </div>
    <div class="flex align-items-center gap-2">
      <i class="pi pi-th-large text-primary" aria-hidden="true"></i>
      <span class="font-semibold">Bedrooms:</span>
      <span>{{ apartment.numberBedroom }}</span>
    </div>
  </div>
</template>

<template #footer>
  <div class="border-top-1 surface-border pt-3 mt-2 flex justify-content-between align-items-center">
    <span class="text-2xl font-bold text-green-600">${{ apartment.Price }}</span>
    <pv-button label="Rent" icon="pi pi-key" @click="onRentClick" aria-label="Rent this apartment" />
  </div>
</template>
</pv-card>
</template>

<style scoped>
</style>
