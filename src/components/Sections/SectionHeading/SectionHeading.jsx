import React from 'react'
import propTypes from 'prop-types'

const SectionHeading = ({title}) => {
  return (
    <div className='flex flex-wrap my-10 items-center gap-2 '>
        <div></div>
        <p className='text-3xl font-semibold'>{title}</p>
    </div>
  )
}

SectionHeading.defaultProps = {}

SectionHeading.propTypes = {
  title:String
}
export default SectionHeading 