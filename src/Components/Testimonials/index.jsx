import React from 'react'
import { clientTestimonials } from '../../constants'
import Card from '../Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useViewport } from '../../context/ViewportContext'

const Testimonials = () => {
  const viewport = useViewport()
  return (
    <div className="w-full relative">
      <div className="">
        <h6 className="text-[1.2rem] md:text-[1.5625rem] font-medium leading-3 md:leading-7 text-main text-start lg:text-end">
          Testimonials
        </h6>
        <div className="pt-3 pb-4 md:pt-[1.25rem] md:pb-[2.125rem]">
          <hr style={{ borderColor: 'rgba(229, 229, 230, 0.50)' }} />
        </div>

        <div className="flex gap-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={
              !viewport
                ? '1'
                : viewport === 'xs'
                  ? '1.25'
                  : viewport === 'sm'
                    ? '1.75'
                    : viewport === 'md'
                      ? '1'
                      : viewport === 'lg'
                        ? '1'
                        : viewport === 'xl'
                          ? '1'
                          : '2'
            }
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className="flex justify-center testimonial-container z-10 "
          >
            {clientTestimonials.map((testimony, i) => (
              <SwiperSlide key={i}>
                <Card content={testimony} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute z-0 bottom-0 left-0">
          <img src="/logo.svg" alt="Loch" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
