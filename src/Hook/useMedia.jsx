import React from 'react'

const useMedia = (media) => {
 const [match, setMatch]=React.useState(null)

  React.useEffect(()=>{

    function tamanhoView(){
        const {matches}=matchMedia(media)
        setMatch(matches)
    }
    tamanhoView()
    window.addEventListener('resize',tamanhoView)

     return ()=>{
      window.removeEventListener('resize', tamanhoView)
     }
     
  },[media])

  return (match)
}

export default useMedia
