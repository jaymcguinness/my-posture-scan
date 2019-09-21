<template>
  <q-page class="flex flex-center">
    <q-input label="Height" />
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
    />
    <q-btn rounded outline color="primary">Next</q-btn>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      model: "one"
    };
  }
};
</script>
