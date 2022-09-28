import React from 'react'

const Placeholder = ({ title }) => {
  return (
    <div>
      <h1
        className=' placeholder-header'
        style={{
          margin: '5rem',
        }}
      >
        {title}
      </h1>
      {/* {      <div className='placeholder-wrapper'>
        <div className='placeholder-container'>
          <div className='title-container'>
            <h1 className='placeholder-title'>{title} </h1>
          </div>
          <div className='title-container'>
            <h1 className='placeholder-title'> {title} </h1>
          </div>
        </div>
      </div>} */}
    </div>
  )
}

export default Placeholder
