import './CircleButton.css'
import React from 'react'

type CircleButtonProps = {
  children: React.ReactNode;
}

function CircleButton({ children }: CircleButtonProps){
  return(
    <button className="circleButton">
        {children}
    </button>
  )
}

export default CircleButton