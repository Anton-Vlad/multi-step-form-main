<script setup>
import { ref, reactive, computed } from 'vue';

const props = defineProps(['modelValue', 'tag', 'type', 'label', 'placeholder', 'showRequired']);
const emit = defineEmits(['update:modelValue']);

const phoneNumberRegex = /^\+\d{1,3} \d{3} \d{3} \d{3}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const error = ref(null);

const onInput = function ($event) {
    const newVal = $event.target.value;
    if (props.tag == 'phone' && newVal) {
        if (phoneNumberRegex.test(newVal)) {
            error.value = null;
            emit('update:modelValue', newVal)
        } else {
            error.value = "Invalid phone number";
        }
    } else if (props.tag == 'email' && newVal) {
        if (emailRegex.test(newVal)) {
            error.value = null;
            emit('update:modelValue', newVal)
        } else {
            error.value = "Invalid email address";
        }
    } else {
        error.value = null;
        emit('update:modelValue', newVal)
    }
}

const displayErrors = computed(() => {
    if (props.showRequired) {
        return (props.modelValue && !error.value ? false : true);
    }
    return error.value ?? false;
})
</script>

<template>
    <div :class="{ 'form-input': true, 'form-input--error': displayErrors }">
        <label :for="`${tag}-field`">
            {{ label }}

            <span class="error-text">{{ (showRequired ? (modelValue && !error ? "" : "This field is required") : error)
            }}</span>
        </label>
        <input :id="`${tag}-field`" :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput" />
    </div>
</template>

<style lang="scss" scoped>
.form-input {
    margin-top: 1.5rem;

    &.form-input--error {
        input {
            border-color: var(--strawberry-red) !important;
        }
    }

    label {
        display: flex;
        justify-content: space-between;
        color: var(--marine-blue);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0.5rem;
    }

    input {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-border);
        background: var(--white);
        color: var(--marine-blue);

        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        outline: 0;

        &:active,
        &:hover,
        &:focus,
        &:focus-visible,
        &:focus-within {
            border-color: var(--purplish-blue);
        }

        &::placeholder {
            color: var(--cool-gray);
            opacity: 1;
            /* Firefox */
        }

        &::-ms-input-placeholder {
            /* Edge 12 -18 */
            color: var(--cool-gray);
        }
    }
}
</style>