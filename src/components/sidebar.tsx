import React from 'react'
import { Calendar } from './calendar'
import { SchedulersList } from './schedulers-list'
import {
    Props,
    CalendarActionData,
    SidebarState
} from '../utils/types';

class Sidebar extends React.Component<Props> {
    state: SidebarState

    constructor(props: Props) {
        super(props)
        const now = new Date()
        const day = now.getDate()
        const year = now.getFullYear()
        const month = now.getMonth()
        this.state = {
            openedYear: year,
            openedMonth: month,
            selectedDay: day,
            selectedYear: year,
            selectedMonth: month
        }
    }

    update = (actionDataList: CalendarActionData[]) => {
        for (const actionData of actionDataList) {
            console.log(`received ${actionData.action} event`)
            if (actionData.action === 'select') {
                this.setState({
                    selectedYear: actionData.year,
                    selectedMonth: actionData.month,
                    selectedDay: actionData.day,
                })
            } else {
                this.setState({
                    openedYear: actionData.year,
                    openedMonth: actionData.month
                })
            }
        }
    }

    render() {
        return (
            <div className="box Sidebar">
                <Calendar
                    updater={this.update}
                    selectedYear={this.state.selectedYear}
                    selectedMonth={this.state.selectedMonth}
                    selectedDay={this.state.selectedDay}
                    openedYear={this.state.openedYear}
                    openedMonth={this.state.openedMonth}
                />
                <SchedulersList
                    year={this.state.selectedYear}
                    month={this.state.selectedMonth}
                    day={this.state.selectedDay}
                />
            </div>
        )
    }
}

export { Sidebar }