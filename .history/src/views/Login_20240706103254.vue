<!-- <script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script> -->

<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 0
  })
}
</script>

<template>
  <v-window v-model="onboarding" show-arrows="hover">
    <v-window-item v-for="n in length" :key="`card-${n}`">
      <v-card
        class="d-flex align-center justify-center ma-2"
        elevation="2"
        height="200"
      >
        <h1 class="text-h2">Slide {{ n }}</h1>
      </v-card>
    </v-window-item>
  </v-window>
  <!-- <v-responsive class="border rounded" max-height="300">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer></v-spacer>
        <v-btn
          :prepend-icon="
            theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>
    </v-app>
  </v-responsive> -->
</template>

<style scoped></style>
