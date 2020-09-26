<template>
  <v-app-bar color="#004d00" dark>
    <img :src="logo" /> 5e Homebrew Items
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      logo: require("../../assets/logo.svg"),
    };
  },
};
</script>

<style scoped>
</style>