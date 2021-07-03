 import { useState, useEffect } from "react"
 import useAuth from './useAuth'
 import { Container, Form } from "react-bootstrap"
 import SpotifyWebApi from "spotify-web-api-node"

 const spotifyApi = new SpotifyWebApi({
     clientId: 'eba98dc6511f48a080c04e21836548b5',
 })

 export default function Dashboard({code}) {
     const accessToken = useAuth(code)
     const [search, setSearch] = useState("")
     const [searchResults, setSearchResults] = useState([])

     useEffect(() => {
         if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
     }, [accessToken])

     useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        spotifyApi.searchTracks(search).then(res =>  {
            
        })
     } [search, accessToken])

     return <Container>
         <Form.Control type="search" placeholder="Search for Artists/Songs" value={search} onChange={e => setSearch(e.target.value)} />
     </Container>
 }
