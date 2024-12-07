import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.webp'
import profile from '../../assets/profile.png'
import { FaCartShopping } from "react-icons/fa6";
import styles from './Header.module.css' 

const Header = () => {

  return (

    <section className={`flex flex-wrap  bg-color-white justify-between items-center px-4 shadow-sm sticky w-full ${styles.header} `}>
        
        <Link to='/' className={styles.logo}>
            <img src={logo} alt="Carregndo o logotipo" />
        </Link>

        <div className='menus text-center flex flex-wrap justify-center items-center gap-3 font-light text-base'>
            <Link to='/' className='hover:scale-95 transition'>Home</Link>
            <Link to='' className='hover:scale-95 transition'>Pacotes Mensal</Link>
            <Link to='' className='hover:scale-95 transition'>Pacotes Anuais</Link>
            <Link to='' className='hover:scale-95 transition'>Suporte</Link>
        </div>

        <div className='flex flex-wrap justify-between items-center gap-8 px-2 '>

            <div className='car'>
                
                <Link className={`${styles.iconBuy} text-3xl flex flex-wrap justify-center `}>
                 <span ><FaCartShopping/></span>
                 <span className='text-xl'>R$ 00,00</span>
                </Link>

                {/* <span>
                
                </span> */}
            </div>

            <Link className={`${styles.profile} p-2 flex flex-wrap gap-2 justify-center items-center text-base`}>
                <span><img src={profile} alt="Carregando Perfil" /></span>
                <span>Camela</span>
            </Link>
        </div>
    </section>
  )
}

export default Header
