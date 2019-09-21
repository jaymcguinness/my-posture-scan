<template>
  <q-page
    class="flex flex-center"
    style="width:100%"
  >

    <img
      src="statics/square.png"
      width="50%"
    />
    <video
      autoplay
      preload="auto"
      playsinline
      webkit-playsinline
      height="200px"
      width="100%"
      loop
    >
      <source src="statics/intro.mp4"></video>
    <div class="row">
      <q-btn
        rounded
        color="primary"
        size="12pt"
        style="width:80vw"
        @click="$router.push('signup')"
      >Sign up</q-btn>
    </div>
    <div class="row">
      <q-btn
        rounded
        outline
        color="primary"
        size="12pt"
        style="width:80vw"
        @click="$router.push('home')"
      >I have an account</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      model: "one"
    };
  }
};
</script>
