import { useQuery } from 'react-query'
import axios from 'axios'
import { useAuth } from './useAuth'




const fetcher = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/')
}

export const useTodosQ = () => {
  const { setAuthUser } = useAuth()

  const onSuccess = (data) => {
    setAuthUser(data)
    // console.log('Perform side effect after data fetching ', data)
  }
  const onError = (err) => {
    // console.log('Perform side effect after encountering error', err)
  }

  return useQuery('todos',
    fetcher,
    {
      cacheTime: 5000, // default 5 min
      onSuccess,
      onError

    }
  )
} 