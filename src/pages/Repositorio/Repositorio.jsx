import React from 'react'
import { useParams, Link} from 'react-router-dom'
import api from '../../services/api'

//Importando icones
import {FaArrowLeft, FaSpinner} from 'react-icons/fa'

const Repositorio = () => {
  const [repo, setRepo]=React.useState({})
  const [issues, setIssues]=React.useState([])  
  const [loading, setLoading]=React.useState(true)
   let {repos}=useParams()

    React.useEffect(()=>{

      async function loadRepository(){

        const [repository, issues] =await Promise.all([
          api.get(`/repos/${repos}`),
          api.get(`/repos/${repos}/issues`)
        ])
        
        setRepo(repository.data)
        setIssues(issues.data)
        setLoading(false)
      }

      loadRepository()
    }, [repos])

  return (
    <section className={`h-lvh flex flex-col flex-wrap items-center ${loading? 'justify-center': 'pt-28'}`}>
      <Link className='text-color-white bg-color-blue  p-2 fixed top-10 rounded-md' to='/' end>Home</Link>
      { 
      loading ? 
      
      <div className='animate-spin text-color-blue text-4xl'>
        <FaSpinner/>
        </div>
        :
        <div className='bg-slate-100 shadow-md py-1 px-8 rounded-md w-2/4'>
          {/* <div className=''>
                <FaArrowLeft/>
          </div> */}
          
          {/* Exibindo os detalhes do repositorio */}
          <div className='flex flex-col flex-wrap justify-center items-center'>

          <div className=''>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} className='border-2 border-color-blue h-32 w-32 rounded-full' />
          </div>
          <h2 className='text-2xl font-medium'>{repo.name}</h2>
          <p className='font-light'>{repo.description}</p>
          </div>

            {/* Exibindo os detalhes da Issuesl */}
          <div>
            {
              issues.map((issue)=>(
                <div key={String(issue.id)} className='flex justify-start items-center gap-4 pt-8'>
                  <img src={issue.user.avatar_url} alt={issue.user.login} className='h-16 w-16 rounded-full' />
                  
                  <div className='flex flex-col justify-center items-start text-sm'>
                    <a href={issue.html_url} className='text-blue-700'>{issue.title}</a>

                    {
                      issue.labels.map((label)=>(
                        
                        <span key={String(label.id)} className=' bg-color-black rounded-sm  flex flex-wrap justify-start items-center text-color-white'>
                         {label.name}
                        </span>
                      ))
                    }
                    <span>{issue.user.login}</span>
                  </div>

                </div>

              ))
            }

          </div>
        </div>
      } 
    </section>
  )
}

export default Repositorio
