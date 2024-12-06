import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (

    <footer className='border px-6 py-4'>

    <div className='flex flex-wrap justify-between '>

      <div className='border w-8/12'>
       <h2 className='text-color-black text-2xl font-medium'>Sobre</h2>
       <p>ATIVARECARGAS é uma revenda de Gift Card dos mais variados segmentos. Isto significa que não é responsável por adicionar ou controlar conteúdo. Os usuários são responsáveis por baixar, instalar, alterar e adicionar seu próprio conteúdo conforme o Termo de Aceite. A ATIVARECARGAS não se responsabiliza pela perda do Gift Card.</p>
      </div>

      <div className='border'>
        <h2 className='text-color-black text-2xl font-medium'>Contacto</h2>
       
        <div>

          <div>
          <span>entreemcontact@gmail.com</span> <span><MdEmail/></span>
          </div>

          <div>
          <span>(++244) 923-454-344</span> <span><MdLocalPhone/></span>
          </div>
          <div>
          <span>(++244) 923-454-344</span> <span><MdLocalPhone/></span>
          </div>
          <div>
          <span>(++244) 923-454-344</span> <span><MdLocalPhone/></span>
          </div>

        </div>
      </div>

      </div>

      <div className='border'>
        <p>Todos Os direitos Reservados</p>
      </div>


    </footer>
  )
}

export default Footer
