<template>
    <div class="">
        {{ message }}
    </div>
    <button @click="message += '欧拉'">打拳</button>
    <br />
    <button @click="reverseMessage">翻转！</button>
    <br />
    <button @click="message = '欧拉'">收招</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const message = ref("欧拉")
const reverseMessage = () => message.value = message.value.split('').reverse().join('')
</script>