<template>
  <q-page>
    <q-video
      src="https://www.youtube.com/embed/PP4DtSOEUMY?controls=0&amp;start=35&amp;autoplay=true"
    />

    <div class="row q-col-gutter-sm q-ma-xs">
      <div>
        <h6 style="margin:0px;font-size:20px;">Your exercises</h6>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-xs" v-for="(image,index) in images" :key="index">
      <div class="col-xs-4">
        <q-img :src="image" basic></q-img>
      </div>
      <div class="col-xs-5">
        <p style="margin-top:25px">Title of exercise</p>
      </div>
      <div class="col-xs-3" style="font-size:100%;color:grey">
        <div style="margin-top:25px">
          <q-icon name="far fa-clock"></q-icon>&nbsp;10 mins
        </div>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
img {
  -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
  -webkit-filter: brightness(10%); /* Safari 6.0 - 9.0 */
  filter: grayscale(50%);
  width: 200px;
  height: 140px;
  border-radius: 30px;
  filter: brightness(10%);
}

.q-card-section {
  padding: 0px;
}
</style>
<script>
export default {
  name: "Exercises",
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
