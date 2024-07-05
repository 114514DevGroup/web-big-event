<script></script>

<template>
  <body>
    <v-sheet
      theme="dark"
      :elevation="9"
      :height="420"
      :width="650"
      location="center center"
      :position="'absolute'"
      class="rounded-lg"
    >
      <div class="pic"></div>
    </v-sheet>
  </body>
</template>

<style scoped>
.pic {
  width: 100%;
  height: 100%;
  <!-- background-color: #fff; -->
  overflow: hidden;
  border-radius: 10px;
}
</style>
