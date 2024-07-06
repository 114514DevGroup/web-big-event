<template>
  <v-layout ref="app" class="rounded rounded-md">
    <v-app-bar color="grey-lighten-2" name="app-bar">
      <v-btn class="mx-auto" @click="print('app-bar')">Get data</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      color="grey-darken-2"
      location="end"
      name="drawer"
      permanent
    >
      <div class="d-flex justify-center align-center h-100">
        <v-btn @click="print('drawer')">Get data</v-btn>
      </div>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <div class="pic" style="background-color: aqua; position: absolute"></div>
    </v-main>

    <v-footer name="footer" app>
      <v-btn class="mx-auto" variant="text" @click="print('footer')">
        Get data
      </v-btn>
    </v-footer>
  </v-layout>
</template>
<script>
export default {
  methods: {
    print(key) {
      alert(JSON.stringify(this.$refs.app.getLayoutItem(key), null, 2))
    }
  }
}
</script>

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

<style scoped></style>
