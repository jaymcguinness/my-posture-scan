<template>
  <q-page>
    <q-video
      style="height:30vh"
      src="https://www.youtube.com/embed/PP4DtSOEUMY?controls=0&amp;start=35&amp;autoplay=true"
    />

    <div class="row q-col-gutter-sm q-ma-xs">
      <div>
        <h6 style="margin:0px;font-size:20px;">More workouts</h6>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-xs-6" v-for="(image,index) in images" :key="index">
        <q-card class="my-card">
          <q-img :src="image">
            <div
              class="absolute-full text-subtitle2 flex flex-center"
              style="font-size:14px;color:#fff;font-weight:bold;background:rgba(0,0,0,0.5)"
            >
              <div class="absolute-bottom" style="text-align:center">EXERCISE NAME</div>
            </div>
          </q-img>
        </q-card>
      </div>
      <!-- <q-input label="Height" />
    <q-btn-toggle
      v-model="model"
      class="my-custom-toggle"
      no-caps
      rounded
      unelevated
      toggle-color="primary"
      color="white"
      text-color="primary"
      :options="[
          {label: 'cm', value: 'one'},
          {label: 'ft & inches', value: 'two'}
        ]"
      />-->
    </div>
    <!-- <q-btn rounded outline color="primary">Next</q-btn> -->
  </q-page>
</template>
<style scoped>
img {
  width: 200px;
  height: 140px;
  border-radius: 30px;
  opacity: 0.5 !important;
  background-color: black;
}

.q-card-section {
  padding: 0px;
}
</style>
<script>
export default {
  name: "PageIndex",
  data() {
    return {
      images: [
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-7/posture_exercises-1296x728-body2.jpg?w=1155&h=1528",
        "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-7/posture_exercises-1296x728-body8.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/runners-calf-stretch-on-wall-1568388199.jpg?resize=480:*"
      ]
    };
  }
};
</script>
