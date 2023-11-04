<script setup>
import { ref } from 'vue';


const title = "Personal info";

</script>

<template>
    <div class="step step--one">
        <h1>
            {{ title }}
        </h1>
    </div>
</template>


<style lang="scss" scoped>
.step {
    flex: 1 1 auto;
    padding: 2.5rem 5.25rem 2.5rem 6.25rem;
}
</style>