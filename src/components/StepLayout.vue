<script setup>
import { useStepsStore } from '@/stores/steps';
import Footer from '@components/Footer.vue';

const props = defineProps(['step', 'title', 'text']);
const stepsStore = useStepsStore();

</script>

<template>
    <div :class="`step step--${props.step}`">
        <div class="step__wrapper">
            <div class="step__content">
                <h1>
                    {{ props.title }}
                </h1>
                <p class="step__subtext">
                    {{ props.text }}
                </p>

                <slot></slot>
            </div>

            <Footer v-if="!stepsStore.showSuccess" :mobile="false" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>