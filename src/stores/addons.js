// stores/addons.js
import { defineStore } from "pinia";

export const useAddonsStore = defineStore("addons", {
  state: () => {
    return {
      options: ["onlineService", "largeStorage", "customizableProfile"],
      tree: {
        onlineService: {
          name: "Online service",
          description: "Access to multiplayer games",
          monthlyPrice: 1,
          yearlyPrice: 10,
          selected: true,
        },
        largeStorage: {
          name: "Larger storage",
          description: "Extra 1TB of cloud save",
          monthlyPrice: 2,
          yearlyPrice: 20,
          selected: true,
        },
        customizableProfile: {
          name: "Customizable profile",
          description: "Custom theme on your profile",
          monthlyPrice: 2,
          yearlyPrice: 20,
          selected: false,
        },
      },
    };
  },
  actions: {
    toggleAddon(value) {
      this.tree[value].selected = !this.tree[value].selected;
    },
  },
});
