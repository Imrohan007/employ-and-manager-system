import React from 'react'

const AcceptTask = ({data, onComplete, onFail}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded text-white font-medium'>{data.category}</h3>
                <h4 className='text-sm text-white/90'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-white/90'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 gap-2'>
                <button 
                    onClick={onComplete}
                    className='bg-green-500 hover:bg-green-600 text-white rounded font-medium py-2 px-3 text-xs transition-colors duration-200 shadow hover:shadow-md flex-1'
                >
                    Mark as Completed
                </button>
                <button 
                    onClick={onFail}
                    className='bg-red-500 hover:bg-red-600 text-white rounded font-medium py-2 px-3 text-xs transition-colors duration-200 shadow hover:shadow-md flex-1'
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask