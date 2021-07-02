import { useEffect, useState} from 'react'
import { Post } from './Post'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const resp = await fetch('http://jsonplaceholder.typicode.com/posts')
        const json = await resp.json()

        setPosts(json)
    }

    useEffect(() => {
        getPosts()

    }, [])

    return (
        <>
        {posts.map(post => <Post key={post.id} item={post}/>)}
        </>
    )
}