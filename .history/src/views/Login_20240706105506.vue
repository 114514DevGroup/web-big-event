<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<!-- <template>
  <v-responsive class="border rounded" max-height="300">
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
  </v-responsive>
</template> -->

<template>
  <v-layout class="rounded rounded-md" :theme="theme">
    <v-app-bar scroll-threshold="0" title="PiliPala" :theme="theme">
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

    <v-main
      :theme="theme"
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <v-sheet :elevation="15" :height="200" :width="200"></v-sheet>
    </v-main>
  </v-layout>
</template>

<style>
body {
  background-image: url('../components/img/background.png');
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
}
</style>
