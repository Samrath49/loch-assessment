import { Notification, Portfolio, Testimonials, SignUp } from './Components'

function App() {
  return (
    <>
      <div className="flex relative flex-col lg:flex-row w-full">
        <div className="select-none flex lg:absolute z-0 w-full lg:w-[55.5%]">
          <div className="select-none relative flex flex-col w-full">
            <div className="select-none absolute w-full h-full -z-10 top-0 left-0">
              <img
                className="w-full h-full object-cover"
                src="/images/bluela.svg"
                alt="Background Image"
              />
            </div>
            <div className="z-20 px-7 py-7 lg:px-16 xl:px-24 md:py-16 lg:py-10 xl:py-14 relative">
              <Notification />
              <Portfolio />
              <Testimonials />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-36 md:py-44 items-center h-full lg:fixed bg-[#FFF] z-10 right-0 w-full lg:w-[45.5%]">
            <SignUp />
        </div>
      </div>
    </>
  )
}

export default App
