<template>
    <div class="advent-calendar-wrapper">
        <title class="title"> Advent Calendar </title>
        <!-- list of days to select -->
        <day-selector :daysList="daysList"/>
        <!-- router view to render the selected day -->
        <router-view/>
    </div>
</template>

<script setup>
import DaySelector from '@/components/DaySelector'
import { adventDaysSetup } from '@/assets/setups/adventDays'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'

const route = useRoute()

/* return the advent days setup */
const daysList = computed(() => {
    if (!adventDaysSetup) return
    return adventDaysSetup()
})

</script>

<style lang="scss">
.advent-calendar-wrapper {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    .title {
        display:block;
        font-size:48px;
        text-align:center;
    }
}
</style>
