<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
    todo: { type: Object, default: { text: "" } }
})
</script>

<template>
    <li>{{ todo.text }}</li>
    <li>
        <slot></slot>
    </li>
</template>