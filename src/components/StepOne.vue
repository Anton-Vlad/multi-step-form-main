<script setup>
import TextInput from '@components/formInputs/TextInput.vue';
import StepLayout from '@components/StepLayout.vue';
import { ref } from 'vue';

const showRequired = ref(false);

</script>

<template>
    <StepLayout :step="'one'" :title="`Personal info`" :text="`Please provide your name, email address, and phone number.`">
        <form>
            <TextInput tag="name" type="text" label="Name" placeholder="e.g. Stephen King" :showRequired="showRequired" />
            <TextInput tag="email" type="email" label="Email Address" placeholder="e.g. stephenking@lorem.com"
                :showRequired="showRequired" />
            <TextInput tag="phone" type="text" label="Phone Number" placeholder="e.g. +1 234 567 890"
                :showRequired="showRequired" />
        </form>
    </StepLayout>
</template>
