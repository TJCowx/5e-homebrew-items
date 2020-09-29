<template>
  <v-app-bar color="#004d00" dark>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <img :src="logo" />
    <div class="title">
      <v-toolbar-title>5e Homebrew Items</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <v-btn color="#004d00" depressed @click="switchTheme">
      <v-icon> invert_colors </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    logo: require("../../assets/logo.svg"),
  }),
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      localStorage.setItem(
        "theme",
        this.$vuetify.theme.dark ? "dark" : "light"
      );
    },
  },
};
</script>

<style scoped>
/** For smaller screens */
@media screen and (max-width: 767px) {
  .title {
    display: none;
  }
}

/** For larger screens (landscape mobile and up) */
@media screen and (min-width: 768px) {
  .title {
    display: block;
  }
}
</style>