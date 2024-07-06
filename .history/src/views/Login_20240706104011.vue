<!-- <script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script> -->

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
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <!-- 背景图片 -->

      <img src="https://picsum.photos/id/237/1000/600" alt="background" />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
