import React from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

//Importando icones
import {FaArrowLeft} from 'react-icons/fa'

const Repositorio = () => {
  const [repo, setRepo]=React.useState({})
  const [issues, setIssues]=React.useState([])  
  const [pulls, setPulls]=React.useState([])
  const [loading, setLoading]=React.useState(true)
   let {repos}=useParams()

    React.useEffect(()=>{

      async function loadRepository(){

        const [repository,pulls, issues] =await Promise.all([
          api.get(`/repos/${repos}`),
          api.get(`/repos/${repos}/pulls`),
          api.get(`/repos/${repos}/issues`, {
            params:{
              state:'open',
              per_page:5
            }
          })
        ])
        
        setRepo(repository.data)
        setPulls(pulls.data)
        console.log(repository.data)
        setIssues(issues.data)
        setLoading(false)
      }

      loadRepository()
    }, [repos])

  return (
    <section className='h-lvh flex flex-col flex-wrap items-center pt-28'>
      { loading ? 

       <div>Carregando</div>:

        <div className='bg-slate-100 shadow-md py-1 px-8 rounded-md w-6/12'>
          {/* <div className=''>
                <FaArrowLeft/>
          </div> */}

          <div className='flex flex-col flex-wrap justify-center items-center'>

          <div className=''>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} className='border-2 border-color-blue h-32 w-32 rounded-full' />
          </div>

          <h2 className='text-2xl font-medium'>{repo.name}</h2>
          <p className='font-light'>{repo.description}</p>
          </div>
        </div>
      } 
    </section>
  )
}

export default Repositorio
