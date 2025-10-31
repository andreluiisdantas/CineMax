import './CircleButton.css'
import React from 'react'

type CircleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}

function CircleButton({ children, className, ...rest }: CircleButtonProps) {
  return (
    <button className={`circleButton ${className || ''}`} {...rest}>
      {children}
    </button>
  )
}

export default CircleButton