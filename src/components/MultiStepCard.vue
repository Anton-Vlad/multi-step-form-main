<template>
    <div class="card">
        <Sidebar />

        <StepOne />
    </div>
</template>

<script setup>
import Sidebar from '@components/Sidebar.vue';
import StepOne from '@components/StepOne.vue';

</script>

<style lang="scss" scoped>
.card {
    padding: 1rem;
    background-color: var(--white);
    height: 600px;
    width: 940px;
    border-radius: 15px;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);

    display: flex;
}
</style>