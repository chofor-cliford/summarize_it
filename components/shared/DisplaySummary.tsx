import React from 'react'

const DisplaySummary = ({summary}:DisplaySummaryProps) => {
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='font-satoshi-bold text-gray-600 text-xl'>
            Article <span className='blue_gradient'>Summary</span>
        </h2>
        <div className='summary_box'>
            <p className='font-inter font-medium text-sm text-gray-700'>{summary}</p>
        </div>
    </div>
  )
}

export default DisplaySummary