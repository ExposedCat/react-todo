import React from 'react'
import './App.css'
import { Sidebar } from './components/sidebar'
import { Content } from './components/content-box'

function App() {
    console.clear()
    localStorage.setItem('scheduler_2021_5_9', JSON.stringify([{
        label: 'Design',
        title: 'Make calendar design',
        description: 'Make weekday bar white'
    }, {
        label: 'School',
        title: 'Do homework',
        description: 'Do math homework'
    }]))
    localStorage.setItem('scheduler_2021_5_15', JSON.stringify([{
        label: 'Design',
        title: 'Make content design',
        description: 'Make content look as sidebar'
    }, {
        label: 'Design',
        title: 'Improve schedulers design',
        description: 'Make scheduler\'s description lighter'
    }]))
    localStorage.setItem('scheduler_2021_5_9', JSON.stringify([{
        label: 'School',
        title: 'Do homework',
        description: 'Do geography homework'
    }]))
    localStorage.setItem('scheduler_2021_6_7', JSON.stringify([{
        label: 'Design',
        title: 'Make background',
        description: 'Add gradient as app background'
    }, {
        label: 'School',
        title: 'Do homework',
        description: 'Do math homework'
    }, {
        label: 'Design',
        title: 'Improve schedulers design',
        description: 'Make scheduler\'s title bold'
    }]))
    return (
        <div className="App">
            <Sidebar/>
            <Content/>
        </div>
    )
}

export { App }
