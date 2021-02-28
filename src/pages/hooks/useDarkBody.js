import { useEffect } from 'react'

function useDarkBody() {
    useEffect(() => {
      document.body.style.backgroundColor = 'black'
  
      return () => {
        document.body.style.backgroundColor = '#fff'
      }
    })
  }
  
  export default useDarkBody