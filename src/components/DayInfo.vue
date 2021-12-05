<template>
    <div class="day-info-wrapper">
        <!-- Brief -->
        <h1 class="heading">{{t('brief')}}</h1>

        <!-- What it should be able to do -->
        <h3 class="info">{{t('beAble')}}</h3>

        <!-- Getting started -->
        <h1 class="heading">{{t('gettingStarted')}}</h1>

        <!-- Files -->
        <h3 class="info">{{t('files')}}</h3>
        <div class="files-wrapper">
            <!-- css file -->
            <file-downloader
            v-if="content.cssFile"
            :type="FILE_TYPES.CSS"
            :url="`/challenges/day${day}/css.7z`"/>
            <!-- js file -->
            <file-downloader
            v-if="content.jsFile"
            :type="FILE_TYPES.JS"
            :url="`/challenges/day${day}/js.7z`"/>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { FILE_TYPES } from '@/assets/constants/fileTypes'
import FileDownloader from '@/components/support/Downloader'
const { t } = useI18n()

const props = defineProps({
    day: [String, Number],
    content: [Object]
})

</script>

<style lang="scss">
.day-info-wrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-left:40px;
    .heading {
        font-size:3.5rem;
        color: rgb(54,67,77);
    }
    .info {
        font-size:1.5rem;
        color: rgb(54,67,77);
    }
}
</style>
