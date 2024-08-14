import { Sidebar, CasesLineGraph, CasesWorldMap } from '../components'

const Graphs = () => {
  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-dvh'>
      <section>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col h-full gap-5'>
        <div className='bg-stone-300 flex h-[40%] pl-[10%] pt-6 gap-4 pr-5'>
          <CasesLineGraph />
        </div>
        <div className='h-[55%] pl-[10%] pr-4'>
          <CasesWorldMap />
        </div>
      </section>
    </main>
  )
}

export default Graphs
