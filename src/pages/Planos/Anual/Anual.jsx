import React from 'react'
import {PlanosAnual} from '../../Data/Data' 

const Anual = () => {
  return (
    <section className='pt-12'>
       <h2 className='text-2xl font-medium pb-4'>Planos Anuais Em Alta</h2>

       <div className='flex flex-wrap justify-start gap-5 items-center'>

       {
        PlanosAnual.map((anual)=>(
      
      <div className='p-4 shadow shadow-slate-300 rounded-md flex flex-wrap flex-col items-center justify-center gap-2 transition hover:scale-105  hover:shadow-slate-400' key={anual.id}>
        <div><img src={anual.img} alt="Carregando o card" className='w-44 rounded-md' /></div>
        <p>{anual.descricao}</p>
        <button className='flex justify-center items-center gap-1 bg-color-red text-color-white font-light px-4 py-1 rounded-sm'> <span>{anual.button}</span> <span>{anual.icon}</span></button>
      </div>
        ))
    }

       </div>
    </section>
  )
}

export default Anual
