<template>
    <section class="absolute left-10">
        <textarea class="outline-none border-none w-full h-full" :value="input" @input="handleInput"></textarea>
    </section>
    <section class="absolute right-10">
        <div v-html="outputInput"></div>
    </section>
</template>
<script lang="ts" setup >
import { useDebounceFn } from '@vueuse/core';
import { computed, ref } from 'vue';
const input = ref("# 写！✍！")
const handleInput = useDebounceFn((e) => {
    console.log("handleInput==>", e)
    input.value = e.target.value
}, 100)
const outputInput = computed(() => input.value)
</script>