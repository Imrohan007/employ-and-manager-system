import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg opacity-90'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-green-600 text-sm px-3 py-1 rounded text-white font-medium'>{data.category}</h3>
                <h4 className='text-sm text-white/90'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-white/90'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <div className='w-full bg-green-600 rounded font-medium py-2 px-4 text-xs text-white text-center flex items-center justify-center gap-2'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                    </svg>
                    Completed
                </div>
            </div>
        </div>
  )
}

export default CompleteTask