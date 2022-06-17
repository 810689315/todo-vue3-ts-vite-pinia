<template>
    <text :x="point.x" :y="point.y">{{ state.label }} </text>
</template>

<script setup lang="ts">
import { valueToPoint } from '@/utils/valueToPoint';
import { computed } from 'vue';

interface state {
    label: string,
    value: number
}
const Props = defineProps<{
    state: state,
    index: number,
    total: number
}>()

const point = computed(() => valueToPoint(+Props.state.value + 10, Props.index, Props.total))
</script>