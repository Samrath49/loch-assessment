import { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(null)

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value
    setEmail(enteredEmail)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValidEmail(emailRegex.test(enteredEmail))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isValidEmail) {
      console.log('Form submitted with email:', email)
      window.location.href = 'https://app.loch.one/welcome'
    } else {
      console.log('Please enter a valid email')
    }
  }

  return (
    <div className="w-full flex justify-center flex-col max-w-[22.85rem]">
      <form
        onSubmit={handleSubmit}
        className="px-4 flex justify-center flex-col"
      >
        <div className="mb-6">
          <label
            className="block text-gray300 text-[1.4375rem] md:text-[2.4375rem] font-medium mb-6 md:mb-8"
            htmlFor="email"
          >
            Sign up for exclusive access.
          </label>
          <input
            className="shadow-inputShadow appearance-none border border-gray100 rounded-lg w-full px-[0.9625rem] md:px-[1.5rem] 
            py-[0.875rem] md:py-[1.25rem] font-medium text-sm md:text-base leading-5 text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-md"
            id="email"
            type="email"
            required="required"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email address"
          />
          {isValidEmail !== null && !isValidEmail && (
            <p className="pt-2 md:pt-4 text-red-500 text-xs text-center">
              Please enter a valid email
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-gray900 hover:bg-gray-700 cursor-pointer hover:border-b-gray-400 hover:shadow-lg
          text-white font-medium leading-5 text-center text-sm md:text-base py-[0.9625rem] px-[0.875rem] md:py-[1.125rem] md:px-[1.75rem] rounded-lg focus:outline-none 
            focus:shadow-outline"
            type="submit"
          >
            Get started
          </button>
        </div>
      </form>
      <div className="pt-[1.875rem] md:pt-[2.27rem]">
        <p className="text-center text-gray900 text-sm md:text-base font-medium leading-5">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  )
}

export default SignUp
