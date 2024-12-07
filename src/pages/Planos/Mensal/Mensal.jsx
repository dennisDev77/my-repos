import React from 'react'
import { PlanosMensal } from '../../Data/Data'
import {Link} from 'react-router-dom'

const Mensal = () => {

  return (
    <section className='pt-12'>
      <h2 className='text-2xl font-medium pb-4 text-center text-color-white'>Planos Mensal Em Alta</h2>

 <div className='flex flex-wrap justify-center gap-5 items-center'>

    {
        PlanosMensal.map((mensal)=>(
      
      <div className='p-2 bg-color-black rounded-md flex flex-wrap flex-col items-center justify-center gap-2 transition hover:scale-105 shadow shadow-color-red' key={mensal.id}>
        <div><img src={mensal.img} alt="Carregando o card" className='w-56 rounded-md' /></div>
        <p className='text-color-white'>{mensal.descricao}</p>
        <button className='flex justify-center items-center gap-1 bg-color-white text-color-black font-light px-10 py-1 rounded-full'> <span>{mensal.button}</span> <span>{mensal.icon}</span></button>
      </div>
        ))
    }
    
      </div>

    <div className='flex flex-wrap items-center justify-center pt-3'>

      <Link className='text-gray-400 text-base font-light text-center'>Ver Tudo</Link>
    </div>
    </section>
  )
}

export default Mensal
