import React from 'react'

const CheckBoxBtn = ({ id, checked, handleChange }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => handleChange(!checked)}
      />
    </div>
  )
}

export default CheckBoxBtn
