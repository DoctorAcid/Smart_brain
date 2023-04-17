const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password: 'juk1213@BD',
        database : 'smart-brain'
    }
});

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.post('/signin', signin.handleSignin(db, bcrypt))

app.post('/register', register.handleRegister(db, bcrypt))

app.get('/profile/:id', profile.handleProfile(db))
 
app.put('/image', image.handleEntry(db))

app.post('/imageurl', (req, res) => image.handleApiCall(req, res))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})