<script setup>
import TextInput from '@components/formInputs/TextInput.vue';
import Footer from '@components/Footer.vue';
import { ref } from 'vue';


const name = ref(null);
const email = ref(null);
const phone = ref(null);

const showRequired = ref(false);

const onHoverEnter = function (payload) {
    showRequired.value = true;
}
const onHoverExit = function (payload) {
    showRequired.value = false;
}

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
                    <TextInput v-model="name" tag="name" type="text" label="Name" placeholder="e.g. Stephen King"
                        :showRequired="showRequired" />
                    <TextInput v-model="email" tag="email" type="email" label="Email Address"
                        placeholder="e.g. stephenking@lorem.com" :showRequired="showRequired" />
                    <TextInput v-model="phone" tag="phone" type="text" label="Phone Number"
                        placeholder="e.g. +1 234 567 890" :showRequired="showRequired" />
                </form>
            </div>

            <Footer :mobile="false" @enter="onHoverEnter" @leave="onHoverExit" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.step {
    padding: 1.5rem 1rem;
    padding-top: 0;
    z-index: 2;
    position: relative;
    transform: translateY(6.25rem);

    .step__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background: var(--white);

        border-radius: 0.625rem;
        box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);
        padding: 2rem 1.5rem;

        margin-bottom: 6.25rem;
    }

    .step__subtext {
        margin-bottom: 2.2rem;
    }
}

@media (min-width: 1024px) {
    .step {
        flex: 1 1 auto;
        padding: 2.5rem 5.25rem 1rem 6.25rem;
        transform: none;

        .step__wrapper {
            background: transparent;
            box-shadow: none;
            border-radius: 0;
            padding: 0;
            min-height: initial;
            margin-bottom: 0;
        }
    }
}
</style>