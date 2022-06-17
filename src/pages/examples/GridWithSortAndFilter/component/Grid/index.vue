<template>
    <table v-if="filteredData.length">
        <thead>
            <tr>
                <th v-for="key in columns" @Click="sortBy(key)" :class="{ active: sortKey === key }">
                    {{ capitalize(key) }}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns">{{ entry[key] }}</td>
            </tr>
        </tbody>
    </table>
    <p v-else>没搜索到</p>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
interface gridData {
    name: string,
    power: number,
    [key: string]: string | number
}
interface T {
    [key: string]: number
}
const Props = defineProps<{
    data: gridData[],
    columns: string[],
    filterKey: string
}>()

const sortKey = ref("");
const sortOrders = ref(Props.columns!.reduce<T>((o, key) => ((o[key] = 1), o), {}))
const filteredData = computed(() => {
    let { data, filterKey } = Props
    if (filterKey) {
        filterKey = filterKey.toLowerCase();
        data = (data).filter((row) => {
            return Object.keys(row).some((key) => {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
        })
    }
    const key = sortKey.value;
    if (key) {
        const order = sortOrders.value[key];
        data = data?.slice().sort((a, b) => {
            const paramA = a[key];
            const paramB = b[key];
            return (paramA === paramB ? 0 : paramA > paramB ? 1 : -1) * order
        })
    }
    return data
})

function sortBy(key: string) {
    sortKey.value = key;
    sortOrders.value[key] *= -1
    console.log("sortOrders==>", sortOrders)
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style>
table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}

th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}

.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}
</style>