<template>
    <button id="show-modal" @click="isShowModal = true">show Modal</button>
    <Teleport to="body">
        <Modal :show="isShowModal" @close="isShowModal = false">
            <template #header>
                <h3>哈哈哈哈哈</h3>
            </template>
        </Modal>
    </Teleport>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Modal from './components/Modal/index.vue'

const isShowModal = ref(false);
</script>