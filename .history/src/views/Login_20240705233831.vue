<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app :theme="theme">
      <v-sheet
        :elevation="9"
        :height="420"
        :width="650"
        location="center center"
        :position="'absolute'"
        class="rounded-lg"
      >
        <div class="pic">
          <div class="submit">
            <div class="QR"></div>
          </div>
        </div>
      </v-sheet>
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
</template>

<style scoped>
.pic {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  background-image: url('../components/img/background.png');
  background-size: cover;
  background-position: left top;
  overflow: hidden;
}

.submit {
  width: 325px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  right: 0;
  opacity: 0.8;
}

.QR {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 80px;
  left: calc(50% - 55px);
  background-color: aquamarine;
  opacity: 1;
}
</style>
