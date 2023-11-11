// stores/steps.js
import { defineStore } from "pinia";

export const useStepsStore = defineStore("steps", {
  state: () => {
    return {
      currentStep: 4,
      maxStep: 4,
      currentStepCanSubmit: false,
      showSuccess: false,
    };
  },
  actions: {
    setStep(value) {
      this.showSuccess = false;
      this.currentStep = value;
    },
    incrementStep() {
      this.currentStep += 1;
      if (this.currentStep == 5) {
        this.currentStep = this.maxStep;
        this.showSuccess = true;
      }
    },
    decrementStep(value) {
      this.showSuccess = false;
      this.currentStep -= 1;
    },
  },
});
