import React from 'react'
import styles from './Home.module.css'
import Mensal from '../Planos/Mensal/Mensal'
import Anual from '../Planos/Anual/Anual'
import {ObterPacote} from '../Data/Data'
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <section className='container pt-10'>
     
      <div className='flex flex-col flex-wrap gap-4'>      
        <h2 className='text-center text-3xl font-semibold'>Encontre seus Combos Da Red Play Aqui !</h2>
        
        <form className='flex flex-wrap justify-center items-center'>

         <input type="search" name="pesquisa" className={` px-5 md:h-14 h-10 w-1/2 text-base bg-color-white text-color-black ${styles.inputSearch}`}placeholder='Procure pelo seu pacote Favorito'/>

         <button className={`  text-color-red px-4 md:h-14 h-10 text-3xl font-extrabold bg-color-white ${styles.buttonSearch}`}> <LiaSearchSolid/></button>

        </form>

        </div>

         <div>
          <Mensal/>
         </div>

         <div>
          <Anual/>
         </div>

         <div className='pt-20 flex flex-wrap justify-center items-center gap-10'>
          {
            ObterPacote.map((obter)=>(
             <Link key={obter.id} className='border border-color-red shadow-md shadow-slate-300 rounded-md flex flex-col flex-wrap justify-center items-center w-1/6  h-32'>

                  <span className='text-color-red text-3xl'>{obter.icon}</span>
                  <span className=''>{obter.title}</span>
             </Link>
            ))
          }
        </div>
      
    </section>
  )
}

export default Home
