<template>
  <div id="app">
    <v-app>
      <div>
        <AppBar />
        <Item class="item-container" />
      </div>
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/layout/AppBar.vue";
import Item from "./components/item/Item.vue";

export default {
  name: "App",
  components: {
    AppBar,
    Item,
  },
};
</script>

<style>
.item-container {
  width: 80%;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
}
</style>
