import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/logo.webp'
import profile from '../../assets/profile.png'
import { FaCartShopping } from "react-icons/fa6";
import styles from './Header.module.css' 
import useMedia from '../../Hook/useMedia';

const Header = () => {
    const [mobile, setMobile]=React.useState(false)

     const media=useMedia('(max-width:49rem)')
     const mediaMin=useMedia('(min-width:49rem)')
     
     const {pathname}=useLocation()
     React.useEffect(()=>{
            setMobile(false)
     }, [pathname])

  return (

    <section className={`flex flex-wrap  bg-color-white justify-between items-center px-4 shadow-sm sticky w-full ${styles.header} py-4 md:py-0`}>
        
        <Link to='/' className={styles.logo}>
            <img src={logo} alt="Carregndo o logotipo" />
        </Link>
            {/* Estilizando os Menus mobile e Desktop */}
            {
                media?
                <div className={`${styles.menuMbileStyle} ${mobile&& styles.mobileActive} bg-color-white shadow-md p-4 flex flex-col flex-wrap justify-center gap-2 font-light text-base rounded-md`}>
                <Link to='/' className='hover:scale-95 transition'>Home</Link>
                <Link to='mensal' className='hover:scale-95 transition'>Pacotes Mensal</Link>
                <Link to='anual' className='hover:scale-95 transition'>Pacotes Anuais</Link>
                <Link to='suporte' className='hover:scale-95 transition'>Suporte</Link>
              </div>
                :
            <div className='menus text-center flex flex-wrap justify-center items-center gap-3 font-light text-base'>
                <Link to='/' className='hover:scale-95 transition'>Home</Link>
                <Link to='mensal' className='hover:scale-95 transition'>Pacotes Mensal</Link>
                <Link to='anual' className='hover:scale-95 transition'>Pacotes Anuais</Link>
                <Link to='suporte' className='hover:scale-95 transition'>Suporte</Link>
            </div>
            }
        {/* Fim Menu */}

            {
                mediaMin&&
            <div className='flex flex-wrap justify-between items-center md-gap-8 gap-2 px-2 '>

                <div className='car'>
                    
                    <Link className={`${styles.iconBuy} text-3xl flex flex-wrap justify-center items-center md:gap-2 gap-1`}>
                    <span ><FaCartShopping/></span>
                    <span className='text-base'>R$ 00,00</span>
                    </Link>

                    {/* <span>
                    
                    </span> */}
                </div>

                <Link className={`${styles.profile} p-2 flex flex-wrap gap-2 justify-center items-center text-base`}>
                    <span><img src={profile} alt="Carregando Perfil" /></span>
                    <span>Camela</span>
                </Link>
            </div>
            }
         
         {media &&
            <div >
                <button className={`${styles.mobileIcon}`} onClick={()=>setMobile(!mobile)}></button>
         </div>
         }
    </section>
  )
}

export default Header
