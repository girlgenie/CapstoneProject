//imports
import express from 'express'; 
import { PORT, mongoDBURL } from './config.js'; 
import mongoose from 'mongoose';


const app = express(); 

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
        //port listening 
        app.listen(PORT, () => { 
            console.log(`server listening on port: ${PORT}`)
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
