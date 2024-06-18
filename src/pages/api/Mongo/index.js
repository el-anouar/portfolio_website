

import mongoose from 'mongoose';
import Schema from '../../../models/Schema';
import dbConnect from '../../../utils/mongo';
const fs = require('fs');
const path = require("path");
import jwt from "jsonwebtoken";
export default async function handler(req, res) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    await dbConnect()
    const url = req.url.split('?')[0]
    const query = req.query

    if (url === '/api/Mongo' && req.method === 'DELETE') {
        if (query.type === 'deleteProject') {
            const query1 = {
                projects: {
                    $elemMatch: {
                        _id: new mongoose.Types.ObjectId(query.id)
                    }
                }
            };
            const update = {
                $pull: {
                    projects: {
                        _id: new mongoose.Types.ObjectId(query.id)
                    }
                }
            };
            let id = query.id
            Schema.updateOne(query1, update)
                .then(async (result) => {

                    if (fs.existsSync(path.resolve('./') + '/.next/server/pages/project/' + id + '.html')) {
                        fs.unlink(path.resolve('./') + '/.next/server/pages/project/' + id + '.html', function (err) {
                            if (err) {
                                res.status(500).json({ msg: "failed to delete the " + path.resolve('./') + '/.next/server/pages/project/' + id + '.html' })
                                return;
                            }
                        });
                    }
                    if (fs.existsSync(path.resolve('./') + '/.next/server/pages/project/' + id + '.json')) {
                        fs.unlink(path.resolve('./') + '/.next/server/pages/project/' + id + '.json', function (err) {
                            if (err) {
                                res.status(500).json({ msg: "failed to delete the " + path.resolve('./') + '/.next/server/pages/project/' + id + '.json' })
                                return;
                            }
                        });
                    }
                    try {
                        await res.revalidate('/')
                        await res.revalidate('/project/' + id)
                    } catch (err) {
                        res.status(500).json({ msg: err })
                    }

                    res.status(200).json({ msg: "Project Deleted" })

                })
                .catch(error => {
                    res.status(500).json({ msg: error })
                });
        }
    }
    if (url === '/api/Mongo' && req.method === 'PUT') {
        if (query.type === 'updateProject') {
            const data = JSON.parse(req.body)
            const query1 = {
                projects: {
                    $elemMatch: {
                        _id: new mongoose.Types.ObjectId(query.id)
                    }
                }
            };

            const update = {
                $set: {
                    'projects.$.title': data.title,
                    'projects.$.desc': data.descInput,
                    'projects.$.image': data.descImage,
                    'projects.$.tags': data.tags,
                    'projects.$.editordata': data.dataFromEditor
                }
            };

            Schema.updateOne(query1, update)
                .then(async (result) => {
                    await res.revalidate('/')
                    await res.revalidate('/project/' + query.id)
                    res.status(200).json({ msg: "Updated Successfully" })
                })
                .catch(error => {
                    res.status(200).json({ msg: error })
                });
        }
    }
    if (url === '/api/Mongo' && req.method === 'GET') {


        if (query.type === 'getAdminData') {
            const data = await Schema.find()

            const exists = data !== null && data !== undefined && data.length > 0;


            if (exists === true) {
                res.status(200).json(data)

            } else {
                res.status(500).json({ msg: "data are empty in database" })
            }
        }
    }
    if (url === '/api/Mongo' && req.method === 'GET') {
        if (query.type === 'getTags') {
            const tags = await Schema.find({ "Skills.coding.icons": { $not: { $size: 0 } } }, { "Skills.coding.icons": 1 })

            const exists = tags !== null && tags !== undefined && tags.length > 0;

            if (exists === true) {
                res.status(200).json(tags[0].Skills.coding.icons.map(item => Object.keys(item)[0]))

            } else {
                res.status(500).json({ msg: "Tags are empty in database" })
            }
        }
    }
    if (url === '/api/Mongo' && req.method === 'GET') {
        if (query.type === 'update') {
            Schema.findOne(
                { 'projects': { $elemMatch: { '_id': new mongoose.Types.ObjectId(query.id) } } },
                { 'projects.$': 1 }
            ).then(async (result) => {
                res.status(200).json(result.projects[0])
            }).catch(error => {
                res.status(500).json({ msg: error })
            });
        }
    }
    if (url === '/api/Mongo' && req.method === 'POST') {
        if (query.type === 'profileTitle') {
            const filter = {};
            // Define the update to set the new image URL of the Hero field
            const update = { $set: { 'Hero.title': `${req.body}` } };
            // Set the options to create a new document if it does not exist
            const options = { upsert: true, new: true };
            // Use the findOneAndUpdate() method to find and update the document
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            })
                .catch((error) => {
                    res.status(500).json({ error: 'Failed to update profileTitle.' });
                });
        }
        if (query.type === 'profileDesc') {
            const filter = {};
            const update = { $set: { 'Hero.desc': `${req.body}` } };
            const options = { upsert: true, new: true };
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            })
                .catch((error) => {
                    res.status(500).json({ error: 'Failed to update profileDesc.' });
                });
        }
        if (query.type === 'profileButtTitle') {
            const filter = {};
            const update = { $set: { 'Hero.buttTitle': `${req.body}` } };
            const options = { upsert: true, new: true };
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            })
                .catch((error) => {
                    res.status(500).json({ error: 'Failed to update profileButtTitle.' });
                });
        }
        if (query.type === 'profileButtLink') {

            const filter = {};
            // Define the update to set the new image URL of the Hero field
            const update = { $set: { 'Hero.buttLink': `${req.body}` } };
            // Set the options to create a new document if it does not exist
            const options = { upsert: true, new: true };
            // Use the findOneAndUpdate() method to find and update the document
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            })
                .catch((error) => {
                    res.status(500).json({ error: 'Failed to update profileButtLink.' });
                });
        }
        if (query.type === 'skillsServices') {

            const filter = {};
            const update = { $set: { 'Skills.services': req.body } };
            const options = { upsert: true, new: true };
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            })
                .catch((error) => {
                    res.status(500).json({ error: 'Failed to update profileButtLink.' });
                });
        }
        if (query.type === 'skillsLanguages') {

            const filter = {};
            const update = { $set: { 'Skills.languages': req.body } };
            const options = { upsert: true, new: true };
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            })
                .catch((error) => {
                    res.status(500).json({ error: 'Failed to update profileButtLink.' });
                });
        }
        if (query.type === 'addProject') {
            const data = JSON.parse(req.body)
            const project = await Schema.findOne({ 'projects.title': data.title });
            const exists = project !== null;
            if (exists === false) {
                const filter = {};
                const update = {
                    $push: {
                        'projects': {
                            title: data.title, image: data.descImage,
                            desc: data.descInput, tags: data.tags, editordata: data.dataFromEditor
                        }
                    }
                };
                const options = { upsert: true, new: true, returnOriginal: false };
                Schema.findOneAndUpdate(filter, update, options).then(async () => {
                    const project_id = await Schema.findOne(
                        { 'projects': { $elemMatch: { title: data.title } } }, { 'projects._id.$': 1 });

                    await res.revalidate('/')
                    await res.revalidate('/project/' + project_id.projects[0]._id.toString())
                    res.status(200).json(data);
                }).catch((error) => {
                    res.status(500).json({ error: 'Failed to update project.' });
                });
            } else {
                res.status(500).json({ error: 'project already exist' });
            }
        }
        if (query.type === 'aboutMe') {
            const filter = {};
            const update = { $set: { 'aboutme.text': `${req.body}` } };
            const options = { upsert: true, new: true };
            Schema.findOneAndUpdate(filter, update, options).then(async (document) => {
                await res.revalidate('/')
                res.status(200).json(document);
            }).catch((error) => {
                res.status(500).json({ error: 'Failed to update aboutMe.' });
            });
        }
    }
}
