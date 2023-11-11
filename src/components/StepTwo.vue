<script setup>
import { usePlansStore } from '@/stores/plans';
import StepLayout from '@components/StepLayout.vue';

const plansStore = usePlansStore();

const pickPlan = function (newPlan) {
    plansStore.setPlan(newPlan);
}
const pickPeriod = function (newPeriod) {
    plansStore.setPeriod(newPeriod);
}
const togglePeriod = function (newPeriod) {
    plansStore.togglePeriod(newPeriod);
}
</script>

<template>
    <StepLayout :step="'two'" :title="`Select your plan`" :text="`You have the option of monthly or yearly billing.`">
        <div class="plans">
            <div v-for="(item, index) in plansStore.options" :key="item + '-' + index"
                :class="`plan ${plansStore.selectedPlan === item ? 'plan--selected' : ''}`" @click="pickPlan(item)">
                <div class="plan__icon">
                    <img :src="plansStore[item].icon" :alt="plansStore[item].title + ' plan'">
                </div>
                <div class="plan__content">
                    <h3 class="plan__title">
                        {{ plansStore[item].title }}
                    </h3>
                    <p class="plan__price">
                        ${{ plansStore[item][`${plansStore.selectedPeriod}Price`] }}/{{ (plansStore.selectedPeriod
                            === 'monthly' ? 'mo' :
                            'yr') }}
                    </p>
                    <p v-if="plansStore.selectedPeriod === 'yearly'" class="plan__bonus">
                        {{ plansStore[item].yearlyBonus }}
                    </p>
                </div>
            </div>
        </div>

        <div class="periods-toggle">
            <span :class="`period-option ${plansStore.selectedPeriod === 'monthly' ? 'period-option--selected' : ''}`"
                @click="pickPeriod('monthly')">Monthly</span>
            <span
                :class="`periods-radio ${plansStore.selectedPeriod === 'monthly' ? 'periods-radio--left' : 'periods-radio--right'}`"
                @click="togglePeriod(plansStore.selectedPeriod)"></span>
            <span :class="`period-option ${plansStore.selectedPeriod === 'yearly' ? 'period-option--selected' : ''}`"
                @click="pickPeriod('yearly')">Yearly</span>
        </div>
    </StepLayout>
</template>
