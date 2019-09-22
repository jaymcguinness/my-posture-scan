<template>
  <q-page class="flex flex-center">
    {{o}}

    <q-btn
      rounded
      outline
      color="primary"
    >Results</q-btn>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  mounted() {
    // Promise.all([
    //   navigation.permissions.request({ name: "accelerometer" }),
    //   navigation.permissions.request({ name: "gyroscope" })
    // ]).then(results => {
    //   //  ...
    // });

    window.addEventListener("deviceorientation", this.deviceOrientation, true);
  },
  data() {
    return {
      o: { alpha: 0, beta: 0, gamma: 0 }
    };
  },
  methods: {
    deviceOrientation(e) {
      this.o = e;
    }
  }
};
</script>
