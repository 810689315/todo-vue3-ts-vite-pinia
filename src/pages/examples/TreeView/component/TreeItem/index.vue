<template>
    <li class="ml-5">
        <div :class="{ 'font-bold': isFolder }" @click="toggle" @dblclick="changeType">
            {{ model.name }}
            <span v-if="isFolder">[{{ isOpen ? '-' : "+" }}]</span>
        </div>
        <ul v-if="isOpen && isFolder">
            <TreeItem class="cursor-pointer leading-5" v-for="(modelChildrenItem, index) in model.children" :key="index"
                :model="modelChildrenItem" />
            <li class="add" @click="addChild">+</li>
        </ul>
    </li>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import TreeItem from '../TreeItem/index.vue';
const Props = defineProps<{ model: model }>()
interface model {
    name: string,
    children?: model[],
}
const isOpen = ref(false)
const isFolder = computed(() => {
    return Props.model.children && Props.model.children.length
})

function toggle() {
    isOpen.value = !isOpen.value;
}

function changeType() {
    if (!isFolder.value) {
        Props.model.children = [];
        addChild();
        isOpen.value = true;
    }
}

function addChild() {
    Props.model.children!.push({ name: 'child folder' })
}
</script>