import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.webp'
import profile from '../../assets/profile.png'
import { FaCartShopping } from "react-icons/fa6";
import styles from './Header.module.css' 

const Header = () => {

  return (

    <section className='border flex flex-wrap  justify-between items-center px-4' >
        
        <Link to='/' className={styles.logo}>
            <img src={logo} alt="Carregndo o logotipo" />
        </Link>

        <div className='menus'>
            <Link to='/'>Home</Link>
            <Link to=''>Pacotes Mensal</Link>
            <Link to=''>Pacotes Anuais</Link>
            <Link to=''>Suporte</Link>
        </div>

        <div className='config flex flex-wrap justify-between items-center gap-8 px-2 border'>

            <div className='car'>
                
                <Link className='text-3xl text-color-red'>
                <FaCartShopping/>
                </Link>

                {/* <span>
                
                </span> */}
            </div>

            <Link className={`${styles.profile} p-2`}>
                <span><img src={profile} alt="Carregando Perfil" /></span>
            </Link>
        </div>
    </section>
  )
}

export default Header
