import { useEffect, useState} from 'react'

export const Albums = () => {
    const [albums, setAlbums] = useState([])

    const getAlbums = async () => {
        const resp = await fetch('http://jsonplaceholder.typicode.com/albums')
        const json = await resp.json()

        setAlbums(json)
    }

    useEffect(() => {
        getAlbums()

    }, [])

    return (
        <>
        {albums.map(album => <li key={album.id}> {album.userId} - {album.title}</li>)}
        </>
    )
}