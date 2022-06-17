<template>
    <section>
        <svg width="200" height="200">
            <PolyGraph :states="states"></PolyGraph>
        </svg>
    </section>
    <section>
        <ul>
            <li v-for="state in states">
                <label>{{ state.label }}</label>
                <input type="range" v-model="state.value" min="0" max="100">
                <span>{{ state.value }}</span>
                <button @click="removeState(state)" class="remove">X</button>
            </li>
        </ul>
        <form id="add">
            <input name="newlabel" v-model="newState">
            <button @click="addSate">加一个</button>
        </form>
    </section>
    <pre id="raw">{{ states }}</pre>
</template>
<script setup lang="ts">
import PolyGraph from './components/PolyGraph/index.vue';
import { reactive, ref } from 'vue';
interface state {
    label: string,
    value: number
}
const newState = ref("")
const states: state[] = reactive([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 }
])

function addSate() {
    if (!newState.value) return
    states.push({
        label: newState.value,
        value: 100
    })
    newState.value = ''
}

function removeState(state: state) {
    if (states.length > 3) {
        states.splice(states.indexOf(state), 1);
    } else {
        alert("不能再继续删除了")
    }
}
</script>

<style>
polygon {
    fill: #42b983;
    opacity: 0.75;
}

circle {
    fill: transparent;
    stroke: #999;
}

text {
    font-size: 10px;
    fill: #666;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {
    position: absolute;
    top: 0;
    left: 300px;
}
</style>