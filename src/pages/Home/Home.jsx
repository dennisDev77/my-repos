import React from 'react'
import styles from './Home.module.css'
import {FaGithub, FaPlus, FaSpinner, FaHeart} from 'react-icons/fa'

//Import API
import api from '../../services/api'

const Home = () => {
    const [newRepo, setNewRepo]=React.useState('')
    const [repo, setRepo]=React.useState([])
    const [loading, setLoading]=React.useState(false)

    // We use useCallback because we work with same useState()
    const handleClick =React.useCallback((e)=>{
        e.preventDefault()
        async function submit(){
            setLoading(true)
           
            try{
            const response= await api.get(`/repos/${newRepo}`)

             const data={
                 name:response.data.full_name
             }

            setRepo([...repo, data])
            // console.log(repo.map((item)=>item.name))
            setNewRepo('')

        }catch(err){
            console.log(err.message)

        }finally{
            setLoading(false)
            
        }
        }
        
        submit()
    }, [repo, newRepo, loading])    


  return (
    <section className='h-lvh flex flex-col flex-wrap items-center justify-center '>

        <div className={`${styles.contentRepo} bg-slate-100 shadow-md py-1 px-8 rounded-md h-48 flex flex-wrap flex-col justify-center `}>

            {/* Title Repositories */}
            <div className=' font-medium text-2xl text-color-blue flex justify-start items-center pb-2 gap-3'>
                <span className='text-color-black text-5xl'><FaGithub/></span>
                <h1 className='font-bold'>My Repos Github</h1>
            </div>

            {/* Form to input Repositories */}
            <div>
                <form action="" onSubmit={handleClick} className='flex justify-center '>
                    <input type="text" placeholder='Adicione Repositorio' className='text-base py-2 px-4 text-color-blue' value={newRepo} onChange={(e)=>setNewRepo(e.target.value)}  />
                    
                   { loading?
                   <button onClick={handleClick} className='bg-color-blue text-color-white py-2 px-4 flex justify-center items-center' type='submit' disabled> 
                        {loading ?
                        <span className={`${styles.spin}`}><FaSpinner/></span>:
                        <span><FaPlus/></span>
                    }
                    </button>
                    :
                   <button onClick={handleClick} className='bg-color-blue text-color-white py-2 px-4 flex justify-center items-center' type='submit'> 
                        {loading ?
                        <span className={`${styles.spin}`}><FaSpinner/></span>:
                        <span><FaPlus/></span>
                    }
                    </button>
                    }
                </form>
            </div>
        </div>

        <div className='bg-slate-100  shadow-md  mt-8 border p-2 h-48 py-2 px-8 rounded-md  w-6/12'>
            <div className='text-2xl font-medium flex items-center justify-center gap-2'>
            <span className='text-color-blue'><FaHeart/></span>
            <h2 className='text-color-black'>Favoritados</h2>
            </div>

            <div className='pt-4'>
                <div>
                    {
                        repo.map((repo)=>{
                            <span key={repo.name}>Gostou: <span className='font-bold'>{repo.name[1]}</span></span>
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Home

