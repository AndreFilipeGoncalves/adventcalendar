<template>
    <a class="downloader-wrapper" :href="url" download>
        <!-- js icon -->
        <font-awesome-icon
        class="file-icon"
        v-if="type ===FILE_TYPES.JS"
        :icon="['fab', 'js-square']"/>
        <!-- css icon -->
        <font-awesome-icon
        class="file-icon"
        v-else
        :icon="['fab', 'css3-alt']"/>
    </a>
</template>

<script setup>
import { FILE_TYPES } from '@/assets/constants/fileTypes'
import { defineProps } from 'vue'

const props = defineProps({
    url: String,
    type: String
})
</script>

<style lang="scss">
.downloader-wrapper {
    text-decoration:none;
    color: black;
    .file-icon {
        width: 48px;
        height:48px;
    }
}
</style>
