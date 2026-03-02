import React from 'react'

export const Me = () => {
  return (
    <div className='flex justify-center'>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pushap Raj. All rights reserved.
      </div>
    </div>
  )
}
export default Me;