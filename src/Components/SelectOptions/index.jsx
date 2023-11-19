import React from 'react'

const SelectOptions = ({ options }) => {
  return (
    <div className="relative w-[6.15rem]">
      <select
        className="flex w-[6.15rem] rounded-[0.175rem] border-none h-min p-[0.5rem] bg-gray50 
      appearance-none outline-none text-xs text-[#313233] font-medium"
        data-te-select-init
      >
        {options.map((option, index) => (
          <option
            className="h-24 rounded-[0.175rem] text-xs text-[#313233] font-medium"
            value={index}
            key={index}
          >
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 h-min right-0 flex items-center px-2 p-[0.25rem] pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="arrow-drop-down"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path fill="#96979A" d="M7 10l5 5 5-5H7z"></path>
        </svg>
      </div>
    </div>
  )
}

export default SelectOptions
