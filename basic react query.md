### Frist wrap app.js codes with this wrapers.....

```js
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        ...
        ...
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}


```

#### Basic use in component file 
```js 
import { useQuery } from 'react-query'
import axios from 'axios'

const fetcher = () => {
  return axios.get('http://localhost:4000/superheroes')
}
const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes',fetcher)
} 


export const HeroesPage = () => {

 if (isError) {
    return <h2>{error.message}</h2>
  }

  if (isLoading) {
    return <h2>Loading</h2>
  }

  return (<>
    <h2>React Query Super Heroes Page</h2>
    
    <button onClick={refetch}>Fetch</button>
    
    {data?.data.map((item) => {
      return <div key={item.id}>{item.name}</div>
    })}
  </>
  )
}


```

### build a custom hooks to query data

hooks/useHeroListQ.js
```js

import { useQuery } from 'react-query'
import axios from 'axios'


const onSuccess = (data) => {
  // console.log('Perform side effect after data fetching ', data)
}
const onError = (err) => {
  // console.log('Perform side effect after encountering error', err)
}

const fetcher = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const useHeroListQ = () => {
  return useQuery('super-heroes',
    fetcher,
    {
      cacheTime: 5000, // default 5 min
      onSuccess,
      onError

    }
  )
} 
```

**Then use in component file**

```js
  import { useHeroListQ } from '../hooks/useHeroListQ';
  
  const { isLoading, data, isError, error, isFetching, refetch } = useHeroListQ()
 ```
  
