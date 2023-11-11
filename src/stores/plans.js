// stores/plans.js
import { defineStore } from "pinia";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";

export const usePlansStore = defineStore("plans", {
  state: () => {
    return {
      periods: ["monthly", "yearly"],
      selectedPeriod: "monthly", //"monthly",
      selectedPlan: "arcade", //"arcade",
      options: ["arcade", "advanced", "pro"],
      arcade: {
        icon: arcadeIcon,
        title: "Arcade",
        monthlyPrice: 9,
        yearlyPrice: 90,
        monthlyBonus: "",
        yearlyBonus: "2 months free",
      },
      advanced: {
        icon: advancedIcon,
        title: "Advanced",
        monthlyPrice: 12,
        yearlyPrice: 120,
        monthlyBonus: "",
        yearlyBonus: "2 months free",
      },
      pro: {
        icon: proIcon,
        title: "Pro",
        monthlyPrice: 15,
        yearlyPrice: 150,
        monthlyBonus: "",
        yearlyBonus: "2 months free",
      },
    };
  },
  actions: {
    setPlan(value) {
      this.selectedPlan = value;
    },
    setPeriod(value) {
      this.selectedPeriod = value;
    },
    togglePeriod(value) {
      this.selectedPeriod = value === "monthly" ? "yearly" : "monthly";
    },
  },
});
