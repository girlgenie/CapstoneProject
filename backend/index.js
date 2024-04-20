//imports
import express from 'express'; 
import { PORT, mongoDBURL } from './config.js'; 
import mongoose from 'mongoose';
import multer from 'multer';  //photo upload package
import cors from 'cors'
import { createHeavyHaulCollection } from './models/equipmentModel.js';
// import cors ;

const collection = createHeavyHaulCollection(); 

const app = express(); 
const upload = multer({dest: 'uploads/'});  //photo upload 

// middleware

app.use(cors());
app.use(express.json()); 

app.get('/', (request, response) => { 
    console.log(request)
    return response.status(234).send("insert any message you want here to display on browser")
}); 

connectToMongoDB(mongoDBURL); 

//database connection using URL as a parameter
async function connectToMongoDB(mongoDBURL) { 
    try { 
        await mongoose.connect(mongoDBURL); 
        console.log('Connected to MongoDB');
        //port listening for incoming requests
        collection
        app.listen(PORT, () => { 
            console.log(`server listening on port: ${PORT}`)
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
