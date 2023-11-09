// stores/steps.js
import { defineStore } from "pinia";

export const useStepsStore = defineStore("steps", {
  state: () => {
    return {
      currentStep: 1,
      maxStep: 4,
      currentStepCanSubmit: false,
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setStep(value) {
      this.currentStep = value;
    },
    incrementStep(value) {
      this.currentStep += 1;
    },
    decrementStep(value) {
      this.currentStep -= 1;
    },
  },
});
