<script setup>
import Footer from '@components/Footer.vue';
import { ref } from 'vue';


const title = "Personal info";

</script>

<template>
    <div class="step step--one">
        <div class="step__content">
            <h1>
                {{ title }}
            </h1>



            <Footer :mobile="false" />
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

    .step__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background: var(--white);

        border-radius: 0.625rem;
        box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);
        padding: 2rem 1.5rem;

        min-height: 780px;
        margin-bottom: 6.25rem;
    }
}

@media (min-width: 1024px) {
    .step {
        flex: 1 1 auto;
        padding: 2.5rem 5.25rem 1rem 6.25rem;
        transform: none;

        .step__content {
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