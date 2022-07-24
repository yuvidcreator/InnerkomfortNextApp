import React from 'react'

const GradientText = (props) => {
  return (
    <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello {props.text}
        </span>
    </div>
  )
}

export default GradientText