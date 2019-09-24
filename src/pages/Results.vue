<template>
  <q-page class>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div>
        <h6 style="margin:0px;font-size:20px;">Body scan results</h6>
        <p>Here are your latest body scan results.</p>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-xs-3">
        <q-img
          basic
          src="http://www.posturebracecorrector.com/wp-content/uploads/2018/08/right-position-for-head-and-neck.jpg"
        />
      </div>
      <div class="col-xs-5">
        <p style="margin-top:25px">
          <strong>Forward neck position</strong>
          <br />1.2cm forward
        </p>
      </div>
      <div class="col-xs-4" style="font-size:110%;color:amber">
        <div style="margin-top:25px;color:green">
          <q-icon name="far fa-smile-beam"></q-icon>&nbsp;GREAT
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-xs-3">
        <q-img basic src="http://spinenevada.com/assets/images/exercise_images/neck_turn.jpg" />
      </div>
      <div class="col-xs-5">
        <p style="margin-top:25px">
          <strong>Side neck position</strong>
          <br />5.2cm left
        </p>
      </div>
      <div class="col-xs-4" style="font-size:110%;color:grey">
        <div style="margin-top:25px;color:orange">
          <q-icon name="far fa-sad-tear"></q-icon>&nbsp;NOT GREAT
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-sm q-ma-xs">
      <h6 style="margin:0px;font-size:20px;">Get motivated</h6>
      <p>Why not share your results with your friends and family so they can help you keep up the good work!</p>
      <div class="justify-center full-width">
        <q-btn rounded outline color="primary" class="justify-center">Share</q-btn>
      </div>
    </div>
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
