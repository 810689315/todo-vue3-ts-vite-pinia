<template>
    <ul>
        <TreeItem class="cursor-pointer leading-5" :model="treeData"></TreeItem>
    </ul>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import TreeItem from "./component/TreeItem/index.vue"
const treeData = ref({
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'world' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'world' }]
                },
                { name: 'hello' },
                { name: 'world' },
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'world' }]
                }
            ]
        }
    ]
})
</script>