import React, { useState } from 'react'
import NotificationCard from '../NotificationCard'
import CheckBoxBtn from '../CheckBoxBtn'
import SelectOptions from '../SelectOptions'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { useViewport } from '../../context/ViewportContext'

const Notification = () => {
  const [checkedBalance, setCheckedBalance] = useState(true)
  const [durationChecked, setDurationChecked] = useState(true)
  const viewport = useViewport()

  const handleCheckedBalance = (value) => {
    setCheckedBalance(value)
  }

  const handleDurationChecked = (value) => {
    setDurationChecked(value)
  }

  return (
    <div className="flex flex-col 2xl:flex-row relative justify-between">
      <div className="flex flex-col py-3 sm:py-4 gap-2 sm:gap-4">
        <img
          src="/icons/whiteBell.svg"
          className="select-none w-6 h-6 md:w-8 md:h-8"
        />
        <h2 className="text-main lg:max-w-[19.5625rem] drop-shadow-headingShadow text-[1.2rem] md:text-[1.9375rem] font-medium leading-[1.75rem] md:leading-[2.325rem] text-left">
          Get notified when a highly correlated whale makes a move
        </h2>
        <p className="lg:max-w-[22.0625rem] text-left text-main text-sm md:text-base opacity-70 font-medium">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

      <div className="flex 2xl:absolute top-3 -right-28 align-middle lg:pb-10 xl:pt-4 w-full md:pt-14 z-10 xl:w-[25.4375rem] justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={
            !viewport
              ? '1.25'
              : viewport === 'xs'
                ? '2.5'
                : viewport === 'sm'
                  ? '3'
                  : viewport === 'md'
                    ? '3'
                    : '2'
          }
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="flex justify-center swiper-container z-0 h-[11rem]"
        >
          <SwiperSlide>
            <NotificationCard>
              <div className="flex justify-between items-start">
                <img
                  className="w-[1.25rem] h-[1.25rem] md:w-[1.75rem] md:h-[1.75rem]"
                  src="/icons/bell.svg"
                  alt="Bell"
                />
                <button className="text-gray900 text-[0.56875rem] font-semibold leading-[0.6825rem] text-right">
                  Save
                </button>
              </div>
              <div className="pt-[0.75rem] flex flex-col gap-[0.5rem] md:gap-[0.97rem]">
                <h6 className="text-[0.875rem] text-gray900 font-medium leading-[1.05rem]">{`We’ll be sending notifications to you here`}</h6>
                <input
                  className="shadow-inputShadow appearance-none border border-neutral300 rounded-md w-full px-[0.5rem] 
                py-[0.35rem] md:py-[0.45rem] text-sm leading-3 md:leading-5 text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-md"
                  type="text"
                />
              </div>
            </NotificationCard>
          </SwiperSlide>

          <SwiperSlide>
            <NotificationCard>
              <div className="flex justify-between flex-col h-full">
                <div className="flex justify-between items-start">
                  <img
                    className="w-[1.25rem] h-[1.25rem] md:w-[1.75rem] md:h-[1.75rem]"
                    src="/icons/chart.svg"
                    alt="Charts"
                  />
                  <CheckBoxBtn
                    id={'c1'}
                    checked={checkedBalance}
                    handleChange={handleCheckedBalance}
                  />
                </div>
                <div className="flex flex-col gap-[0.35rem]">
                  <h6 className="text-[0.7rem] text-gray900 font-medium leading-[1.05rem]">{`Notify me when any wallets move more than`}</h6>
                  <SelectOptions
                    options={['$1,000.00', '$1,500.00', '$2,000.00']}
                  />
                </div>
              </div>
            </NotificationCard>
          </SwiperSlide>

          <SwiperSlide>
            <NotificationCard>
              <div className="flex justify-between flex-col h-full">
                <div className="flex justify-between items-start">
                  <img
                    className="w-[1.25rem] h-[1.25rem] md:w-[1.75rem] md:h-[1.75rem]"
                    src="/icons/clock.svg"
                    alt="Clock"
                  />
                  <CheckBoxBtn
                    id={'c2'}
                    checked={durationChecked}
                    handleChange={handleDurationChecked}
                  />
                </div>
                <div className="flex flex-col gap-[0.35rem]">
                  <h6 className="text-[0.7rem] text-gray900 font-medium leading-[1.05rem]">{`Notify me when any wallet dormant for`}</h6>
                  <SelectOptions
                    options={['> 30 days', '> 45 days', '> 60 days']}
                  />
                  <h6 className="text-[0.7rem] text-gray900 font-medium leading-[1.05rem]">{`becomes active`}</h6>
                </div>
              </div>
            </NotificationCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Notification
