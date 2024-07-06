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
    <!-- 覆盖整个浏览器的背景图片 -->
    <v-img
      src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      max-width="100%"
      max-height="100%"
      contain
    ></v-img>

    <v-app-bar title="Application bar"></v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <v-btn>Hello World</v-btn>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
