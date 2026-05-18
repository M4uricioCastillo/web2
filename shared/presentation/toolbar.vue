<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { locale } = useI18n();

const navigateToHome = () => {
  router.push('/home');
};

const navigateToApartment = () => {
  router.push('/properties/renting/new');
};

const changeLanguage = (lang) => {
  locale.value = lang;
};
</script>

<template>
  <pv-toolbar class="border-none px-4 py-3 surface-card shadow-1 flex justify-content-between align-items-center">

    <template #start>
      <div class="flex gap-2" role="group" aria-label="Language selection">
        <pv-button label="EN" size="small" :severity="locale === 'en' ? 'primary' : 'secondary'" :outlined="locale !== 'en'" @click="changeLanguage('en')" aria-label="Set language to English" />
        <pv-button label="ES" size="small" :severity="locale === 'es' ? 'primary' : 'secondary'" :outlined="locale !== 'es'" @click="changeLanguage('es')" aria-label="Set language to Spanish" />
      </div>
    </template>

    <template #center>
      <div class="flex gap-2">
        <pv-button :label="$t('toolbar.home')" text class="font-medium" @click="navigateToHome" aria-label="Go to Home" />
        <pv-button :label="$t('toolbar.Apartments')" text class="font-medium" @click="navigateToApartment" aria-label="Go to Apartment Renting" />
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2 cursor-pointer" @click="navigateToHome" aria-label="Ukio Home">
        <img src="https://logo.clearbit.com/ukio.com" alt="Ukio Logo" width="32" height="32" />
        <span class="font-bold text-xl text-primary">{{ $t('toolbar.content') }}</span>
      </div>
    </template>
  </pv-toolbar>
</template>
