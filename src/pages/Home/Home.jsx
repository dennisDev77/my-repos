import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

//Import Icons
import {FaGithub, FaPlus, FaSpinner, FaHeart, FaBars, FaTrash} from 'react-icons/fa'

//Import API
import api from '../../services/api'

const Home = () => {
    const [newRepo, setNewRepo]=React.useState('')
    const [repo, setRepo]=React.useState([])
    const [loading, setLoading]=React.useState(false)
    
        // Show Repositories
        React.useEffect(()=>{
         const  repoStorage=localStorage.getItem('repos')
         setRepo(JSON.parse(repoStorage))
        }, [])
        

    // Save the repositories
        React.useEffect(()=>{
            localStorage.setItem('repos', JSON.stringify(repo))
        }, [repo])

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

             const hasRepo=repo.find((repo)=>repo.name===newRepo)
             if(hasRepo){
                 throw new Error('Ja tem um repos com o mesmo nome')
             }
            setRepo([...repo, data])

            setNewRepo('')

        }catch(err){
            console.log(err.message)

        }finally{
            setLoading(false)       
        }
        }
        
        submit()
    }, [repo, newRepo, loading])    

    //Deste jeito teremos toda lista diferente da que for Clicado
    //Usamos ela como forma de apagar um item da lista
    const handleDelete=React.useCallback((itemDelete)=>{
        const deleteRepo=repo.filter((item)=>item.name!==itemDelete)
        setRepo(deleteRepo)
    },[repo])

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
                    <input type="text" placeholder='Add Repos Ex: user/repos' className='text-base py-2 px-4 text-color-blue' value={newRepo} onChange={(e)=>setNewRepo(e.target.value)}  />
                    
                   { loading?
                   <button onClick={handleClick} className='bg-color-blue text-color-white py-2 px-4 flex justify-center items-center' type='submit' disabled> 
                        { loading ?
                        <span className={`${styles.spin}`}><FaSpinner/></span>
                        :
                        <span><FaPlus/></span>
                        }
                    </button>
                    :
                   <button onClick={handleClick} className='bg-color-blue text-color-white py-2 px-4 flex justify-center items-center' type='submit'> 
                        { loading ?
                        <span className={`${styles.spin}`}><FaSpinner/></span>
                        :
                        <span><FaPlus/></span>
                        }
                    </button>
                    }
                </form>
            </div>
        </div>

        <div className='bg-slate-100  shadow-md  mt-8 border p-2 py-2 px-8 rounded-md  w-6/12 pb-6'>
            <div className='text-2xl font-medium flex items-center justify-start gap-2 py-3'>
            <span className='text-color-blue'><FaHeart/></span>
            <h2 className='text-color-black'>Favoritados</h2>
            </div>

            <div className='pt-4 flex flex-col gap-4 '>
                    
                    {
                        repo.map((repos)=>(
                        <div className='flex justify-between gap-4' key={repos.name}>
                            <button className='font-light' onClick={()=>handleDelete(repos.name)} ><FaTrash/></button>
                            <Link className='font-normal' to='/repos'>{repos.name}</Link>
                            <Link className='font-light' to={`/repos/${encodeURIComponent(repos.name)}`}><FaBars/></Link>
                        </div>
                        ))
                    }

            </div>
            
        </div>

    </section>
  )
}

export default Home

