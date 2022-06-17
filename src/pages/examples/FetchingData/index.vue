<template>
    <section>
        <template v-for="branch in branches">
            <input type="radio" :id="branch" name="branch" :value="branch" v-model="currentBranch" />
            <label :for="branch"></label>
        </template>
    </section>
    <p>current branch:{{ currentBranch }}</p>
    <section>
        <ul v-if="commits">
            <li v-for="{ html_url, sha, author, commit } in commits">
                <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
                - <span class="message">{{ truncate(commit.message) }}</span><br>
                by <span class="author">
                    <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
                </span>
                at <span class="date">{{ formatDate(commit.author.date) }}</span>
            </li>
        </ul>
    </section>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

const branches = ['main', 'v2-compat']
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const currentBranch = ref(branches[0])
const commits = ref()

watchEffect(async () => {
    const url = `${API_URL}${currentBranch}`
    commits.value = await (await fetch(url)).json();
})

function truncate(value: string) {
    const newline = value.indexOf('\n');
    return newline > 0 ? value.slice(0, newline) : value
}

function formatDate(value: string) {
    return value.replace(/T|Z/g, ' ')
}
</script>