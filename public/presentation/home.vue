<script setup>
import {onMounted, computed } from 'vue';
import { usePropertiesStore} from "@/properties/applications/properties.store.js";
import CityCard from "@/properties/presentation/city-card.vue";

const propertiesStore = usePropertiesStore();
onMounted(async() => {
await propertiesStore.fetchCities();
await propertiesStore.fetchApartments();
});

const citiesList = computed(() => {
  return propertiesStore.cities;
})

const calculateApartmentCount = (cityId) => {
  const cityApartments = propertiesStore.apartments.filter(
      apartment => String(apartment.cityId) === String(cityId)
  );
  return cityApartments.length;
}

</script>

<template>
  <div class="surface-section p-4 border-round shadow-1 max-w-7xl mx-auto mt-4">
    <h1 class="text-4xl font-bold text-900 mb-2" aria-level="1">{{ $t('home.title') }}</h1>
    <p class="text-xl text-600 mb-6 font-medium">{{ $t('home.welcome') }}</p>

    <section aria-labelledby="cities-section-title">
      <h2 id="cities-section-title" class="text-2xl font-bold text-800 mb-4 border-bottom-1 surface-border pb-2">
        {{ $t('home.sectionTitle') }}
      </h2>

      <div class="grid">
        <div
            v-for="city in citiesList"
            :key="city.id"
            class="col-12 md:col-6 p-3"
        >
          <city-card
              :city="city"
              :apartmentCount="calculateApartmentCount(city.id)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>