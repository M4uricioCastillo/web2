<script setup>
/**
 * @summary Componente para el cambio de idioma global de la aplicación usando SelectButton
 * @author Mauricio Sebastián Castillo Yataco
 */
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const languageOptions = ref([
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' }
]);

const currentLanguage = ref(locale.value);

watch(currentLanguage, (newLang) => {
  if (newLang) {
    locale.value = newLang;
  }
});
</script>

<template>
  <div class="flex align-items-center" role="group" aria-label="Language selection">
    <pv-selectbutton
        v-model="currentLanguage"
        :options="languageOptions"
        optionLabel="label"
        optionValue="value"
        :allowEmpty="false"
        aria-label="Select Language"
    />
  </div>
</template>

<style scoped>
</style>