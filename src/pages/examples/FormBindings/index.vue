<template>
    <h2>Text Input 输入框</h2>
    <input v-model="text" />
    <div>
        {{ text }}
    </div>
    <h2>Checkbox 选择框</h2>
    <input type="checkbox" name="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">CheckBox:{{ checked }}</label>
    <h2>Multi Checkbox 多选框</h2>
    <section>
        <input type="checkbox" value="苹果" id="apple" v-model="checkedFruits" />
        <label class="mr-10" for="apple">苹果</label>
        <input type="checkbox" value="香蕉" id="banana" v-model="checkedFruits" />
        <label class="mr-10" for="banana">香蕉</label>
        <input type="checkbox" value="西瓜" id="watermelon" v-model="checkedFruits" />
        <label for="watermelon">西瓜</label>
        <div>
            选择的水果:{{ checkedFruits }}
        </div>
    </section>
    <h2>Radio 单选框</h2>
    <section>
        <input type="radio" value="男" id="man" v-model="picked" />
        <label class="mr-10" for="man">男</label>
        <input type="radio" value="女" id="woman" v-model="picked" />
        <label for="woman">女</label>
        <div>选择的性别:{{ picked }}</div>
    </section>
    <h2>Select 选择</h2>
    <section>
        <select v-model="selected">
            <option disabled value="">选择吧~~</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <div>选择的结果:[{{ selected }}]</div>
    </section>
    <h2>Multi Select 多选</h2>
    <section>
        <select v-model="multiSelected" multiple style="width:100px">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <div>多选:{{ multiSelected }}</div>
    </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('来，试试看，尽情的修改我吧')
const checked = ref(true)
const checkedFruits = ref(["苹果"])
const picked = ref('男')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>
