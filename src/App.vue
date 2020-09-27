<template>
  <div id="app">
    <v-app>
      <div>
        <AppBar v-on:toggle-drawer="updateDrawer" />
        <v-navigation-drawer v-model="openDrawer" absolute temporary>
          <NavList />
          <v-footer absolute> Version {{ version }} </v-footer>
        </v-navigation-drawer>
        <Item class="item-container" />
      </div>
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/layout/AppBar.vue";
import Item from "./components/item/Item.vue";
import NavList from "./components/NavList.vue";
import { version } from "../package.json";

export default {
  name: "App",
  components: {
    AppBar,
    Item,
    NavList,
  },
  data: () => ({
    openDrawer: false,
    version: version,
  }),
  methods: {
    updateDrawer() {
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>

<style>
@media screen and (max-width: 767px) {
  .item-container {
    width: 90%;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 768px) {
  .item-container {
    width: 80%;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
