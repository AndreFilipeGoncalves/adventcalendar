<template>
    <nav class="day-selector-wrapper">
        <div
        class="day-selector"
        :class="{'ready': entry.ready}"
        v-for="entry in daysList"
        :key="entry.day">
            <router-link
            class="day-selector-entry"
            v-if="entry.ready"
            :to="{ name: entry.name, params: {day: entry.day, content: JSON.stringify(entry)}}">
                {{entry.label}}
            </router-link>
            <font-awesome-icon v-else :icon="['fa', 'lock']"/>
        </div>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    daysList: Array
})
</script>

<style lang="scss">
.day-selector-wrapper {
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    box-sizing:border-box;
    padding:10px 40px;
    flex-wrap:wrap;
    .day-selector {
        width:60px;
        height:60px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        text-align:center;
        box-sizing:border-box;
        margin:10px;
        border:2px dashed black;
        box-sizing:border-box;
        &.ready { border:2px solid black; }
        .day-selector-entry {
            text-decoration:none;
            width:100%;
            height:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            &:visited, :hover {
                color: inherit;
            }
            &.router-link-exact-active {
                background-color: black;
                font-weight:bold;
                color:white;
            }
        }

    }
}
</style>
