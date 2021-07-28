import React from 'react'
import {
    CalendarDay,
    CalendarProps
} from '../utils/types'
import { CalendarItem } from './calendar-item'

const monthNames = [
    'Январь',
    'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь'
]

class Calendar extends React.Component<CalendarProps> {
    getDaysGrid(): CalendarDay[][] {
        let daysList: CalendarDay[] = []

        // Days from previous month
        const previousMonth = new Date(this.props.openedYear, this.props.openedMonth - 1)
        const previousMonthDays = new Date(this.props.openedYear, this.props.openedMonth, 0).getDate()
        const daysBefore = new Date(this.props.openedYear, this.props.openedMonth, 1).getDay()
        const daysBeforeYear = previousMonth.getFullYear()
        const daysBeforeMonth = previousMonth.getMonth()
        for (let i = previousMonthDays - daysBefore + 1; i <= previousMonthDays; ++i) {
            daysList.push({
                year: daysBeforeYear,
                month: daysBeforeMonth,
                day: i
            })
        }
        // Days from current month
        const thisDays = new Date(this.props.openedYear, this.props.openedMonth + 1, 0).getDate()
        for (let i = 1; i <= thisDays; ++i) {
            daysList.push({
                year: this.props.openedYear,
                month: this.props.openedMonth,
                day: i
            })
        }
        // Days from next month
        const daysAfter = 42 - daysBefore - thisDays
        const nextMonth = new Date(this.props.openedYear, this.props.openedMonth + 1)
        const daysAfterYear = nextMonth.getFullYear()
        const daysAfterMonth = nextMonth.getMonth()
        for (let i = 1; i <= daysAfter; ++i) {
            daysList.push({
                year: daysAfterYear,
                month: daysAfterMonth,
                day: i
            })
        }

        let daysGrid: CalendarDay[][] = []
        for (let i = 0; i <= 35; i += 7) {
            daysGrid.push(
                daysList.slice(i, i + 7)
            )
        }
        return daysGrid
    }

    switchMonth = (offset: number) => {
        const newDate = new Date(this.props.openedYear, this.props.openedMonth + offset)
        this.props.updater([{
            action: 'open',
            year: newDate.getFullYear(),
            month: newDate.getMonth()
        }])
    }

    render() {
        const daysGrid = this.getDaysGrid()
        return (
            <div className="Calendar">
                <div className="header-bar">
                    <h3 className="header">
                        {monthNames[this.props.openedMonth]} {this.props.openedYear}
                    </h3>
                    <div className="month-switcher">
                        <div
                            className="month-switch-button"
                            onClick={event => this.switchMonth(-1)}
                        >
                            <i className="fi-br-angle-small-left"/>
                        </div>
                        <div
                            className="month-switch-button"
                            onClick={event => this.switchMonth(1)}
                        >
                            <i className="fi-br-angle-small-right"/>
                        </div>
                    </div>
                </div>
                <div className="weekday-bar">
                    <span className="weekday-button" data-weekday="6">
                        ВС
                    </span>
                    <span className="weekday-button" data-weekday="0">
                        ПН
                    </span>
                    <span className="weekday-button" data-weekday="1">
                        ВТ
                    </span>
                    <span className="weekday-button" data-weekday="2">
                        СР
                    </span>
                    <span className="weekday-button" data-weekday="3">
                        ЧT
                    </span>
                    <span className="weekday-button" data-weekday="4">
                        ПТ
                    </span>
                    <span className="weekday-button" data-weekday="5">
                        СБ
                    </span>
                </div>
                <div className="calendar-body">
                    {daysGrid.map(
                        (week, index) =>
                            <div key={`week_${index}`} className="calendar-wrapper">{
                                week.map(
                                    day => {
                                        const otherMonth = day.month !== this.props.openedMonth
                                        const storageKey = `scheduler_${day.year}_${day.month}_${day.day}`
                                        const scheduled = !!localStorage.getItem(storageKey)
                                        const selected = day.year === this.props.selectedYear &&
                                            day.month === this.props.selectedMonth &&
                                            day.day === this.props.selectedDay

                                        return <CalendarItem
                                            year={day.year}
                                            month={day.month}
                                            day={day.day}
                                            key={`day_${day.day}`}
                                            selected={selected}
                                            scheduled={scheduled}
                                            otherMonth={otherMonth}
                                            updater={this.props.updater}
                                        />
                                    }
                                )
                            }</div>
                    )}
                </div>
            </div>
        )
    }
}

export { Calendar }

