import React from 'react'
import { Container } from 'react-bootstrap'

const Auth_URL = "https://accounts.spotify.com/authorize?client_id=eba98dc6511f48a080c04e21836548b5&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private%20playlist-read-private&20playlist-read-collaborative"

export default function Login() {
    return <Container>
        <a className="btn btn-success btn-lg" href={Auth_URL}>Login With Spotify</a>
    </Container>

}