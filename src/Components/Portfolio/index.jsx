import React from 'react'

const Portfolio = () => {
  return (
    <div className="flex flex-col-reverse pb-10 md:pb-0 xl:flex-row py-3 justify-between">
      <div className="xs:w-[60%] sm:w-[50%] md:w-[40%] mb-10 lg:w-[20rem] object-contain overflow-hidden rounded-xl">
        <img src="/images/cohorts.png" alt="Cohort Image" />
      </div>
      <div className="flex flex-col py-4 gap-2 md:gap-4 items-start lg:items-end">
        <img
          src="icons/Eye.svg"
          className="select-none w-6 h-6 md:w-8 md:h-8"
        />
        <h2 className="lg:max-w-[20rem] text-main text-[1.2rem] md:text-[1.9375rem] font-medium leading-[1.75rem] md:leading-[2.325rem] text-left lg:text-right">
          Watch what the whales are doing
        </h2>
        <p className="lg:max-w-[19.0625rem] text-left lg:text-right text-main text-sm md:text-base opacity-70 font-medium">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </div>
  )
}

export default Portfolio
