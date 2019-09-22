<template>
  <q-page class="flex flex-center">
    <q-card flat v-for="(image,index) in images" :key="index">
      <q-card-section>
        <img :src="image" />
      </q-card-section>
      <q-card-section>ssss</q-card-section>
    </q-card>
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

    <!-- <q-btn rounded outline color="primary">Next</q-btn> -->
  </q-page>
</template>
<style scoped>
img {
  -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
  filter: grayscale(50%);
  width: 200px;
  height: 140px;
  border-radius: 20px;
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
