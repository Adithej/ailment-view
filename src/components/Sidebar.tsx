const Sidebar = () => {
  return (
    <section className='flex flex-col bg-neutral-300 h-full'>
      <nav className='flex-grow py-5'>
        <button
          type='button'
          className='text-white bg-neutral-700 w-full font-palanquin text-sm px-5 py-4 
          text-center rounded-r-lg'
        >
          Contact
        </button>

        <button
          type='button'
          className='text-white bg-neutral-400 w-full font-palanquin text-sm px-5 py-4 
          text-center rounded-r-lg hover:bg-neutral-700'
        >
          Charts & Map
        </button>
      </nav>
      <div className='text-center text-xs text-neutral-800 p-2'>
        <span>Copyright &copy; Ailment View 2024</span>
      </div>
    </section>
  )
}

export default Sidebar
