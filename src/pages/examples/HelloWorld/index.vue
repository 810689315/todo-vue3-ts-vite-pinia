<template>
    <div class="">
        {{ message }}
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const message = ref("This is my first demo -- helloWorld");
</script>
