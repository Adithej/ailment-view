import React from 'react'
import Button from './ui/Button'

const ContactForm: React.FC = () => {
  return (
    <div className='w-[70%] h-[80%] p-5 bg-neutral-200 shadow-lg rounded-lg overflow-hidden flex flex-col'>
      <h1 className='text-2xl font-palanquin font-bold mb-4'>Add Details</h1>
      <form className='flex flex-col gap-4 font-montserrat'>
        <div className='flex gap-4'>
          <div className='flex-1'>
            <label htmlFor='name' className='block mb-1'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              className='w-full p-2 rounded border'
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='age' className='block mb-1'>
              Age
            </label>
            <input
              type='number'
              id='age'
              placeholder='Enter your age'
              className='w-full p-2 rounded border'
            />
          </div>
        </div>

        <div>
          <label htmlFor='email' className='block mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            className='w-full p-2 rounded border'
          />
        </div>

        <div>
          <label htmlFor='sex' className='block mb-1'>
            Sex
          </label>
          <select id='sex' className='w-full p-2 rounded border'>
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='prefer_not_to_say'>Prefer not to say</option>
          </select>
        </div>

        <div className='flex gap-4'>
          <div className='flex-1'>
            <label htmlFor='city' className='block mb-1'>
              City
            </label>
            <input
              type='text'
              id='city'
              placeholder='Enter your city'
              className='w-full p-2 rounded border'
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='state' className='block mb-1'>
              State
            </label>
            <input
              type='text'
              id='state'
              placeholder='Enter your state'
              className='w-full p-2 rounded border'
            />
          </div>
        </div>

        <div>
          <label htmlFor='pin' className='block mb-1'>
            PIN
          </label>
          <input
            type='text'
            id='pin'
            placeholder='Enter your PIN'
            className='w-full p-2 rounded border'
          />
        </div>

        <Button primary type='submit' className='p-4 mt-3'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
