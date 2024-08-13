import Button from './ui/Button'
import illustration from '../assets/illustration.svg'
import { useNavigate } from 'react-router-dom'

const ContactCard: React.FC = () => {
  const naviagte = useNavigate()

  return (
    <div className='w-full max-w-[90%] bg-neutral-200 shadow-lg rounded-lg overflow-hidden min-h-[30%] flex'>
      <div className='w-1/2 relative'>
        <img
          src={illustration}
          alt='Contact illustration'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>

      <div className='w-1/2 p-6 flex flex-col justify-center items-center'>
        <h5 className='mb-4 text-3xl font-bold text-gray-900 font-montserrat'>
          Create Contact
        </h5>
        <p className='mb-6 text-gray-700 font-montserrat'>
          Add a new contact to your list by clicking the button below.
        </p>
        <Button
          primary
          className='py-2 px-6'
          onClick={() => naviagte('/contact/new')}
        >
          Add Contact
        </Button>
      </div>
    </div>
  )
}

export default ContactCard
