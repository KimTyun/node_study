const express = require('express')
require('dotenv').config()
const path = require('path')

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'), express.static(path.join(__dirname, 'public')), express.json(), express.urlencoded({ extended: false }), cookieParser('my-secret-key'))

app.listen(app.get('port'), () => {
   console.log('서버작동중.', 'http://localhost:8000')
})
