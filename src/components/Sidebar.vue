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

<style lang="scss" scoped>
.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    max-width: 100%;
    background-image: url('@/assets/images/bg-mobile.svg');
    background-size: cover;
    background-position: center;
    padding: 2rem;
    height: 174px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;

        li {
            color: var(--white);
            display: flex;
            align-items: center;
            gap: 1rem;
            opacity: 0.5;
            cursor: default;
            pointer-events: none;

            &.sidebar__item--active,
            &:hover {
                .sidebar__number {
                    background-color: var(--light-blue);
                    border-color: var(--light-blue);
                    color: var(--marine-blue);
                }
            }

            &.sidebar__item--visited {
                opacity: 1;
                cursor: pointer;
                pointer-events: initial;
            }
        }

        .sidebar__number {
            min-width: 2rem;
            max-width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--white);
            border-radius: 50%;

            text-align: center;
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.0625rem;
            text-transform: uppercase;
            padding-left: 1px;
            transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out, 0.3s color ease-in-out;
        }

        .sidebar__name {
            display: none;
        }

        .sidebar__label {
            display: block;
            font-size: 0.75rem;
            font-weight: 400;
            color: var(--pastel-blue);
            font-feature-settings: 'clig' off, 'liga' off;
        }

        .sidebar__text {
            display: block;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.0625rem;
            text-transform: uppercase;
        }
    }
}

@media (min-width: 1024px) {
    .sidebar {
        position: relative;
        top: initial;
        left: initial;
        min-width: 274px;
        max-width: 274px;
        background-image: url('@/assets/images/bg-desktop.svg');
        height: 100%;

        ul {
            flex-direction: column;
            justify-content: flex-start;

            .sidebar__name {
                display: flex;
                flex-direction: column;
            }
        }
    }
}
</style>
