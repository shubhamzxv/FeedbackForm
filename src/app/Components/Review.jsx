import React from 'react'
import Star from './Star'
import YesNo from './YesNo'
import PraiseOptions from './PraiseOptions'

const Review = () => {
  return (
    <div>
      <div>
        <p className='text-lg font-semibold'>Safety</p>
        <p className='mb-2 text-gray-500'>How safe did you feel with Traustip?</p>
        <Star />
      </div>

      <div className='mt-10'>
        <p className='mt-2 text-lg font-semibold'>Communication</p>
        <p className='mb-2 text-gray-500'>How easy was to communicate with Trausti?</p>
        <Star />
      </div>

      <div className='mt-10'>
        <p className='mt-2 text-lg font-semibold'>Would you recommend Trausti?</p>
        <p className='mb-2 text-gray-500'>Your opinion won't be posted publicly.</p>
        <YesNo />
      </div>

      <div className='mt-10'>
        <p className='mt-2 text-lg font-semibold'>Praise</p>
        <p className='mb-2 text-gray-500'>What traits best describe Trausti?</p>
        <PraiseOptions />
      </div>

    </div>
  )
}

export default Review