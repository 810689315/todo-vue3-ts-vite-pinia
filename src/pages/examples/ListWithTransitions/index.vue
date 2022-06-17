<template>
    <button @click="insert">随机加入一个数据</button>
    <button @click="reset">初始化数据</button>
    <!-- <button @click="shuffle">打乱数据</button> -->
    <TransitionGroup tag="ul" name="fade" class="container">
        <div v-for="item in items" class="item" :key="item">
            {{ item }}
            <button @click="remove(item)">x</button>
        </div>
    </TransitionGroup>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const getInitialItem = () => [1, 2, 3, 4, 5];
const items = ref(getInitialItem());
let id = items.value.length + 1

// 随即插入一个数据
function insert() {
    const i = Math.round(Math.random() * items.value.length)
    items.value.splice(i, 0, id++);
}
// 初始化数据
function reset() {
    items.value = getInitialItem();
    id = items.value.length + 1
}
// // 打乱数据
// function shuffle() {
//     items.value = 
// }
// 删除一个数据
function remove(item: number) {
    console.log("remove==》", item, typeof item);
    const i = items.value.indexOf(item);
    if (i > -1) {
        items.value.splice(i, 1);
    }
}
</script>