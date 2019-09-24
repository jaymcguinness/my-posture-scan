<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color:white">
      <q-toolbar @click="$router.push('welcome')">
        <img src="statics/square.png" style="width:60px;" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated style="height:80px">
      <!-- <q-tabs
        v-model="tab"
        narrow-indicator
        class="text-white shadow-2"
      >-->
      <q-tabs v-model="tab">
        <q-tab name="home" icon="fas fa-home" @click="$router.push('home')" />
        <q-tab name="scan" icon="fas fa-vector-square" @click="$router.push('scan')" />

        <q-tab name="results" icon="fas fa-poll-h" @click="$router.push('results')" />
        <q-tab name="exercise" icon="fas fa-walking" @click="$router.push('exercises')" />
        <q-tab name="profile" icon="fas fa-user-md" @click="$router.push('profile')" />
        <!-- removed label attr from above -->
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
