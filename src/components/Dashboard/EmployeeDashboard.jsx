import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='container mx-auto px-6 py-8'>
        {/* Welcome Section */}
        <div className='mb-8'>
          <Header changeUser={props.changeUser} data={props.data} />
        </div>

        {/* Stats Cards */}
        <div className='mb-8'>
          <TaskListNumbers data={props.data} />
        </div>

        {/* Task List Section */}
        <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 shadow-2xl'>
          <TaskList data={props.data} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard