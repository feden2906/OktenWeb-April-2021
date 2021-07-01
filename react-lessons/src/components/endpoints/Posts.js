import { useEffect, useState} from 'react'

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
        {posts.map(post => <li id={post.title}> {post.id} - {post.title}</li>)}
        </>
    )
}