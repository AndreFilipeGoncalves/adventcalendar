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
            props: route => ({
                    ...route.params,
                    content: JSON.parse(route.params.content)
            }),
            name: 'DayDisplayer',
            component: DayDisplayer,
            beforeEnter: (to, from, next) => {
                if (!to.params.content) next('/')
                else next()
            }
        }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
