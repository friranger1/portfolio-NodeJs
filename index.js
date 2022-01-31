const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const expphdb = require('express-handlebars');
const homeRoutes = require('./routes/home')
const addRoute = require('./routes/add')
const projectsRoute = require('./routes/projects');
const { url } = require('inspector');
const authRoutes = require('./routes/auth')

const app = express();

const hbs = expphdb.create({
    defaultLayout: 'main',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/add', addRoute);
app.use('/projects', projectsRoute)
app.use('/auth', authRoutes)


const PORT = process.env.PORT || 3000;

async function start() {
    try {
        const url = 'mongodb+srv://admin:111111qqq@cluster0.cf33q.mongodb.net/projects'
        await mongoose.connect(url, {
            useNewUrlParser: true,
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
}
start()