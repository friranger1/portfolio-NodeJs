const { Router } = require('express');
const Project = require('../models/project')
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить курс',
        isAdd: true,
    })
});

router.post('/', async(req, res) => {
    // const project = new Project(req.body.title, req.body.description, req.body.price, req.body.image, req.body.videolink)
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        videolink: req.body.videolink,
        image: req.body.image,
    })

    try {
        await project.save()
        res.redirect('/')
    } catch (e) {
        console.log(e)
    }
});
module.exports = router;