<script></script>

<template>
  <body>
    <div class="main">123</div>
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
.main {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

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
