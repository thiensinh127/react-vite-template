import React from 'react'

export interface HrosInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: number
  fullWidth?: boolean
  classes?: React.ComponentProps<'button'>['className']
  onClick?: () => void
}

const HrosInput: React.FC<HrosInputProps> = ({
  size = 24,
  fullWidth = false,
  classes = '',
  onClick,
  ...rest
}) => {
  const getClasses = () => {
    let inputClass = `rounded-lg px-2 py-1 border`
    if (fullWidth) inputClass += ' w-full'
    if (classes) {
      inputClass += ` ${classes}`
    }
    return inputClass
  }
  return (
    <input
      size={size}
      onClick={onClick}
      className={getClasses()}
      {...rest}
    ></input>
  )
}

export default HrosInput
