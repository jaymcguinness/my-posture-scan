<template>
  <q-page class="flex column flex-center" style="width:100%;background-color:#D92176;color:white">
    <h6>SIGN UP</h6>

    <q-btn color="blue">Sign up with Facebook</q-btn>
    <q-btn color="red">Sign up with Google</q-btn>
    <q-btn color="orange">Sign up with Instagram</q-btn>
    <q-btn color="grey">Sign up with Apple</q-btn>OR
    <q-input label="First name"></q-input>
    <q-input label="Surname"></q-input>
    <q-input label="Email"></q-input>
    <q-input label="Password"></q-input>

    <q-checkbox>Terms</q-checkbox>

    <q-input label="Height"></q-input>

    <a @click="$router.go(-1)">BACK</a>
  </q-page>
</template>
<style scoped>
.q-input {
  background-color: white;
  padding: 10px;
  width: 100%;
}
</style>
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
