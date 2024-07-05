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
      <div class="pic">
        <div class="submit">
          <div class="QR"></div>
        </div>
      </div>
    </v-sheet>
  </body>
</template>

<style scoped>
.pic {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
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
  top: 50px;
  left: calc(50% - 60px);
  background-color: aquamarine;
}
</style>
