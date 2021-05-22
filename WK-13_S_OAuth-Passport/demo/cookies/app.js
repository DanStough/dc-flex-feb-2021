const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())

app.use(cookieParser('super secret'))

app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))

app.get('/', (req, res) => {
    console.log(req.session)
    console.log("Hello world")
    res.send(`<h1>Hello world</h1>
    <h2>Session (on Server)</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    <h2>Unsigned Cookies (from browser)</h2>
    <pre>${JSON.stringify(req.cookies, null, '\t')}</pre>
    <h2>Signed Cookies (from browser)</h2>
    <pre>${JSON.stringify(req.signedCookies, null, '\t')}</pre>`)
})

app.get('/setmyusername', (req, res) => {
    req.session.username = "Harry Styles"
    res.send(`<h1>You username is now Harry</h1>`)
})

app.get('/setcookie', (req, res) => {
    res.cookie('password', 'cupcakes')
    res.send('I sent your cookies')
})

app.listen(3001, () => {
    console.log("Server started") 
})
