import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components'
import Button from '../components/ui/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { RootState } from '../store'
import { Contact } from '../store/slices/ContactSlice'
import {
  updateContact,
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
} from '../store/slices/ContactSlice'

const ContactDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contact = useSelector(
    (state: RootState) => state.contact.currentContact,
  )
  const [formData, setFormData] = useState<Contact>({
    id: '',
    name: '',
    age: '',
    email: '',
    city: '',
    state: '',
    pin: '',
    sex: '',
    active: '',
  })

  useEffect(() => {
    if (id) {
      dispatch(setCurrentContact(id))
    }
    return () => {
      dispatch(clearCurrentContact())
    }
  }, [dispatch, id])

  useEffect(() => {
    if (contact) {
      setFormData(contact)
    }
  }, [contact])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (id && formData) {
      dispatch(updateContact(formData as any))
      navigate('/contact')
    }
  }

  const handleDelete = () => {
    if (id) {
      dispatch(deleteContact(id))
      navigate('/contact')
    }
  }

  if (!contact) return <div>Loading...</div>

  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-dvh'>
      <section>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col pl-[10%] pt-6'>
        <div className='w-[70%] h-[80%] p-5 bg-neutral-200 shadow-lg rounded-lg overflow-hidden flex flex-col'>
          <h1 className='text-2xl font-palanquin font-bold mb-4'>
            Edit Details
          </h1>
          <form
            onSubmit={handleUpdate}
            className='flex flex-col gap-4 font-montserrat'
          >
            <div className='flex gap-4'>
              <div className='flex-1'>
                <label htmlFor='name' className='block mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name || ''}
                  onChange={handleChange}
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
                  name='age'
                  value={formData.age || ''}
                  onChange={handleChange}
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
                name='email'
                value={formData.email || ''}
                onChange={handleChange}
                placeholder='Enter your email'
                className='w-full p-2 rounded border'
              />
            </div>

            <div className='flex gap-4'>
              <div className='flex-1'>
                <label htmlFor='sex' className='block mb-1'>
                  Sex
                </label>
                <select
                  id='sex'
                  name='sex'
                  value={formData.sex || ''}
                  onChange={handleChange}
                  className='w-full p-2 rounded border'
                >
                  <option value=''>Select</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='prefer_not_to_say'>Prefer not to say</option>
                </select>
              </div>

              <div className='flex-1'>
                <label htmlFor='active' className='block mb-1'>
                  IsActive
                </label>
                <select
                  id='active'
                  name='active'
                  value={formData.active || ''}
                  onChange={handleChange}
                  className='w-full p-2 rounded border'
                >
                  <option value=''>Select</option>
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex-1'>
                <label htmlFor='city' className='block mb-1'>
                  City
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={formData.city || ''}
                  onChange={handleChange}
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
                  name='state'
                  value={formData.state || ''}
                  onChange={handleChange}
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
                name='pin'
                value={formData.pin || ''}
                onChange={handleChange}
                placeholder='Enter your PIN'
                className='w-full p-2 rounded border'
              />
            </div>
            <div className='flex gap-3 justify-end'>
              <Button warning type='submit' className='p-4 mt-3 w-20'>
                Save
              </Button>
              <Button danger onClick={handleDelete} className='p-4 mt-3'>
                Delete
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactDetail
