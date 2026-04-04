import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-red-400 to-red-500 rounded-xl shadow-lg opacity-90'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-gray-600 text-sm px-3 py-1 rounded text-white font-medium'>{data.category}</h3>
                <h4 className='text-sm text-white/90'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-white/90'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <div className='w-full bg-red-600 rounded font-medium py-2 px-4 text-xs text-white text-center flex items-center justify-center gap-2'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                    Failed
                </div>
            </div>
        </div>
  )
}

export default FailedTask