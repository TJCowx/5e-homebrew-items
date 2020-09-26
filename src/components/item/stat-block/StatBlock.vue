<template>
  <div class="stat-block-wrapper">
    <div id="image-container">
      <StatBlockBorder />
      <div class="content-container">
        <div class="name accent-color">{{ item.name }}</div>
        <span class="subtext">
          {{ item.itemType }}
          <span v-if="item.itemSubType.length > 0">
            ({{ item.itemSubType }})
          </span>
          , {{ item.rarity }}
          <span v-if="item.reqAttune">
            (requires attunement<span v-if="item.attuneRequirements.length > 0">
              {{ item.attuneRequirements }}</span
            >)
          </span>
        </span>
        <hr class="line-break" />

        <markdown-it-vue-light
          class="markdown-body description"
          :content="item.description"
        />
      </div>
      <StatBlockBorder />
    </div>
  </div>
</template>

<script>
import StatBlockBorder from "./StatBlockBorder.vue";
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import "markdown-it-vue/dist/markdown-it-vue-light.css";

export default {
  name: "StatBlock",
  props: ["item"],
  components: { StatBlockBorder, MarkdownItVueLight },
};
</script>

<style>
.stat-block-wrapper {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.content-container {
  background-color: #fdf1dc;
  margin: 0 4px;
  padding: 16px;
}

.accent-color {
  color: #58170d;
}

.name {
  font-size: 24px;
  font-variant: small-caps;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1;
}

.subtext {
  font-size: 12px;
  font-style: italic;
}

.line-break {
  border: 1px solid #99351f;
}

.description {
  white-space: pre-wrap;
  padding-top: 8px;
  font-size: 14px;
  line-height: 1;
  /** The markdown editor will change the font if important isn't on it */
  font-family: inherit;
}

/** Fixes large amounts of whitespace added by the markdown editor */
.markdown-body::after,
.markdown-body::before {
  display: none;
}

/** This is required to fix the large amount of whitespace gets added before a list */
.markdown-body p,
ul,
ol {
  margin-top: -30px !important;
}
</style>