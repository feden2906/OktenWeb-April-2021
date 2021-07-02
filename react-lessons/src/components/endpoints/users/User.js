import { useState } from 'react';
import { Link } from 'react-router-dom'

export const User = ({ item }) => {
    const [posts, setPosts] = useState([])
    const [touglePosts, setTouglePosts] = useState(false)

    const getPosts = async (id) => {
        const resp = await fetch('http://jsonplaceholder.typicode.com/users/' + id + '/posts')
        const json = await resp.json()

        setPosts(json)
        setTouglePosts(!touglePosts)

    }

    return (
        <>
            <li>
                {item.name}

                {/* User`s posts */}
                <button onClick={() => {
                    getPosts(item.id)
                }}>His posts</button>

                {/* Users detalies */}
                <Link to={{
                    pathname: '/users/' + item.id,
                    state: { item }
                }}>
                    User details
                </Link>

            </li>

            {touglePosts && posts.map(post => <p key={post.id}>{post.title} - {post.id}</p>)}
            <br />

        </>
    )
}

