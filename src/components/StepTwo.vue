<script setup>
import { useFormStore } from '@/stores/form';
import TextInput from '@components/formInputs/TextInput.vue';
import Footer from '@components/Footer.vue';
import { ref } from 'vue';

</script>

<template>
    <div class="step step--two">
        <div class="step__wrapper">
            <div class="step__content">
                <h1>
                    Select your plan
                </h1>
                <p class="step__subtext">
                    You have the option of monthly or yearly billing.
                </p>


            </div>

            <Footer :mobile="false" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>