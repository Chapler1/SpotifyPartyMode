const express = require('express')
const cors = require("cors")
const spotifyWebApi = require('spotify-web-api-node')
const app = express()
app.use(cors())

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'eba98dc6511f48a080c04e21836548b5',
        clientSecret: '1feb253ec4e940e8a4e281093aebe369',
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in, 
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)