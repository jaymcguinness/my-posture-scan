<template>
  <q-page class="flex flex-center">

    <q-btn
      rounded
      outline
      color="primary"
    >Profile</q-btn>

    <q-btn
      rounded
      color="primary"
      @click="$router.replace('/')"
    >Logout</q-btn>
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
