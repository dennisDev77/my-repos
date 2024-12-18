import React from 'react'
import styles from './Home.module.css'
import Mensal from '../Planos/Mensal/Mensal'
import Anual from '../Planos/Anual/Anual'
import {ObterPacote} from '../Data/Data'
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'
import card from '../../assets/planos/btv-black.jpg'
import useMedia from '../../Hook/useMedia'

const Home = () => {

  const media=useMedia('(min-width:49rem)')
  console.log(media)

  return (
    <section className=' pt-10 bg-color-white'>
     
      <div className='flex flex-col flex-wrap gap-4'>      
        <h2 className='text-center text-3xl font-semibold pt-4 md:pt-4 px-4 md:px-1'>Encontre seus Combos Da Red Play Aqui !</h2>
        
        <form className='flex flex-wrap justify-center items-center'>

         <input type="search" name="pesquisa" className={` px-5 md:h-14 h-10 w-1/2 text-base bg-color-white text-color-black ${styles.inputSearch}`}placeholder='Procure pelo seu pacote Favorito'/>

          <button className={`  text-color-red px-4 md:h-14 h-10 text-3xl font-extrabold bg-color-white ${styles.buttonSearch}`}> <LiaSearchSolid/></button>
        

        </form>

        </div>

 
        <div className='py-12  flex flex-col justify-center items-center'>
        {/* <h2 className='text-2xl font-medium text-color-black'>Pacotes Disponiveis</h2> */}
  
       <div className='flex flex-wrap justify-center items-center gap-10 px-10'>
         <Link>
         <img src={card} alt="Carregando card"  className='rounded-md md:w-56 w-full'/>
         <p className='text-center text-2xl font-medium text-color-black'>Mensal</p>
         </Link>

         <Link>
         <img src={card} alt="Carregando card"  className='rounded-md md:w-56 w-full'/>
         <p className='text-center text-2xl font-medium text-color-black'>Anual</p>
         </Link>
        </div>
    </div>
     
        <div className='md:pb-20 pb-10 flex flex-wrap flex-row justify-center items-center gap-10'>
          {
            ObterPacote.map((obter)=>(
             <Link to='downloads' key={obter.id} className='shadow-md shadow-slate-300 rounded-full flex flex-col flex-wrap justify-center items-center md:w-32  md:h-32 gap-1 md:hover:translate-y-2 p-4 transition'>

                  <span className='text-color-red text-4xl'>{obter.icon}</span>
                  {media&& 
                  <span className='text-center'>{obter.title}</span>
                  }

             </Link>
            ))
          }
        </div>

          <div className={`bg-color-black mt-10`}>
         <div className=''>
          <Mensal/>
         </div>
        
         <div>
          <Anual/>
         </div>
          </div>



        
      
    </section>
  )
}

export default Home
