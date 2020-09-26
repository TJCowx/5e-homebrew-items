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
    <StatBlock :item="item" />
  </div>
</template>

<script>
import StatBlock from "./stat-block/StatBlock.vue";
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
  watch: {
    "item.itemType": function (newVal, oldVal) {
      // When the item type changes, we want to make sure the subtype gets cleared out
      if (newVal != oldVal) {
        this.item.itemSubType = "";
      }
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
</style>