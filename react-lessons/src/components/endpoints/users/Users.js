import { useEffect, useState } from 'react';
import { User } from './User'

export const Users = () => {
    const [users, setUsers] = useState([])


    const getUsers = async () => {
        const resp = await fetch('http://jsonplaceholder.typicode.com/users')
        const json = await resp.json()

        setUsers(json)
    }

    useEffect(() => {
        getUsers()

    }, [])

    return (
        <>
            {users.map(user => <User key={user.id} item={user} />)}
        </>
    )
}