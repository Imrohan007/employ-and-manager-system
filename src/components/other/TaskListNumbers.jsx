import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      
      {/* New Tasks Card */}
      <div className='group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
        <div className='absolute inset-0 bg-white/10 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500'></div>
        <div className='relative z-10'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4'></path>
              </svg>
            </div>
            <span className='text-white/80 text-sm font-medium'>New</span>
          </div>
          <h2 className='text-4xl font-bold text-white mb-2'>{data.taskCounts.newTask}</h2>
          <h3 className='text-lg font-medium text-white/90'>New Tasks</h3>
        </div>
      </div>

      {/* Completed Tasks Card */}
      <div className='group relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
        <div className='absolute inset-0 bg-white/10 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500'></div>
        <div className='relative z-10'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
              </svg>
            </div>
            <span className='text-white/80 text-sm font-medium'>Done</span>
          </div>
          <h2 className='text-4xl font-bold text-white mb-2'>{data.taskCounts.completed}</h2>
          <h3 className='text-lg font-medium text-white/90'>Completed</h3>
        </div>
      </div>

      {/* Active Tasks Card */}
      <div className='group relative overflow-hidden bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
        <div className='absolute inset-0 bg-white/10 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500'></div>
        <div className='relative z-10'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path>
              </svg>
            </div>
            <span className='text-white/80 text-sm font-medium'>Active</span>
          </div>
          <h2 className='text-4xl font-bold text-white mb-2'>{data.taskCounts.active}</h2>
          <h3 className='text-lg font-medium text-white/90'>Accepted</h3>
        </div>
      </div>

      {/* Failed Tasks Card */}
      <div className='group relative overflow-hidden bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
        <div className='absolute inset-0 bg-white/10 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500'></div>
        <div className='relative z-10'>
          <div className='flex items-center justify-between mb-4'>
            <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </div>
            <span className='text-white/80 text-sm font-medium'>Failed</span>
          </div>
          <h2 className='text-4xl font-bold text-white mb-2'>{data.taskCounts.failed}</h2>
          <h3 className='text-lg font-medium text-white/90'>Failed</h3>
        </div>
      </div>

    </div>
  )
}

export default TaskListNumbers