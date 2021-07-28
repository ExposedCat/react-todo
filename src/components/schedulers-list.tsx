import React from 'react'
import {
    SchedulerDate,
    SchedulerData
} from '../utils/types'

class SchedulersList extends React.Component<SchedulerDate> {
    render() {
        const storageKey = `scheduler_${this.props.year}_${this.props.month}_${this.props.day}`
        const stringSchedulersList = localStorage.getItem(storageKey)
        const header = <div className="header-bar">
            <h3 className="header">
                Планы на день
            </h3>
        </div>
        if (!stringSchedulersList) {
            return (
                <>
                    {header}
                    <p>Планов нет</p>
                </>
            )
        }
        const schedulersList = JSON.parse(stringSchedulersList)
        return (
            <>
                {header}
                <div className="SchedulersList">{
                    schedulersList.map(
                        (scheduler: SchedulerData, id: number) => <div className="scheduler" key={id}>
                            {scheduler.label && <p className="scheduler-label">{scheduler.label}</p>}
                            <div>
                                <p className="scheduler-title">{scheduler.title}</p>
                                {scheduler.description &&
                                <p className="scheduler-description">{scheduler.description}</p>}
                            </div>
                        </div>
                    )
                }</div>
            </>
        )
    }
}

export { SchedulersList }