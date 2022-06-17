<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <AxisLabel v-for="(state, index) in states" :state="state" :index="index" :total="states.length" />
    </g>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { valueToPoint } from "@/utils/valueToPoint"
import AxisLabel from "../AxisLabel/index.vue"
interface state {
    label: string,
    value: number
}
const Props = defineProps<{
    states: state[]
}>()

const points = computed(() => {
    const total = Props.states.length;
    return Props.states.map((state, index) => {
        const { x, y } = valueToPoint(state.value, index, total);
        return `${x},${y}`
    }).join(" ")
})
</script>