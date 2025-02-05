import React from 'react'
import styles from './Repositorio.module.css'
import {FaGithub, FaPlus} from 'react-icons/fa'

const Repositorio = () => {
    const [newRepo, setNewRepo]=React.useState('')

    function handleClick(){
        localStorage.setItem('repos', JSON.stringify(newRepo))
    }

  return (
    <section className='h-lvh flex flex-col flex-wrap items-center justify-center '>

        <div className={`${styles.contentRepo} bg-slate-50 shadow-md p-4 px-8 rounded-sm`}>

            <div className=' font-medium text-2xl text-color-blue flex justify-start items-center pb-2 gap-3'>
                <span className='text-color-black text-5xl'><FaGithub/></span>
                <h1 className='font-bold'>Meus Repositorios</h1>
            </div>

            <div>
                <form action="" onSubmit={(e)=>e.preventDefault()} className='flex justify-center gap-1'>
                    <input type="text" placeholder='Adicione Repositorio' className='text-base py-2 px-4 text-color-blue rounded-sm' onChange={(e)=>setNewRepo(e.target.value)}  />
                    
                    <button onClick={handleClick} className='bg-color-blue text-color-white py-2 px-4 rounded-sm' type='submit'> 
                        <span><FaPlus/></span>
                    </button>
                </form>
            </div>
        </div>



    </section>
  )
}

export default Repositorio
