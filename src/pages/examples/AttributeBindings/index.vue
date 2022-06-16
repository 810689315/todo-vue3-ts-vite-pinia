<template>
    <p class="cursor-pointer select-none"><span :title="message">鼠标悬停，显示文字</span></p>
    <p class="cursor-pointer select-none"><span :class="{ 'text-red-600': isRed }"
            @click="isRed = !isRed">点击切换成红色</span></p>
    <p class="cursor-pointer select-none"><span :style="{ color }" @click="randomColor()">点击切变色</span></p>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const message = ref("hello world");
const isRed = ref(false);
const color = ref('green');
const getRandomRgb = () => parseInt((Math.random() * 255).toString())
const randomColor = () => { color.value = `rgb(${getRandomRgb()},${getRandomRgb()},${getRandomRgb()})`; console.log("color==>", color, color.value); }
</script>
