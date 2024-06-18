const http = require('http');
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export const config = {
    api: {
        bodyParser: false,
    },
}
import { icons } from 'react-icons';
import Schema from '../../../models/Schema';
import dbConnect from '../../../utils/mongo';
let length=0

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
    await dbConnect();
    const url = req.url.split('?')[0]
    const query = req.query
    if (url === '/api/upload' && req.method === 'POST') {
        if (!fs.existsSync('./Uploads')) {
            fs.mkdir('./Uploads', function (err) {
                if (err) {
                    res.statusCode = 500
                    res.end('error making a directory')
                    return
                }
            })
        }
        const filePath = path.join('Uploads', query.name);
        const fileStream = fs.createWriteStream(filePath);
        req.pipe(fileStream);
        fileStream.on('error', (err) => {
            res.statusCode = 500;
            res.end('An error occurred while uploading the file');
        });
        fileStream.on('finish', async () => {
            try {
                const resc = await cloudinary.uploader.upload(filePath, { public_id: "uploads/" + query.name.split(".")[0], overwrite: true })
                const generatedUrl = cloudinary.url("uploads/" + query.name, {
                    quality: 100
                });

                if (resc.url) {
                    
                    if (fs.existsSync(filePath)) {
                        fs.unlink(filePath, function (err) {
                            if (err) {
                                res.status(500).json({ msg: "failed to delete the File Path in upload" })
                                return;
                            }
                        });
                    }
                    if (query.type === 'profilePicFile') {
                        const filter = {};
                        const update = { $set: { 'Hero.image': generatedUrl} };
                        const options = { upsert: true, new: true };
                        Schema.findOneAndUpdate(filter, update, options).then((document) => {
                            res.statusCode = 200;
                            res.end(JSON.stringify({ msg: "profilePicFile uploaded successfully", url: generatedUrl}));
                          })
                          .catch((error) => {
                            res.statusCode = 500;
                            res.end(JSON.stringify({ msg: error}));
                          });
                    }
                    if (query.type === 'coding') {
                        const filter = {};
                        let icon={}
                        icon[query.tag]=generatedUrl
                        const document = await Schema.findOne({}, { 'Skills.coding.icons': 1 });
                        const icons1 = document.Skills.coding.icons;
                        let icons1length;
                        if(icons1.length===null||icons1.length===undefined){
                            icons1length=0

                        }else{
                            icons1length=icons1.length
                        }
                        if(query.length>=icons1length){
                            const update = { $addToSet: { 'Skills.coding.icons': icon }};
                            const options = { upsert: true, new: true };
                            Schema.findOneAndUpdate(filter, update, options).then((document) => {
                                res.statusCode = 200;
                                res.end(JSON.stringify({ msg: "profilePicFile uploaded successfully", url: generatedUrl}));
                            })
                            .catch((error) => {
                                res.statusCode = 500;
                                res.end(JSON.stringify({ msg: error}));
                            });
                        }
                        if(query.length<icons1length){
                            const update = { $set: { 'Skills.coding.icons': icon }};
                            const options = { upsert: true, new: true };
                            Schema.findOneAndUpdate(filter, update, options).then((document) => {
                                res.statusCode = 200;
                                res.end(JSON.stringify({ msg: "profilePicFile uploaded successfully", url: generatedUrl}));
                            })
                            .catch((error) => {
                                res.statusCode = 500;
                                res.end(JSON.stringify({ msg: error}));
                            });
                        }
                    }
                    if(query.type === 'addProjectDescImage'){
                        res.statusCode = 200;
                        res.end(JSON.stringify({ msg: "addProjectDescImage uploaded successfully", url: generatedUrl}));
                    }
                    if(query.type === 'addProjectEditorImage'){
                        res.statusCode = 200;
                        res.end(JSON.stringify({ msg: "addProjectEditorImage uploaded successfully", url: generatedUrl}));
                    }
                } else {
                    res.statusCode = 500;
                    res.end('something wrong resc');
                }

            } catch (err) {
                res.statusCode = 500;
                res.end(err);
            }

        });
    }
    else {
        res.statusCode = 404;
        res.end('Not found');
    }
}
