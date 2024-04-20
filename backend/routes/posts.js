import react from 'react'; 
import express from 'express'; 
import { equipment, equipment } from '../models/equipmentModel';
import {HeavyHaul} from './models/equipmentModel'; 
import { mongoDBURL } from '../config';

//routes

//get
app.get('/', async (req, res) => {
    try {
        const equipments = await HeavyHaul.find(mongoDBURL);
        res.json(equipment);
    } catch (error) {
        res.status(500).json('can not find data' );
    }
});

// app.get('/equipment', async (req, res) => {
//     try {
//         const equipments = await equipment.find();
//         res.json(equipment);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// //post
// app.post('/equipments', async (req,res) => { 
//     const equipment = new equipment({ 
//         EquipmentType: req.body.EquipmentType, 
//         }); 
//     try { 
//         const newEquipment = await equipment.save(); 
//         res.status(201).json(newEquipment); 
//     } catch(error) { 
//         res.status(400).json({message: error.message});
//     }   
// });