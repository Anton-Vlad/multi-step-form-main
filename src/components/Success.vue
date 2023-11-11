<script setup>
import successIcon from "@/assets/images/icon-success.svg";

</script>

<template>
    <div class="step step--success">
        <div class="step__wrapper">
            <img :src="successIcon" alt="Success Finish">
            <h1>
                Thank you!
            </h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
                please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    </div>
</template>