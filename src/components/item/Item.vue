<template>
  <div>
    <div class="row-container">
      <v-text-field
        class="basic-input"
        color="primary"
        label="Name"
        v-model="item.name"
        :rules="reqRules"
      />
      <v-select
        class="basic-input"
        color="primary"
        label="Item Type"
        v-model="item.itemType"
        @change="changeItemType"
        :items="itemTypes"
        :rules="reqRules"
      ></v-select>
      <v-select
        class="basic-input"
        color="primary"
        label="Rarity"
        v-model="item.rarity"
        :items="rarities"
        :rules="reqRules"
      ></v-select>
    </div>
    <v-textarea
      color="primary"
      label="Description"
      v-model="item.description"
      :hint="'Markdown Syntax: **Bold**, ~~Strikethrough~~, *Italics*, > Quote, - Bullet List'"
      persistent-hint
      :rules="reqRules"
      :rows="1"
    />
    <div class="row-container">
      <v-switch
        class="toggle-item"
        color="primary"
        label="Require Attunement"
        v-model="item.reqAttune"
      ></v-switch>
      <v-text-field
        color="primary"
        label="Attune Requirement"
        hint="Any additional requirements for attunement"
        persistent-hint
        v-model="item.attuneRequirements"
        v-show="item.reqAttune"
      />
    </div>
    <v-autocomplete
      color="primary"
      label="Weapon Type"
      v-model="item.itemSubType"
      :items="weaponTypes"
      v-show="item.itemType === 'Weapon'"
    ></v-autocomplete>
    <v-autocomplete
      color="primary"
      label="Armour Type"
      v-model="item.itemSubType"
      :items="armourTypes"
      v-show="item.itemType === 'Armour'"
    ></v-autocomplete>
    <div class="action-container">
      <div class="actions-left">
        <v-btn color="primary" @click="loadExample" dark>Load Example</v-btn>
      </div>
      <div class="actions-right">
        <v-btn color="primary" @click="importConfig" dark>Import</v-btn>
        <input
          ref="uploader"
          style="display: none"
          type="file"
          accept="application/JSON"
          @change="onFileUpload"
        />
        <v-btn
          color="primary"
          style="margin-left: 8px"
          @click="exportConfig"
          dark
          >Export</v-btn
        >
        <v-btn
          color="primary"
          style="margin-left: 8px"
          @click="exportAsImage"
          dark
          >Save As Image</v-btn
        >
      </div>
    </div>
    <StatBlock id="statBlock" ref="statBlock" :item="item" />
  </div>
</template>

<script>
import StatBlock from "./stat-block/StatBlock.vue";
import html2canvas from "html2canvas";

export default {
  name: "Item",
  components: { StatBlock },
  data: () => ({
    item: {
      name: "",
      description: "",
      reqAttune: false,
      attuneRequirements: "",
      rarity: "",
      itemType: "",
      itemSubType: "",
    },
    reqRules: [(value) => !!value || "Required"],
    rarities: [
      "Common",
      "Uncommon",
      "Rare",
      "Very Rare",
      "Legendary",
      "Artifact",
    ],
    itemTypes: ["Wonderous", "Armour", "Weapon"],
    armourTypes: [
      "Padded",
      "Leather",
      "Studded Leather",
      "Hide",
      "Chain Shirt",
      "Scale Mail",
      "Breastplate",
      "Half Plate",
      "Ring Mail",
      "Chain Mail",
      "Splint",
      "Plate",
      "Shield",
    ],
    weaponTypes: [
      "Club",
      "Dagger",
      "Greatclub",
      "Handaxe",
      "Javelin",
      "Light Hammer",
      "Mace",
      "Quarterstaff",
      "Sickle",
      "Spear",
      "Crossbow, Light",
      "Dart",
      "Shortbow",
      "Sling",
      "Battleaxe",
      "Flail",
      "Glaive",
      "Greataxe",
      "Greatsword",
      "Halberd",
      "Lance",
      "Longsword",
      "Maul",
      "Morningstar",
      "Pike",
      "Rapier",
      "Scimitar",
      "Shortsword",
      "Trident",
      "War Pick",
      "Warhammer",
      "Whip",
      "Blowgun",
      "Crossbow, hand",
      "Crossbow, heavy",
      "Longbow",
      "Net",
    ],
  }),
  methods: {
    /** When the item type changes, the subtype needs to clear */
    changeItemType() {
      this.itemSubType = "";
    },
    /** Exports the item config into a json format */
    exportConfig() {
      const fileName =
        this.item.name != null
          ? `${encodeURIComponent(this.item.name)}.json`
          : "no_name.json";

      // Setup the blob for download
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(this.item)], {
        type: "application/json;charset=utf-8;",
      });

      element.href = URL.createObjectURL(file);
      element.download = fileName;
      document.body.appendChild(element);
      element.click();
    },
    /** Imports a previously exported configuration */
    importConfig() {
      this.$refs.uploader.click();
    },
    /** Handles uploading a file and putting it in the item object */
    onFileUpload(e) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        try {
          this.item = JSON.parse(e.target.result);
        } catch (err) {
          alert("Error Parsing File");
          console.error(err);
        }
      };

      fileReader.readAsText(e.target.files[0]);
    },
    /** Loads an example for the end user */
    loadExample() {
      this.item = {
        name: "Flame Tongue",
        reqAttune: true,
        itemType: "Weapon",
        attuneRequirements: "",
        rarity: "Rare",
        description:
          "You can use a bonus action to speak this magic sword's " +
          "command word, causing flames to erupt from the blade. These flames " +
          "shed bright light in a 40-foot radius and dim light for an " +
          "additional 40 feet. While the sword is ablaze, it deals an extra " +
          "2d6 fire damage to any target it hits. The flames last until you " +
          "use a bonus action to speak the command word again or until you " +
          "drop or sheathe the sword.",
      };

      this.item.itemSubType = "Rapier";
    },
    exportAsImage() {
      const el = document.querySelector("#image-container");
      html2canvas(el, {
        backgroundColor: null,
        width: el.clientWidth,
        height: el.clientHeight,
        scrollX: 0,
        scrollY: 0,
      }).then((canvas) => {
        const fileName = `${this.item.name}.png`;
        const uri = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");

        if (typeof link.download === "string") {
          link.href = uri;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(uri);
        }
      });
    },
  },
};
</script>

<style scoped>
.row-container {
  display: flex;
}
.row-container > * {
  flex: 1;
}
.row-container > *:not(:first-child) {
  margin-left: 8px;
}
.row-container > *:not(:last-child) {
  margin-right: 8px;
}

.toggle-item {
  max-width: 30%;
}

.action-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
}
.actions-left {
  display: flex;
  justify-content: flex-start;
}
.actions-right {
  display: flex;
  justify-content: flex-end;
}
</style>