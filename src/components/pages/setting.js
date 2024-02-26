import React, { useEffect, useState } from 'react'
import Loading from '../loading/loading'
const Setting = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setIsLoading(false)
  },[])
  return (
    <>
   
    {
      isLoading ? (<Loading/>) :(
        <div>Setting</div>
      )
    }
    
    </>
  )
}

export default Setting