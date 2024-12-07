import React from 'react'
import styles from './Footer.module.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import logo from '/logo.webp'
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineTv } from "react-icons/md";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className=' px-6 py-4 pt-10'>

    <div className='flex flex-wrap justify-around '>

      <div className=' w-2/4'>
       <img src={logo} alt="Erro ao carregar o logo" style={{width:'10rem'}}/>
       <p className='text-justify text-sm text-gray-300 font-light'>ATIVARECARGAS é uma revenda de Gift Card dos mais variados segmentos. Isto significa que não é responsável por adicionar ou controlar conteúdo. Os usuários são responsáveis por baixar, instalar, alterar e adicionar seu próprio conteúdo conforme o Termo de Aceite. A ATIVARECARGAS não se responsabiliza pela perda do Gift Card.</p>
      </div>

      <div className=''>
        <h2 className='text-color-white text-xl font-medium'>Download</h2>   
        <div className='flex flex-col flex-wrap text-gray-300 justify-center items-start font-light text-sm gap-1'>

          <Link className='flex flex-wrap justify-center items-center gap-1'>
          <span><MdOutlineTv/></span> <span>RedPlay para TV</span> 
          </Link>

          <Link className='flex flex-wrap justify-center items-center gap-1'>
          <span><FaMobileAlt/></span> <span>RedPlay para Celular</span> 
          </Link>

        </div>
      </div>

      <div className=''>
        <h2 className='text-color-white text-xl font-medium'>Contacto</h2>   
        <div className='flex flex-col flex-wrap text-gray-300 justify-center items-start font-light gap-1 text-sm'>

          <div className='flex flex-wrap justify-center items-center gap-1'>
          <span><MdEmail/></span> <span>faleconnosco@gmail.com</span> 
          </div>

          <div className='flex flex-wrap justify-center items-center gap-1'>
          <span><MdLocalPhone/></span> <span>(++244) 923-454-344</span> 
          </div>
          <div className='flex flex-wrap justify-center items-center gap-1'>
          <span><MdLocalPhone/></span> <span>(++244) 923-454-344</span> 
          </div>
          <div className='flex flex-wrap justify-center items-center gap-1'>
          <span><MdLocalPhone/></span> <span>(++244) 923-454-344</span> 
          </div>

        </div>
      </div>

      </div>

      <div className={` ${styles.linhaRodape} text-color-white text-center pt-4 text-sm font-light`}>
        <p>©2024 ativarecargas | Todos os direitos reservados.</p>
      </div>


    </footer>
  )
}

export default Footer
