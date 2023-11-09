// stores/form.js
import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => {
    return {
      form1: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  actions: {},
});
