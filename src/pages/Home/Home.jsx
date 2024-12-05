import React from 'react'
import styles from './Home.module.css'
import Banner from '../../assets/banner.png'

import { LiaSearchSolid } from "react-icons/lia";
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

         
      
    </section>
  )
}

export default Home
