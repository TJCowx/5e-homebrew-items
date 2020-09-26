<template>
  <div class="stat-block-wrapper">
    <StatBlockBorder />
    <div class="content-container">
      {{ item.name }}
    </div>
    <StatBlockBorder />
  </div>
</template>

<script>
import StatBlockBorder from "./StatBlockBorder.vue";
export default {
  name: "StatBlock",
  props: ["item"],
  components: { StatBlockBorder },
};
</script>

<style scoped>
.stat-block-wrapper {
  white-space: "pre-wrap";
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.content-container {
  background-color: #fdf1dc;
  margin: 0 4px;
  padding: 16px;
}
</style>