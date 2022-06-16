<template>
    <div class="flex">
        <section class="flex flex-col mx-10">
            <h2>basic</h2>
            <router-link to="/examples/helloWorld">Hello World</router-link>
            <router-link to="/examples/HandlingUserInput">HandlingUserInput</router-link>
            <router-link to="/examples/AttributeBindings">Attribute Bindings</router-link>
            <router-link to="/examples/conditionalsAndLoops">Conditionals and Loops</router-link>
            <router-link to="/examples/formBindings">Form Bindings</router-link>
            <router-link to="/examples/simpleComponent">Simple Component</router-link>
            <h2>Practical</h2>
            <router-link to="/examples/markdownEditor">Markdown editor</router-link>
        </section>
        <section class="flex:1 relative w-full mx-10">
            <router-view></router-view>
        </section>
    </div>
</template>
<script lang="ts" setup>
</script>
