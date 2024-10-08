import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../store'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts)

  return (
    <div className='w-full max-w-full md:max-w-[90%] bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900 font-palanquin'>
          Contacts
        </h3>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50 font-montserrat'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Name
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Age
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Email
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                IsActive
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 font-palanquin'>
            {contacts.map(contact => (
              <tr key={contact.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm font-medium text-gray-900'>
                    {contact.name}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{contact.age}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{contact.email}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{contact.active}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                  <Link
                    to={`/contact/${contact.id}`}
                    className='text-indigo-600 hover:text-indigo-900'
                  >
                    Edit/Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {contacts.length === 0 && (
        <div className='text-center py-4 text-gray-500 font-palanquin'>
          No contacts found.
        </div>
      )}
    </div>
  )
}

export default ContactList
