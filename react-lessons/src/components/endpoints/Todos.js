import { useEffect, useState } from 'react'

export const Todos = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const resp = await fetch('http://jsonplaceholder.typicode.com/todos')
        const json = await resp.json()

        setTodos(json)
    }

    useEffect(() => {
        getTodos()

    }, [])

    return (
        <>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title} - {todo.completed.toString()}
                    <br />
                    <hr />
                </li>
            ))}
        </>
    )
}