<script setup>
import { computed, markRaw } from 'vue'
import { useStepsStore } from '@/stores/steps';
import Sidebar from '@components/Sidebar.vue';
import StepOne from '@components/StepOne.vue';
import StepTwo from '@components/StepTwo.vue';
import StepThree from '@components/StepThree.vue';
import StepFour from '@components/StepFour.vue';
import Success from '@components/Success.vue';
import FooterMobile from '@components/FooterMobile.vue';

const stepsStore = useStepsStore();

const activeComponent = computed(() => {
    if (stepsStore.showSuccess) {
        return Success;
    }
    switch (stepsStore.currentStep) {
        case 1:
            return StepOne;
            break;
        case 2:
            return StepTwo;
            break;
        case 3:
            return StepThree;
            break;
        case 4:
            return StepFour;
            break;
        default:
            return StepOne;
            break;
    }
});
</script>

<template>
    <div class="card">
        <Sidebar />

        <Transition name="slide-fade" mode="out-in"> <!--Very important to select mode-->
            <component :is="activeComponent"></component>
        </Transition>

        <FooterMobile v-if="!stepsStore.showSuccess" />
    </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
    .card {
        padding: 1rem;
        background-color: var(--white);
        height: 600px;
        width: 940px;
        border-radius: 15px;
        box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);

        display: flex;
    }
}
</style>