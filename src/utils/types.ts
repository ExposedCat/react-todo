// import React from 'react'

type CalendarAction = 'select' | 'open'

interface CalendarDay {
    year: number,
    month: number,
    day: number
}

interface CalendarProps {
    selectedYear: number,
    selectedMonth: number,
    selectedDay: number,
    openedYear: number,
    openedMonth: number,
    updater: (actionDataList: CalendarActionData[]) => void
}

interface SidebarState {
    openedYear: number,
    openedMonth: number,
    selectedDay: number,
    selectedYear: number,
    selectedMonth: number
}

interface CalendarActionData {
    action: CalendarAction,
    year: number,
    month: number
    day?: number
}

interface SchedulerDate {
    year: number,
    month: number
    day: number
}

interface SchedulerData {
    id: number,
    title: string,
    label?: string,
    description?: string
}

interface CalendarItemProps {
    year: number,
    month: number,
    day: number,
    selected: boolean,
    scheduled: boolean,
    otherMonth: boolean,
    updater: (actionDataList: CalendarActionData[]) => void
}

interface DefaultProps {
}

export type {
    CalendarDay,
    SidebarState,
    CalendarProps,
    SchedulerDate,
    SchedulerData,
    CalendarItemProps,
    CalendarActionData,
    DefaultProps as Props
}