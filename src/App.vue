<template>
  <div id="app">
    <v-app>
      <div>
        <AppBar />
        <div>Content</div>
      </div>
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/layout/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>

<style>
</style>
