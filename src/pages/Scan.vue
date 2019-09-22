<template>
  <q-page class="flex flex-center">
    <div
      v-for="(f,index) in frames"
      :key="index"
    >
      <img :src="frames[index].fullPath" />

      {{frames[index].fullPath}}
    </div>
    <q-btn
      rounded
      outline
      color="primary"
      @click="capture"
    >Scanner</q-btn>

    <q-btn @click="stop">Stop</q-btn>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      frames: []
    };
  },
  mounted() {
    //   alert("mounted");
  },
  methods: {
    capture() {
      let options = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: CameraPreview.CAMERA_DIRECTION.FRONT,
        toBack: true,
        tapPhoto: true,
        tapFocus: false,
        previewDrag: false,
        storeToFile: false,
        disableExifHeaderStripping: false
      };

      CameraPreview.startCamera(options);
    },
    stop() {
      CameraPreview.stopCamera();
    }
  }
};
</script>
