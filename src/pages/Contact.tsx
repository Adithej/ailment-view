import { Sidebar } from '../components'

const Contact = () => {
  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-dvh'>
      <section>
        <Sidebar />
      </section>
      <section className='bg-stone-300'>Contact Page</section>
    </main>
  )
}

export default Contact
