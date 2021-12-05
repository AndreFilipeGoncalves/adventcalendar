<template>
    <div class="day-info-wrapper">
        <!-- Brief -->
        <h1
        v-if="content.beforeImageText"
        class="heading">
            {{t('brief')}}
        </h1>
        <span class="entry">{{content.beforeImageText}}</span>

        <!-- Image -->
        <img
        v-if="content.image"
        class="challenge-image"
        :src="`/challenges/day${day}/img.png`" alt="">

        <!-- After Image Text -->
        <span
        v-if="content.afterImageText"
        class="entry">
            {{content.afterImageText}}
        </span>

        <!-- What it should be able to do -->
        <h3
        v-if="content.beAbleText.length"
        class="info">
            {{t('beAble')}}
        </h3>
        <p
        class="entry"
        v-for="entry in content.beAbleText"
        :key="entry">
            - {{entry}}
        </p>

        <!-- Getting started -->
        <h1
        v-if="content.gettingStarted.length"
        class="heading">
            {{t('gettingStarted')}}
        </h1>
        <p
        class="entry"
        v-for="(entry, idx) in content.gettingStarted"
        :key="entry">
            {{idx + 1}}. {{entry}}
        </p>

        <!-- Next Level -->
        <h1
        v-if="content.nextLevel.length"
        class="heading">
            {{t('nextLevel')}}
        </h1>
        <p
        class="entry"
        v-for="entry in content.nextLevel"
        :key="entry">
            - {{entry}}
        </p>

        <!-- Files -->
        <h3
        v-if="content.cssFile || content.jsFile"
        class="info">
            {{t('files')}}
        </h3>
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
    padding-bottom:40px;
    overflow:auto;
    .heading {
        font-size:3.5rem;
        color: rgb(54,67,77);
        margin:10px 0px;
    }
    .info {
        font-size:1.5rem;
        color: rgb(54,67,77);
        margin:15px 0px;
    }
    .entry {
        font-size:1rem;
        margin:5px 0px;
    }
    .challenge-image {
        display:flex;
        flex-direction:row;
        align-self:center;
        margin: 15px 0px;
        max-width:600px;
        max-height:300px;
    }
}
</style>
