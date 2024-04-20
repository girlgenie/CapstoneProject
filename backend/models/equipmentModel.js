import mongoose from "mongoose"

    const heavyHaulSchema = new mongoose.Schema({
        name:String,
        weightCapacity: Number, 
        length: Number  
        //     Make:{type: String, required: true},
        //     Model:{type: String, required: true}, 
        //     Specs:{type: String, required: true},
        //     imageName:{type: String, required: true},
        //     imageData:{type: Buffer}, 
        //     contentType:{type: String}
    
        //     },
        // location: {
        //     state: {type:String, required: true}   
        
    });

export const HeavyHaul = mongoose.model('HeavyHaul', heavyHaulSchema);

export async function createHeavyHaulCollection() {
    try{ 
    // creating the schema for the heavy haul collection 
    await HeavyHaul.collection.drop(); //this line will drop or delete any existing collection 
    await HeavyHaul.createCollection(); //this line will create a new collection 
    console.log('Created heavy haul collection'); 
} catch (error) {
    console.log("Error creating heavy haul collection", error); 
}
}
createHeavyHaulCollection
// export const HeavyHaul = mongoose.model('HeavyHaul', heavyHaulSchema);
