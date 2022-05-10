### List Post

```js
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'



function PostListRQ() {

  const fetchPosts = () => axios.get("http://localhost:4000/posts")
  const { data, isError, error, isLoading, refetch } = useQuery('post-list', fetchPosts)

  return (

    <div>
      <button className='btn' onClick={refetch}>Refresh</button>
      {isLoading && (<div>Loading Posts</div>)}
      {isError && (<div>{error.message}</div>)}
      <hr />

      <hr />
      {data?.data.map(item => (
        <div className='card' key={item.id}>
          <div className='body'>
            <h4 ><Link to={`/post/${item.id}`}>{item.title}</Link></h4>
          </div>
        </div>
      ))}


      {data?.data.length == 0 && (<div>No Posts</div>)}
    </div>
  )
}

export default PostListRQ
```



### SinglePost.jsx

```js
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

// fetcher
const fetchSinglePost = ({ queryKey }) => {
    const Id = queryKey[1]
    return axios.get(`http://localhost:4000/posts/${Id}`)
}


function SinglePost() {
    const { postId } = useParams()
    const { isLoading, data, isError, error } = useQuery(['single-post', postId], fetchSinglePost)


    return (
        <div>
            {isLoading && (<div>Loading Posts</div>)}
            {isError && (<div>{error.message}</div>)}
            <hr />
            <p>{data?.data.id}</p>
            <p>{data?.data.title}</p>
            <p>{data?.data.body}</p>
        </div>
    )
}

export default SinglePost
```

### Add Post query

```js
import axios from 'axios'
import React, { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'

function AddPost() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    // fetcher
    const AddPostFetcher = data => {
        return axios.post('http://localhost:4000/posts', data)
    }
    
    // useMutation
    const queryClient = useQueryClient()
    const { isError, isLoading, mutate } = useMutation(AddPostFetcher, {
        onSuccess: () => {
            queryClient.invalidateQueries('post-list')
        },
    })


    const handleSubmit = () => {
        console.log({ title, body });
        mutate({ title, body })
    }
    return (
        <div className='card'>
            <div>
                <input
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                {!isLoading && (<button onClick={handleSubmit}>Add Post</button>)}
                {isLoading && (<button disabled>Loading</button>)}
            </div>
        </div>
    )
}

export default AddPost
```


