<script setup>
import { useFormStore } from '@/stores/form';
import TextInput from '@components/formInputs/TextInput.vue';
import Footer from '@components/Footer.vue';
import { ref } from 'vue';

const showRequired = ref(false);

</script>

<template>
    <div class="step step--one">
        <div class="step__wrapper">
            <div class="step__content">
                <h1>
                    Personal info
                </h1>
                <p class="step__subtext">
                    Please provide your name, email address, and phone number.
                </p>

                <form>
                    <TextInput tag="name" type="text" label="Name" placeholder="e.g. Stephen King"
                        :showRequired="showRequired" />
                    <TextInput tag="email" type="email" label="Email Address" placeholder="e.g. stephenking@lorem.com"
                        :showRequired="showRequired" />
                    <TextInput tag="phone" type="text" label="Phone Number" placeholder="e.g. +1 234 567 890"
                        :showRequired="showRequired" />
                </form>
            </div>

            <Footer :mobile="false" />
        </div>
    </div>
</template>


<style lang="scss" scoped></style>