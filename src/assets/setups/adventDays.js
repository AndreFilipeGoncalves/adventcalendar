import { ADVENT_DAYS } from '@/assets/data/adventDays'

export const adventDaysSetup = () => {
    const adventDays = []
    return ADVENT_DAYS.map(ele => {
        return {
            ...ele,
            route: `/day/${ele.day}`,
            name: 'DayDisplayer'
        }
    })
}
