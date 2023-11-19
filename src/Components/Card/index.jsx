import React from 'react'

const Card = ({ content }) => {
  return (
    <div className="p-3 md:p-5 shadow-cards flex flex-col justify-between min-w-[100%] md:min-w-[22rem] max-w-[33rem] rounded-xl bg-white gap-5">
      <div className="flex gap-2 align-middle">
        <h6 className="text-gray900  text-sm md:text-base font-semibold leading-5">
          {content?.name}
        </h6>
        <p className="text-gray400 text-[0.75rem] md:text-sm font-medium">
          {content?.designation}
        </p>
      </div>
      <div>
        <p className="overflow-hidden md:max-h-[4.5em] text-descText text-sm md:text-base font-medium">
          {content?.text}
        </p>
      </div>
    </div>
  )
}

export default Card
