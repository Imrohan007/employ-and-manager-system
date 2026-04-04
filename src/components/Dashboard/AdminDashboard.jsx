import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
            <div className='container mx-auto px-6 py-8'>
                {/* Header Section */}
                <div className='mb-8'>
                    <Header changeUser={props.changeUser} />
                </div>

                {/* Create Task Section */}
                <div className='mb-8'>
                    <div className='bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl'>
                        <CreateTask />
                    </div>
                </div>

                {/* All Tasks Section */}
                <div className='bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl'>
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard