import React from 'react'
import { CalendarItemProps } from '../utils/types'

class CalendarItem extends React.Component<CalendarItemProps> {
    render() {
        const selectedClass = this.props.selected ? ' selected' : (this.props.scheduled ? ' scheduled' : '')
        const dimmedClass = (this.props.otherMonth && !this.props.selected) ? ' dimmed' : ''
        const classList = `CalendarItem${selectedClass}${dimmedClass}`
        return (
            <div
                className={classList}
                onClick={event => {
                    console.log('sending open event')
                    this.props.updater([
                        {
                            action: 'open',
                            year: this.props.year,
                            month: this.props.month
                        }, {
                            action: 'select',
                            year: this.props.year,
                            month: this.props.month,
                            day: this.props.day
                        }
                    ])

                }}
            >
                {this.props.day}
            </div>
        )
    }
}

export { CalendarItem }