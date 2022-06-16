<template>
    <ul v-if="isShowList && numList.length > 0">
        <li v-for="num in numList" :key="num">{{ num }}</li>
    </ul>
    <p v-else-if="numList.length > 0">数组被隐藏了</p>
    <p v-else>没有数据了</p>
    <button @click="isShowList = !isShowList">{{ toggleBtnTitle }}</button>
    <br />
    <button @click="numList.push(numList.length + 1)">增加一个数字</button>
    <br />
    <button @click="numList.pop()">减少一个数字</button>
    <br />
    <button @click="numList.reverse()">反转</button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { ref } from 'vue';

const numList = ref([1, 2, 3]);
const isShowList = ref(true);
const toggleBtnTitle = computed(() => { return isShowList ? "隐藏" : "展示" })
</script>
