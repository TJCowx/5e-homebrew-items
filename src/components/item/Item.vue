<template>
  <div>
    <v-text-field label="Name" v-model="item.name" />
    <v-text-field label="Description" v-model="item.description" />
    <v-switch label="Require Attunement" v-model="item.reqAttune"></v-switch>
    <v-text-field
      label="Attune Requirement"
      v-model="item.attuneRequirements"
    />
    <v-select label="Rarity" v-model="item.rarity" :items="rarities"></v-select>
    <v-switch label="Is Weapon" v-model="item.isWeapon"></v-switch>
    <v-autocomplete
      label="Weapon Type"
      v-model="item.weaponType"
      :items="weaponTypes"
    ></v-autocomplete>
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

<style>
</style>