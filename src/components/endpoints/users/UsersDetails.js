import { useEffect, useState } from 'react';
import { getUser } from "../../../services/AllServices";

export const UserDetails = ({match: {params: {id}}, location: {state}}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        state
            ? setUser({...state.item})
            : getUser(id).then(valeu => setUser(valeu.data))
    }, [id, state])

    if (!user) return 'loading...';

    const { name, username, email, address: { street, city } } = user;

    return (
        <>
            <h1>Hello, my name is {name} {username}</h1>
            <div>
                <h2>Sms about me</h2>
                <p>Email - {email}</p>
                <p>Live in {city} on {street}</p>
            </div>
        </>
    )
}
