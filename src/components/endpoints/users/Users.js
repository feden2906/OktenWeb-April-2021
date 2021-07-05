import { useEffect, useState } from 'react';
import { getUsers } from '../../../services/AllServices';
import { User } from './User';

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       getUsers().then(value => setUsers(value.data));
    }, [])

    return (
        <>
            {users && users.map(user => <User key={user.id} item={user} />)}
        </>
    )
}
