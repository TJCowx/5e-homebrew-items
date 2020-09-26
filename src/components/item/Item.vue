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
    <div class="row-container">
      <v-switch
        class="toggle-item"
        color="primary"
        label="Is Weapon"
        v-model="item.isWeapon"
      ></v-switch>
      <v-autocomplete
        color="primary"
        label="Weapon Type"
        v-model="item.weaponType"
        :items="weaponTypes"
        v-show="item.isWeapon"
      ></v-autocomplete>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data: () => ({
    item: {
      name: "",
      description: "",
      reqAttune: false,
      attuneRequirements: "",
      rarity: "",
      isWeapon: false,
      weaponType: "",
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