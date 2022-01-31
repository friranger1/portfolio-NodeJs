const { Router } = require('express');
const router = Router();
const Project = require('../models/project')

router.get('/', async(req, res) => {
    const projects = await Project.find()
    res.render('index', {
        title: 'friranger',
        isHome: true,
        projects

    });
    console.log(req.body)
})

module.exports = router;