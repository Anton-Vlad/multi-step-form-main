<script setup>
import { ref } from 'vue';
import { useStepsStore } from '@/stores/steps';

const stepsStore = useStepsStore()
const items = ref([
    {
        step: 1,
        text: 'YOUR INFO',
        active: false,
        visited: false,
    },
    {
        step: 2,
        text: 'SELECT PLAN',
        active: false,
        visited: false,
    },
    {
        step: 3,
        text: 'ADD-ONS',
        active: false,
        visited: false,
    },
    {
        step: 4,
        text: 'SUMMARY',
        active: false,
        visited: false,
    },
]);

const goToStep = function (newStep) {
    // if (stepsStore.currentStep < newStep) {
    stepsStore.setStep(newStep);
    // }
}
</script>

<template>
    <div class="sidebar">
        <ul class="sidebar__list">
            <li v-for="(item, index) in items" :key="'step-number-' + index"
                :class="{ 'sidebar__item': true, 'sidebar__item--active': (item.step === stepsStore.currentStep), 'sidebar__item--visited': true }"
                @click="goToStep(item.step)">
                <span class="sidebar__number">
                    {{ item.step }}
                </span>
                <span class="sidebar__name">
                    <span class="sidebar__label">
                        STEP {{ item.step }}
                    </span>
                    <span class="sidebar__text">
                        {{ item.text }}
                    </span>
                </span>
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped></style>
