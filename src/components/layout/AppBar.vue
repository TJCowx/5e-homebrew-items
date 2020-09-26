<template>
  <v-app-bar color="#004d00" dark>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <img :src="logo" /> 5e Homebrew Items
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    logo: require("../../assets/logo.svg"),
  }),
};
</script>

<style scoped>
</style>