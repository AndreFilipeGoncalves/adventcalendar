<template>
    <day-info :day="day" :content="content"/>
</template>

<script setup>
import DayInfo from '@/components/DayInfo'
import { defineProps } from 'vue'

const props = defineProps({
    day: [String, Number],
    content: [Object]
})
</script>

<style></style>
