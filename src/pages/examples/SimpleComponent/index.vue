<template>
    <ul v-if="todoList.length > 0">
        <todoItem v-for="todo in todoList" :todo="todo" :key="todo.id">{{ todo }}</todoItem>
    </ul>
</template>
<script lang="ts" setup>
import todoItem from './component/todoItem/index.vue';
import { ref } from 'vue';
const todoList = ref([
    { id: 0, text: '学vue3' },
    { id: 1, text: '学pinia' },
    { id: 2, text: '还有学啥' }
])
</script>
