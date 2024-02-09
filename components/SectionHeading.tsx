import React from 'react'

type SectionHeadingType = {
    children: React.ReactNode
};

function SectionHeading({children}:SectionHeadingType) {
  return (
    <h2 className='text-3xl capitalize font-medium mb-8'>{children}</h2>
  )
}

export default SectionHeading