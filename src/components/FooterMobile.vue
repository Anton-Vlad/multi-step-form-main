<script setup>
import { useFormStore } from '@/stores/form';
import { useStepsStore } from '@/stores/steps';
import { usePlansStore } from '@/stores/plans';
import { computed } from 'vue';

const phoneNumberRegex = /^\+\d{1,3} \d{3} \d{3} \d{3}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const form1 = useFormStore();
const steps = useStepsStore();
const plans = usePlansStore();

const onStepSubmit = function ($event) {
    steps.incrementStep();
}
const goBackStep = function ($event) {
    steps.decrementStep();
}

const canSubmit = computed(() => {
    if (steps.currentStep === 1) {
        if (form1.name?.length === 0) {
            return false;
        }
        if (form1.email?.length === 0 || !emailRegex.test(form1.email)) {
            return false;
        }
        if (form1.phone?.length === 0 || !phoneNumberRegex.test(form1.phone)) {
            return false;
        }
    }
    if (steps.currentStep === 2) {
        if (!plans.options.includes(plans.selectedPlan) || !plans.periods.includes(plans.selectedPeriod)) {
            return false;
        }
    }

    return true;
})
</script>

<template>
    <div :class="{ 'form-footer': true, 'form-footer--mobile': true }">
        <button v-if="steps.currentStep > 1" type="button" class="btn btn-stipped form-footer__back" @click="goBackStep()">
            Go Back
        </button>
        <button type="button" :class="`btn ${steps.currentStep === 4 ? 'btn-secondary' : 'btn-primary'}`"
            :disabled="!canSubmit" @click="onStepSubmit">
            {{ (steps.currentStep === 4 ? 'Confirm' : 'Next Step') }}
        </button>
    </div>
</template>
