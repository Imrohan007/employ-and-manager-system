import React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    const [tasks, setTasks] = useState(data.tasks)

    const handleAcceptTask = (taskIndex) => {
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            newTask: false,
            active: true
        }
        setTasks(updatedTasks)
        
        // Update localStorage
        const updatedData = { ...data, tasks: updatedTasks }
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedInUser) {
            loggedInUser.data = updatedData
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        }
    }

    const handleCompleteTask = (taskIndex) => {
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            active: false,
            completed: true
        }
        setTasks(updatedTasks)
        
        // Update task counts
        const updatedData = { ...data, tasks: updatedTasks }
        updatedData.taskCounts.active = Math.max(0, updatedData.taskCounts.active - 1)
        updatedData.taskCounts.completed = updatedData.taskCounts.completed + 1
        
        // Update localStorage
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedInUser) {
            loggedInUser.data = updatedData
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        }
    }

    const handleFailTask = (taskIndex) => {
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            active: false,
            failed: true
        }
        setTasks(updatedTasks)
        
        // Update task counts
        const updatedData = { ...data, tasks: updatedTasks }
        updatedData.taskCounts.active = Math.max(0, updatedData.taskCounts.active - 1)
        updatedData.taskCounts.failed = updatedData.taskCounts.failed + 1
        
        // Update localStorage
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedInUser) {
            loggedInUser.data = updatedData
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        }
    }

    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} index={idx} onComplete={() => handleCompleteTask(idx)} onFail={() => handleFailTask(idx)} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} index={idx} onAccept={() => handleAcceptTask(idx)} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
                return null
            })}
        </div>
    )
}

export default TaskList