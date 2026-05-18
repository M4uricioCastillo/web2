<script setup>
/**
 * @summary Vista transaccional para la visualización y gestión de alquileres de departamentos
 * @author Mauricio Sebastián Castillo Yataco
 */
import { ref, onMounted, computed } from 'vue';
import { usePropertiesStore} from "@/properties/applications/properties.store.js";

const propertiesStore = usePropertiesStore();

// Control de datos y visibilidad del formulario flotante
const isPanelVisible = ref(false);
const selectedApartment = ref(null);
const rentDescription = ref('');
const startDate = ref(null);
const endDate = ref(null);
const validationMessage = ref('');

onMounted(async () => {
  await propertiesStore.fetchApartments();
});

const apartmentsList = computed(() => propertiesStore.apartments);

const openRentPanel = (apartment) => {
  selectedApartment.value = apartment;
  rentDescription.value = '';
  startDate.value = null;
  endDate.value = null;
  validationMessage.value = '';
  isPanelVisible.value = true;
};

const processRental = async () => {
  // Validación estricta impuesta por el PDF ante la ausencia de fechas
  if (!startDate.value || !endDate.value) {
    validationMessage.value = "Completing the quantity field is mandatory";
    return;
  }

  // Alerta tipo confirm solicitada por los requerimientos
  const isConfirmed = window.confirm("Are you sure you want to confirm the rent registration?");

  if (isConfirmed && selectedApartment.value) {
    const rentalPayload = {
      startDate: startDate.value.toISOString().split('T')[0],
      endDate: endDate.value.toISOString().split('T')[0],
      state: 'Completed'
    };

    const success = await propertiesStore.rentApartment(selectedApartment.value.id, rentalPayload);

    if (success) {
      isPanelVisible.value = false;
      selectedApartment.value = null;
    }
  }
};
</script>

<template>
  <div class="surface-section p-4 border-round shadow-1 max-w-7xl mx-auto mt-4">
    <h1 class="text-3xl font-bold text-900 mb-4 border-bottom-1 surface-border pb-2" aria-level="1">
      Rent Apartment
    </h1>

    <div class="grid">
      <div
          v-for="apartment in apartmentsList"
          :key="apartment.id"
          class="col-12 md:col-6 lg:col-4 p-3"
      >
        <pv-card class="h-full shadow-2 flex flex-column justify-content-between">
          <template #title>
            <span class="text-xl font-bold text-900">{{ apartment.name }}</span>
          </template>

          <template #content>
            <p class="m-0 text-600 line-height-3 mb-4">{{ apartment.description }}</p>

            <div class="flex flex-column gap-2 text-700 mb-2">
              <div class="flex align-items-center gap-2">
                <i class="pi pi-car text-primary" aria-hidden="true"></i>
                <span class="font-semibold">Parking:</span>
                <span>{{ apartment.numberParking }}</span>
              </div>
              <div class="flex align-items-center gap-2">
                <i class="pi pi-home text-primary" aria-hidden="true"></i>
                <span class="font-semibold">Bedrooms:</span>
                <span>{{ apartment.numberBedroom }}</span>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="border-top-1 surface-border pt-3 flex justify-content-between align-items-center">
              <span class="text-2xl font-bold text-green-600">${{ apartment.Price }}</span>
              <pv-button label="Rent" icon="pi pi-key" @click="openRentPanel(apartment)" aria-label="Rent apartment" />
            </div>
          </template>
        </pv-card>
      </div>
    </div>

    <pv-dialog
        v-model:visible="isPanelVisible"
        modal
        header="Process Rental"
        :style="{ width: '30vw' }"
        :breakpoints="{ '1199px': '60vw', '575px': '90vw' }"
    >
      <div class="flex flex-column gap-3 pt-2">
        <div v-if="validationMessage" class="p-3 bg-red-100 text-red-700 border-round font-bold text-sm text-center">
          {{ validationMessage }}
        </div>

        <div class="flex flex-column gap-2">
          <label for="description" class="font-semibold text-700">Description</label>
          <pv-input-text id="description" v-model="rentDescription" placeholder="Enter rental comments..." />
        </div>

        <div class="flex flex-column gap-2">
          <label for="startDate" class="font-semibold text-700">start Date</label>
          <pv-datepicker id="startDate" v-model="startDate" dateFormat="yy-mm-dd" placeholder="YYYY-MM-DD" class="w-full" />
        </div>

        <div class="flex flex-column gap-2">
          <label for="endDate" class="font-semibold text-700">end Date</label>
          <pv-datepicker id="endDate" v-model="endDate" dateFormat="yy-mm-dd" placeholder="YYYY-MM-DD" class="w-full" />
        </div>
      </div>

      <template #footer>
        <div class="flex justify-content-end gap-2 mt-3">
          <pv-button label="Cancel" icon="pi pi-times" text severity="secondary" @click="isPanelVisible = false" />
          <pv-button label="make a rent" icon="pi pi-check" @click="processRental" />
        </div>
      </template>
    </pv-dialog>
  </div>
</template>

<style scoped>
</style>