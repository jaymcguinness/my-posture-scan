<template>
  <q-page
    class="flex column flex-center"
    style="width:100%"
  >
    <div>
      <img
        src="statics/square.png"
        width="50%"
      />
    </div>

    <div>
      <q-input label="Name"></q-input>
    </div>
    <div>
      <q-input label="Height"></q-input>
    </div>
    <a @click="$router.go(-1)">BACK</a>
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
