import { useEffect, useState } from 'react'

export const Comments = () => {
    const [comments, setComments] = useState([])

    const getComments = async () => {
        const resp = await fetch('http://jsonplaceholder.typicode.com/comments')
        const json = await resp.json()

        setComments(json)
    }

    useEffect(() => {
        getComments()

    }, [])

    return (
        <>
            {comments.map(comment => (
                <li key={comment.id}>
                    {comment.email} - {comment.body}
                    <br />
                    <br />
                </li>
            ))}
        </>
    )
}