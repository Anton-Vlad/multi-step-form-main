<script setup>
const props = defineProps(['mobile']);
const emit = defineEmits(['enter', 'leave']);
const onMouseover = function ($event) {
    emit("enter", true);
}
const onMouseleave = function ($event) {
    emit("leave", true);
}
</script>

<template>
    <div :class="{ 'form-footer': true, 'form-footer--mobile': mobile }">

        <button type="button" class="btn btn-primary" @mouseover="onMouseover" @mouseleave="onMouseleave">
            Next Step
        </button>
    </div>
</template>

<style lang="scss" scoped>
.form-footer {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: var(--white);
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);

    &:not(.form-footer--mobile) {
        display: none;
    }
}

@media (min-width: 1024px) {
    .form-footer {
        position: relative;
        bottom: initial;
        left: initial;
        display: flex;
        justify-content: flex-end;
        padding: 0;
        box-shadow: none;


        &.form-footer--mobile {
            display: none;
        }

        &:not(.form-footer--mobile) {
            display: flex;
        }
    }
}
</style>