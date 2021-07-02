import { useState } from 'react'

export const Post = ({ item }) => {

    const [comments, setComments] = useState([])
    const [commentsSwitch, setCommentsSwitch] = useState(false)

    const getComments = async () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${item.id}/comments`
        const resp = await fetch(url)
        const json = await resp.json()

        setComments(json)
        setCommentsSwitch(!commentsSwitch)

    }

    return (
        <>
            <li>
                {item.title} - {item.id}

                <button onClick={() => {
                    getComments()
                }}>Show comments</button>
            </li>

            {commentsSwitch && comments.map(comment => <p key={comment.id}>{comment.postId} - {comment.body}</p>)}
            <br />
        </>
    )
}