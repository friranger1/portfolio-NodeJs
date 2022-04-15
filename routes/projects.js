const { Router } = require('express');
const Project = require('../models/project')
const router = Router();
const ctrlTelegram = require('../api/telegramMsg');


router.get('/', async(req, res) => {
    const projects = await Project.find()
    res.render('projects', {
        title: 'Проекты',
        isProjects: true,
        projects
    });
});

router.get('/:id/edit', async(req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    const project = await Project.findById(req.params.id)

    res.render('project-edit', {
        title: `Редактировать ${project.title}`,
        project
    })
})

router.post('/edit', async(req, res) => {
    const { id } = req.body
    delete req.body.id
    await Project.findByIdAndUpdate(id, req.body)
    res.redirect('/projects')

})

router.post('/remove', async(req, res) => {
    try {
        await Project.deleteOne({ _id: req.body.id })
        res.redirect('/projects')
    } catch (e) {
        console.log(e)
    }
})

router.get('/:id', async(req, res) => {
    const project = await Project.findById(req.params.id)
    res.render('project', {
        layout: 'project',
        title: `friranger ${project.title}`,
        project
    })

})



module.exports = router;