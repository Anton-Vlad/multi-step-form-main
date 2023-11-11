<script setup>
import { useAddonsStore } from '@/stores/addons';
import { usePlansStore } from '@/stores/plans';
import StepLayout from '@components/StepLayout.vue';

const addonsStore = useAddonsStore();
const plansStore = usePlansStore();

const toggle = function (addon) {
    addonsStore.toggleAddon(addon);
}
</script>

<template>
    <StepLayout :step="'three'" :title="`Pick add-ons`" :text="`Add-ons help enhance your gaming experience.`">
        <div class="addons">
            <div v-for="(item, index) in addonsStore.options" :key="item + '-' + index"
                :class="`addon ${addonsStore.tree[item].selected ? 'addon--included' : ''}`" @click="toggle(item)">
                <div class="addon__status">
                    <span :class="`checkbox ${addonsStore.tree[item].selected ? 'checkbox--active' : ''}`"></span>
                </div>
                <div class="addon__content">
                    <h3 class="addon__name">
                        {{ addonsStore.tree[item].name }}
                    </h3>
                    <p class="addon__description">
                        {{ addonsStore.tree[item].description }}
                    </p>
                </div>
                <div class="addon__price">
                    +${{ addonsStore.tree[item][`${plansStore.selectedPeriod}Price`] }}/{{
                        (plansStore.selectedPeriod
                            === 'monthly' ? 'mo' :
                            'yr') }}
                </div>
            </div>
        </div>
    </StepLayout>
</template>

