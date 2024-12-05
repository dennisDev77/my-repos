import React from 'react'
import { PlanosMensal } from '../../Data/Data'

const Mensal = () => {

  return (
    <section className='pt-12'>
      <h2 className='text-2xl font-medium pb-4'>Planos Mensal Em Alta</h2>

 <div className='flex flex-wrap justify-start gap-5 items-center'>

    {
        PlanosMensal.map((mensal)=>(
      
      <div className='p-4 shadow shadow-slate-300 rounded-md flex flex-wrap flex-col items-center justify-center gap-2 transition hover:scale-105 hover:shadow-slate-400' key={mensal.id}>
        <div><img src={mensal.img} alt="Carregando o card" className='w-44 rounded-md' /></div>
        <p>{mensal.descricao}</p>
        <button className='flex justify-center items-center gap-1 bg-color-red text-color-white font-light px-4 py-1 rounded-sm'> <span>{mensal.button}</span> <span>{mensal.icon}</span></button>
      </div>
        ))
    }
      </div>
    </section>
  )
}

export default Mensal
