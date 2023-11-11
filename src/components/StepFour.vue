<script setup>
import { computed } from 'vue'
import { usePlansStore } from '@/stores/plans';
import { useAddonsStore } from '@/stores/addons';
import StepLayout from '@components/StepLayout.vue';

const addonsStore = useAddonsStore();
const plansStore = usePlansStore();

const selectedAddOns = computed(() => {
    return Object.keys(addonsStore.tree).filter(x => addonsStore.tree[x].selected);
});
const totalAmount = computed(() => {
    let total = plansStore[plansStore.selectedPlan][`${plansStore.selectedPeriod}Price`];

    selectedAddOns.value.forEach(addOn => {
        total += addonsStore.tree[addOn][`${plansStore.selectedPeriod}Price`]
    });

    return total;
})

</script>
<template>
    <StepLayout :step="'four'" :title="`Finishing up`" :text="`Double-check everything looks OK before confirming.`">
        <div class="preview-plan">
            <div class="preview-plan-selected preview-plan__item">
                <div class="preview-plan__item-content">
                    <h3 class="preview-plan__item-title">
                        {{ plansStore[plansStore.selectedPlan].title }} <span>({{ plansStore.selectedPeriod }})</span>
                    </h3>
                    <a href="#" class="app-link">
                        Change
                    </a>
                </div>
                <div class="preview-plan__item-price">
                    ${{ plansStore[plansStore.selectedPlan][`${plansStore.selectedPeriod}Price`] }}/{{
                        (plansStore.selectedPeriod
                            === 'monthly' ? 'mo' :
                            'yr') }}
                </div>
            </div>
            <div v-for="(item) in selectedAddOns" :key="item + '-selected-addon'" class="preview-plan__item">
                <div class="preview-plan__item-content">
                    <p class="preview-plan__item-text">
                        {{ addonsStore.tree[item].name }}
                    </p>
                </div>
                <div class="preview-plan__item-price">
                    +${{ addonsStore.tree[item][`${plansStore.selectedPeriod}Price`] }}/{{
                        (plansStore.selectedPeriod
                            === 'monthly' ? 'mo' :
                            'yr') }}
                </div>
            </div>
        </div>

        <div class="preview-total">
            <p class="preview-total__text">
                Total (per {{
                    (plansStore.selectedPeriod
                        === 'monthly' ? 'month' :
                        'year') }})
            </p>
            <div class="preview-total__price">
                +${{ totalAmount }}/{{
                    (plansStore.selectedPeriod
                        === 'monthly' ? 'mo' :
                        'yr') }}
            </div>
        </div>
    </StepLayout>
</template>
