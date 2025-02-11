import React from 'react'
import { useParams} from 'react-router-dom'
import api from '../../services/api'

//Importando icones
import {FaSpinner} from 'react-icons/fa'

const Repositorio = () => {
  //useState()
  const [repo, setRepo]=React.useState({})
  const [issues, setIssues]=React.useState([])  
  const [loading, setLoading]=React.useState(true)
  const [page, setPage]=React.useState(1)
  const [btnIssues, setBtnIssues]=React.useState(true)

   //Get Params
   let {repos}=useParams()

    React.useEffect(()=>{

      async function loadRepository(){

        const [repository, issues] =await Promise.all([
          api.get(`/repos/${repos}`),
          api.get(`/repos/${repos}/issues`, {
            params:{
              per_page:5
            }
          })
        ])
        
        setRepo(repository.data)
        setIssues(issues.data)
        setLoading(false)
      }

      loadRepository()
    }, [repos])

      React.useEffect(()=>{

        async function loadIssues(){
          const response = await api.get(`repos/${repos}/issues`, {
            params:{
              page:page,
              per_page:5
            }
          })
          setIssues(response.data)
        }

        loadIssues()
      },[repos, page])


    function handlePage(action){

      setPage(action==='back' ? page-1 : page+1)
    }

    function handleBtnIssues(){
      setBtnIssues(!btnIssues)
    }
  return (
    <section className={`h-lvh flex flex-col flex-wrap items-center ${loading? 'justify-center': 'pt-28'}`}>
      { 
      loading ? 
      
      <div className='animate-spin text-color-blue text-4xl'>
        <FaSpinner/>
        </div>
        :
        <div className='bg-slate-100 shadow-md py-1 px-8 rounded-md w-2/4 -z-50'>
          
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

            <button className={`border border-color-blue bg-color-white py-1 px-4 rounded-sm`} onClick={handleBtnIssues} type='button'>
            {btnIssues ? 'Aberto' : 'Fechado' }
           </button>

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
                    <span>Autor: {issue.user.login}</span>
                  </div>

                </div>

              ))
            }

          </div>

          {/* Button ... next and back */}
          <div className='py-6 flex justify-between items-center rounded-md'>
            <button onClick={()=>handlePage('back')} type='button' className='bg-color-blue text-color-white py-1 px-4 rounded-sm' disabled={page<2}>Voltar</button>

            <button onClick={()=>handlePage('next')} type='button' className='bg-color-blue text-color-white py-1 px-4 rounded-sm'>Proxima</button>
          </div>
        </div>
      } 
    </section>
  )
}

export default Repositorio
