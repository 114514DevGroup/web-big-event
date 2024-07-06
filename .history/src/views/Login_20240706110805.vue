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
    <v-app-bar
      scroll-threshold="0"
      title="PiliPala"
      :theme="theme"
      style="opacity: 0.6"
    >
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
      <v-sheet
        elevation="18"
        :height="420"
        :width="660"
        :rounded="rounded"
        class="rounded-lg pa-4"
        :theme="theme"
        position="relative"
        style="overflow: hidden"
      >
        <div class="submit"></div>
      </v-sheet>
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
}

.submit {
  width: 330px;
  height: 420px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: aqua;
}
</style>
