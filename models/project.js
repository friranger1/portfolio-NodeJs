const { Schema, model } = require('mongoose')

const project = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    videolink: {
        type: String,
        required: true,
    },
})

module.exports = model('Project', project)













// const { v4: uuidv4 } = require('uuid');
// const fs = require('fs')
// const path = require('path');

// class Project {
//     constructor(title, description, price, image, videolink) {
//         this.title = title
//         this.description = description
//         this.price = price
//         this.image = image
//         this.videolink = videolink
//         this.id = uuidv4();
//     }

//     toJSON() {
//         return {
//             title: this.title,
//             description: this.description,
//             price: this.price,
//             image: this.image,
//             videolink: this.videolink,
//             id: this.id
//         }
//     }

//     static async update(project) {
//         const projects = await Project.getAll()

//         const idx = projects.findIndex(c => c.id === project.id)
//         projects[idx] = project

//         return new Promise((resolve, reject) => {
//             fs.writeFile(
//                 path.join(__dirname, '..', 'data', 'projects.json'),
//                 JSON.stringify(projects),
//                 (err) => {
//                     if (err) {
//                         reject(err)
//                     } else {
//                         resolve()
//                     }
//                 }
//             )
//         })
//     }

//     async save() {
//         const projects = await Project.getAll()

//         projects.push(this.toJSON())
//         return new Promise((resolve, reject) => {
//             fs.writeFile(
//                 path.join(__dirname, '..', 'data', 'projects.json'),
//                 JSON.stringify(projects),
//                 (err) => {
//                     if (err) {
//                         reject(err)
//                         console.log(err)
//                     } else {
//                         resolve()
//                     }
//                 }
//             )
//         })
//     }

//     static getAll() {
//         return new Promise((resolve, reject) => {
//             fs.readFile(
//                 path.join(__dirname, '..', 'data', 'projects.json'),
//                 'utf-8',
//                 (err, content) => {
//                     if (err) {
//                         reject(err)
//                     } else {
//                         resolve(JSON.parse(content))
//                     }
//                 }
//             )
//         })
//     }
//     static async GetById(id) {
//         const projects = await Project.getAll()
//         return projects.find(c => c.id === id)
//     }
// }

// module.exports = Project