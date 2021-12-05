import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES } from '@/assets/constants/routes'
import AdventCalendar from '@/views/AdventCalendar'
import DayDisplayer from '@/views/DayDisplayer'

const routes = [
    {
        path: ROUTES.ADVENT_CALENDAR,
        name: 'AdventCalendar',
        component: AdventCalendar,
        children: [{
            path: ROUTES.DAY_DISPLAYER,
            props: true,
            name: 'DayDisplayer',
            component: DayDisplayer
        }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
