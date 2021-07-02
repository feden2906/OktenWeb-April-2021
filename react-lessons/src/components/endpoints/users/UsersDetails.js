import { useParams } from "react-router"
import { useEffect, useState } from 'react'
import { UserDetailsReturn } from "./UserDetailsReturn"


export const UserDetails = (props) => {

    const [user, setUser] = useState([])


    const getUser = async (id) => {
        if (!props.location.state) {
            // From location.state
            const url = 'http://jsonplaceholder.typicode.com/users/' + id
            const resp = await fetch(url)
            const json = await resp.json()

            setUser({ ...json })
            console.log('User from json.palace...');
        } else {
            // From json.placeholder.com
            const {item} = props.location.state

            setUser({...item})
            console.log('User from location.state');
        }
    }

    const { id } = useParams()
    useEffect(() => {
        getUser(id)

    }, [])

    return (
        <>
            <UserDetailsReturn item={user} />
        </>
    )
}