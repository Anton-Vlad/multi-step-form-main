<script setup>
import { ref } from 'vue';

const items = ref([
    {
        step: '1',
        text: 'YOUR INFO',
        active: true,
    },
    {
        step: '2',
        text: 'SELECT PLAN',
        active: false,
    },
    {
        step: '3',
        text: 'ADD-ONS',
        active: false,
    },
    {
        step: '4',
        text: 'SUMMARY',
        active: false,
    },
]);

console.log(items)

</script>

<template>
    <div class="sidebar">
        <ul class="sidebar__list">
            <li v-for="(item, index) in items" :key="'step-number-' + index"
                :class="{ 'sidebar__item': true, 'sidebar__item--active': item.active }">
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
    min-width: 274px;
    max-width: 274px;
    background-image: url('@/assets/images/bg-desktop.svg');
    /* Use ~@ to reference the src directory */
    background-size: cover;
    background-position: center;
    padding: 2rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;

        li {
            color: var(--white);
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;

            &.sidebar__item--active,
            &:hover {
                .sidebar__number {
                    background-color: var(--light-blue);
                    border-color: var(--light-blue);
                    color: var(--marine-blue);
                }
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
            padding-left: 2px;
            transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out, 0.3s color ease-in-out;
        }

        .sidebar__name {
            display: flex;
            flex-direction: column;
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
</style>
