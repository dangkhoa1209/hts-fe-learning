<template>
    <div class="text-red-400">
        khoa
        <button class="btn">Button</button>
        <p>khoa nè</p>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

const a = ['a', 'a']
const b = () => {
    return a[0]
}
onMounted(b)
</script>
