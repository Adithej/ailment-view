import { Sidebar, ContactCard, ContactList } from '../components'

const Contact = () => {
  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-dvh'>
      <section>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col pl-[10%] pt-6 gap-8'>
        <ContactCard />
        <ContactList />
      </section>
    </main>
  )
}

export default Contact
