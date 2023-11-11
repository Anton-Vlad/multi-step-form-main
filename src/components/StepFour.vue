<script setup>
import { usePlansStore } from '@/stores/plans';
import StepLayout from '@components/StepLayout.vue';


</script>
<template>
    <StepLayout :step="'four'" :title="`Finishing up`" :text="`Double-check everything looks OK before confirming.`">
        Slot Content
    </StepLayout>
</template>
